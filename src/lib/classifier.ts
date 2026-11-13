import type { CategoryId } from '../data/categories'
import { mapCustomLabel, mapLabel } from '../data/mapping'
import type { ModelSource, RawPrediction } from './types'

/**
 * Real in-browser inference with TensorFlow.js. TF.js and the MobileNet weights are loaded lazily
 * the first time the scanner is used. Weights are downloaded once from Google's public model host
 * (tfhub / storage.googleapis.com); the user's IMAGE is never sent anywhere.
 */
export interface ClassifyResult {
  source: ModelSource
  modelName: string
  raw: RawPrediction[]
  itemLabel: string
  confidence: number | null
  predictedCategory: CategoryId | null
  mappingNote: string
}

type TF = typeof import('@tensorflow/tfjs')
let tfP: Promise<TF> | null = null
let mobilenetP: Promise<import('@tensorflow-models/mobilenet').MobileNet> | null = null
const loadTf = () => (tfP ??= import('@tensorflow/tfjs'))

export function loadMobileNet() {
  mobilenetP ??= (async () => {
    const tf = await loadTf()
    await tf.ready()
    const mn = await import('@tensorflow-models/mobilenet')
    return mn.load({ version: 2, alpha: 1.0 })
  })().catch(e => { mobilenetP = null; throw e })
  return mobilenetP
}

export interface CustomModel { model: import('@tensorflow/tfjs').LayersModel; labels: string[]; name: string }
let custom: CustomModel | null = null
export const getCustomModel = () => custom
export const clearCustomModel = () => { custom?.model.dispose(); custom = null }

/** Load a user-supplied TF.js layers model: model.json + weight .bin files + labels.json (array of strings). */
export async function loadCustomModel(files: FileList | File[]): Promise<CustomModel> {
  const tf = await loadTf()
  const list = Array.from(files)
  const json = list.find(f => f.name.endsWith('model.json'))
  const labelsFile = list.find(f => /labels?\.json$/i.test(f.name))
  const weights = list.filter(f => f.name.endsWith('.bin'))
  if (!json || !labelsFile || weights.length === 0) throw new Error('Select model.json, its .bin weight file(s) and labels.json together.')
  const labels = JSON.parse(await labelsFile.text())
  if (!Array.isArray(labels) || !labels.every(l => typeof l === 'string')) throw new Error('labels.json must be an array of strings, one per model output, in order.')
  const model = await tf.loadLayersModel(tf.io.browserFiles([json, ...weights]))
  const outDim = (model.outputs[0].shape as number[]).slice(-1)[0]
  if (outDim !== labels.length) throw new Error(`labels.json has ${labels.length} labels but the model outputs ${outDim} classes.`)
  clearCustomModel()
  custom = { model, labels, name: json.name.replace(/model\.json$/, '') || 'Custom model' }
  return custom
}

export const LOW_CONFIDENCE = 0.4

export async function classify(img: HTMLImageElement, useCustom: boolean): Promise<ClassifyResult> {
  if (useCustom && custom) return classifyCustom(img, custom)
  const net = await loadMobileNet()
  const preds = await net.classify(img, 5)
  const raw = preds.map(p => ({ label: p.className, probability: p.probability }))
  for (const p of raw) {
    const m = mapLabel(p.label)
    if (m) {
      return {
        source: 'mobilenet', modelName: 'MobileNetV2 (ImageNet, general-purpose)', raw,
        itemLabel: p.label.split(',')[0], confidence: p.probability, predictedCategory: m.category,
        mappingNote: `Model label "${p.label}" matched keyword "${m.matchedKeyword}" in EcoSort's mapping table. This is a heuristic suggestion, not a waste-trained prediction.`,
      }
    }
  }
  return {
    source: 'mobilenet', modelName: 'MobileNetV2 (ImageNet, general-purpose)', raw,
    itemLabel: raw[0]?.label.split(',')[0] ?? 'Unknown item', confidence: raw[0]?.probability ?? null, predictedCategory: null,
    mappingNote: 'None of the top 5 model labels matched a waste category, so no suggestion was made. Please choose the category manually.',
  }
}

async function classifyCustom(img: HTMLImageElement, c: CustomModel): Promise<ClassifyResult> {
  const tf = await loadTf()
  const shape = c.model.inputs[0].shape as (number | null)[]
  const [h, w] = [shape[1] ?? 224, shape[2] ?? 224]
  const probs = tf.tidy(() => {
    const x = tf.image.resizeBilinear(tf.browser.fromPixels(img), [h, w]).toFloat().div(255).expandDims(0)
    return (c.model.predict(x) as import('@tensorflow/tfjs').Tensor).squeeze()
  })
  const data = Array.from(await probs.data()); probs.dispose()
  const raw = data.map((p, i) => ({ label: c.labels[i], probability: p })).sort((a, b) => b.probability - a.probability).slice(0, 5)
  const top = raw[0]
  const cat = mapCustomLabel(top.label)
  return {
    source: 'custom', modelName: `Custom model (${c.name})`, raw, itemLabel: top.label, confidence: top.probability, predictedCategory: cat,
    mappingNote: cat ? `Custom model label "${top.label}" was mapped to this category by name. Inputs are scaled to 0–1.` : `Custom label "${top.label}" does not match a known category. Please choose manually.`,
  }
}
