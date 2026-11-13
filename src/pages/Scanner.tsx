import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Camera, CheckCircle2, Cpu, Info, Loader2, RefreshCw, Save, ScanLine, Upload, Undo2, X } from 'lucide-react'
import { CATEGORIES, CAT_BY_ID, type CategoryId } from '../data/categories'
import { classify, clearCustomModel, getCustomModel, loadCustomModel, loadMobileNet, LOW_CONFIDENCE, type ClassifyResult } from '../lib/classifier'
import { makeThumb, newId } from '../lib/image'
import { useScans } from '../lib/store'
import type { ScanRecord } from '../lib/types'
import CategoryBadge from '../components/CategoryBadge'

type ModelState = 'idle' | 'loading' | 'ready' | 'error'
const MAX_BYTES = 12 * 1024 * 1024

export default function Scanner() {
  const { addRecord, storageError } = useScans()
  const [imgUrl, setImgUrl] = useState<string | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [model, setModel] = useState<ModelState>('idle')
  const [modelError, setModelError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<ClassifyResult | null>(null)
  const [manual, setManual] = useState<CategoryId | null>(null)   // user's own choice (correction or manual pick)
  const [feedback, setFeedback] = useState('')
  const [saved, setSaved] = useState<string | null>(null)
  const [drag, setDrag] = useState(false)
  const [cameraOn, setCameraOn] = useState(false)
  const [useCustom, setUseCustom] = useState(false)
  const [customMsg, setCustomMsg] = useState<string | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const customRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Warm up the model in the background so "Analyze" feels fast.
  const warm = useCallback(async () => {
    setModel('loading'); setModelError(null)
    try { await loadMobileNet(); setModel('ready') }
    catch (e) { setModel('error'); setModelError(e instanceof Error ? e.message : String(e)) }
  }, [])
  useEffect(() => { warm() }, [warm])
  useEffect(() => () => { streamRef.current?.getTracks().forEach(t => t.stop()) }, [])
  useEffect(() => () => { if (imgUrl) URL.revokeObjectURL(imgUrl) }, [imgUrl])

  const reset = () => { setImgUrl(null); setResult(null); setManual(null); setFeedback(''); setSaved(null); setFileError(null) }

  const accept = (file?: File | null) => {
    if (!file) return
    if (!file.type.startsWith('image/')) return setFileError('That file is not an image. Choose a JPG, PNG or WebP photo.')
    if (file.size > MAX_BYTES) return setFileError('That image is larger than 12 MB. Choose a smaller photo.')
    reset(); setImgUrl(URL.createObjectURL(file))
  }

  const analyze = async () => {
    if (!imgRef.current) return
    setBusy(true); setResult(null); setManual(null); setSaved(null)
    try { setResult(await classify(imgRef.current, useCustom)) }
    catch (e) { setModel('error'); setModelError(e instanceof Error ? e.message : String(e)) }
    finally { setBusy(false) }
  }

  const startCamera = async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      streamRef.current = s; setCameraOn(true)
      requestAnimationFrame(() => { if (videoRef.current) videoRef.current.srcObject = s })
    } catch { setFileError('Camera unavailable. Allow camera access in your browser, or upload a photo instead.') }
  }
  const stopCamera = () => { streamRef.current?.getTracks().forEach(t => t.stop()); streamRef.current = null; setCameraOn(false) }
  const snap = () => {
    const v = videoRef.current; if (!v) return
    const c = document.createElement('canvas'); c.width = v.videoWidth; c.height = v.videoHeight
    c.getContext('2d')!.drawImage(v, 0, 0)
    c.toBlob(b => { if (b) accept(new File([b], 'capture.jpg', { type: 'image/jpeg' })); stopCamera() }, 'image/jpeg', 0.9)
  }

  const onCustom = async (files: FileList | null) => {
    if (!files?.length) return
    try { const m = await loadCustomModel(files); setUseCustom(true); setCustomMsg(`Loaded ${m.name || 'custom model'} with ${m.labels.length} labels.`) }
    catch (e) { setCustomMsg(e instanceof Error ? e.message : 'Could not load the custom model.'); setUseCustom(false) }
  }

  // Final category: a manual choice always wins over the AI suggestion; the AI suggestion is kept separately.
  const finalCat: CategoryId | null = manual ?? result?.predictedCategory ?? null
  const cat = finalCat ? CAT_BY_ID[finalCat] : null
  const low = result?.confidence != null && result.confidence < LOW_CONFIDENCE
  const corrected = !!result && manual !== null && manual !== result.predictedCategory

  const save = () => {
    if (!result || !finalCat || !imgRef.current) return
    const now = new Date().toISOString()
    const rec: ScanRecord = {
      id: newId(), createdAt: now, thumb: makeThumb(imgRef.current), source: result.source, modelName: result.modelName,
      rawPredictions: result.raw, itemLabel: result.itemLabel, confidence: result.confidence, mappingNote: result.mappingNote,
      predictedCategory: result.predictedCategory, category: finalCat,
      correction: corrected ? { from: result.predictedCategory, to: finalCat, at: now, feedback: feedback.trim() } : undefined,
    }
    addRecord(rec); setSaved(rec.id)
  }

  return (
    <div className="container-x py-10">
      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">AI Waste Scanner</h1>
        <p className="mt-2 text-slate-600">Add a photo of one item. A neural network runs inside your browser and suggests how to dispose of it. Your photo never leaves this device.</p>
      </header>

      <ModelBanner state={model} error={modelError} onRetry={warm} />
      {storageError && <Notice tone="warn">{storageError}</Notice>}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input column */}
        <section className="card p-5" aria-label="Image input">
          {!imgUrl && !cameraOn && (
            <div
              onDragOver={e => { e.preventDefault(); setDrag(true) }} onDragLeave={() => setDrag(false)}
              onDrop={e => { e.preventDefault(); setDrag(false); accept(e.dataTransfer.files[0]) }}
              className={`grid min-h-[300px] place-items-center rounded-xl border-2 border-dashed p-6 text-center transition ${drag ? 'border-brand bg-brand-light' : 'border-slate-300 bg-slate-50'}`}
            >
              <div>
                <Upload className="mx-auto text-brand" size={36} />
                <p className="mt-3 font-semibold">Drag and drop an image here</p>
                <p className="text-sm text-slate-500">JPG, PNG or WebP, up to 12 MB</p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <button className="btn-primary" onClick={() => fileRef.current?.click()}><Upload size={18} /> Choose image</button>
                  <button className="btn-ghost" onClick={startCamera}><Camera size={18} /> Use camera</button>
                </div>
              </div>
            </div>
          )}
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => { accept(e.target.files?.[0]); e.target.value = '' }} />

          {cameraOn && (
            <div>
              <video ref={videoRef} autoPlay playsInline muted className="w-full rounded-xl bg-black" />
              <div className="mt-3 flex gap-3">
                <button className="btn-primary flex-1" onClick={snap}><Camera size={18} /> Capture</button>
                <button className="btn-ghost" onClick={stopCamera}><X size={18} /> Cancel</button>
              </div>
            </div>
          )}

          {imgUrl && (
            <div>
              <div className="relative overflow-hidden rounded-xl bg-slate-100">
                <img ref={imgRef} src={imgUrl} alt="Waste item to analyse" className="mx-auto max-h-[380px] w-auto object-contain" />
                {busy && <div className="absolute inset-0 bg-brand-dark/20"><div className="scan-line absolute inset-x-0 h-1 bg-accent shadow-[0_0_18px_4px_#0EA5E9]" /></div>}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="btn-primary" onClick={analyze} disabled={busy || model === 'loading' || (model === 'error' && !(useCustom && getCustomModel()))}>
                  {busy ? <><Loader2 className="animate-spin" size={18} /> Analysing…</> : <><ScanLine size={18} /> Analyze Waste</>}
                </button>
                <button className="btn-ghost" onClick={reset}><RefreshCw size={18} /> Scan Another Item</button>
              </div>
              {model === 'loading' && <p className="mt-2 text-sm text-slate-500">The AI model is still downloading (one time, about 14 MB). You can analyse as soon as it is ready.</p>}
            </div>
          )}
          {fileError && <Notice tone="error">{fileError}</Notice>}

          <details className="mt-5 rounded-xl border border-slate-200 p-4 text-sm">
            <summary className="cursor-pointer font-semibold flex items-center gap-2"><Cpu size={16} /> Optional: use your own waste model</summary>
            <p className="mt-2 text-slate-600">Train a classifier on a waste dataset, export it as a TensorFlow.js layers model, then select <code>model.json</code>, its <code>.bin</code> files and a <code>labels.json</code> array of class names. It runs locally; nothing is uploaded.</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <button className="btn-ghost !py-2" onClick={() => customRef.current?.click()}>Load custom model</button>
              {getCustomModel() && (
                <>
                  <label className="flex items-center gap-2"><input type="checkbox" checked={useCustom} onChange={e => setUseCustom(e.target.checked)} /> Use it</label>
                  <button className="text-slate-500 underline" onClick={() => { clearCustomModel(); setUseCustom(false); setCustomMsg('Custom model removed.') }}>Remove</button>
                </>
              )}
            </div>
            <input ref={customRef} type="file" multiple accept=".json,.bin" className="hidden" onChange={e => { onCustom(e.target.files); e.target.value = '' }} />
            {customMsg && <p className="mt-2 text-slate-700">{customMsg}</p>}
          </details>
        </section>

        {/* Result column */}
        <section aria-live="polite" aria-label="Result">
          {!result && !busy && (
            <div className="card grid min-h-[300px] place-items-center p-8 text-center text-slate-500">
              <div><ScanLine className="mx-auto mb-3 text-slate-300" size={40} /><p>Your result appears here after you analyse an image.</p>
                <p className="mt-4 text-sm">Model unavailable or wrong? You can pick the category yourself:</p>
                <ManualPicker value={manual} onChange={c => { setManual(c) }} compact />
                {manual && imgUrl && (
                  <button className="btn-primary mt-4" onClick={() => {
                    if (!imgRef.current) return
                    setResult({ source: 'manual', modelName: 'Manual selection (no AI used)', raw: [], itemLabel: 'Item chosen manually', confidence: null, predictedCategory: null, mappingNote: 'No AI prediction. The category was selected by the user.' })
                  }}>Continue with {CAT_BY_ID[manual].short}</button>
                )}
                {manual && !imgUrl && <p className="mt-3 text-sm">Add an image first so the scan can be saved.</p>}
              </div></div>
          )}
          {busy && <div className="card grid min-h-[300px] place-items-center p-8"><Loader2 className="animate-spin text-brand" size={40} /><p className="mt-3 text-slate-600">Running the model on your device…</p></div>}

          {result && (
            <div className="card overflow-hidden">
              <div className="p-5" style={{ background: cat ? cat.color + '14' : '#f1f5f9' }}>
                <p className="text-sm text-slate-600">Detected item</p>
                <h2 className="text-2xl font-extrabold capitalize">{result.itemLabel}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {finalCat ? <CategoryBadge id={finalCat} /> : <span className="chip bg-slate-200">No category suggested</span>}
                  {result.confidence != null && <span className="chip bg-white border border-slate-200">Confidence {(result.confidence * 100).toFixed(1)}%</span>}
                  {corrected && <span className="chip bg-amber-100 text-amber-900">Corrected by you</span>}
                </div>
              </div>

              <div className="space-y-5 p-5">
                {low && <Notice tone="warn"><b>Low confidence.</b> The model is unsure about this image. Check the suggestion and correct it below if needed.</Notice>}
                {!result.predictedCategory && result.source !== 'manual' && <Notice tone="warn">{result.mappingNote}</Notice>}

                {result.source !== 'manual' && (
                  <div className="rounded-xl bg-slate-50 p-4 text-sm">
                    <p className="flex items-center gap-2 font-semibold"><Info size={16} /> How this result was produced</p>
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li><b>Model:</b> {result.modelName}</li>
                      <li><b>Original model output:</b> {result.raw.slice(0, 3).map(p => `${p.label.split(',')[0]} ${(p.probability * 100).toFixed(0)}%`).join(' · ')}</li>
                      <li><b>Category mapping:</b> {result.mappingNote}</li>
                    </ul>
                    {result.source === 'mobilenet' && <p className="mt-2 text-xs text-slate-500">MobileNet recognises 1,000 everyday objects, not waste types. Treat the category as a guide.</p>}
                  </div>
                )}

                {cat ? (
                  <>
                    <Info2 label="Recommended bin" value={cat.bin} />
                    <Info2 label="Recycling possibility" value={cat.recyclable ? (cat.id === 'organic' ? 'Compostable' : cat.id === 'ewaste' ? 'Recoverable through authorised e-waste channels only' : 'Recyclable if clean and accepted locally') : 'Not recyclable through ordinary collection'} />
                    <Info2 label="Environmental impact" value={cat.impact} />
                    <div>
                      <h3 className="font-bold">Disposal instructions</h3>
                      <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-700">{cat.steps.map(s => <li key={s}>{s}</li>)}</ol>
                      <p className="mt-2 text-xs text-slate-500">Rules differ between cities and collectors. Follow local guidance where it differs.</p>
                    </div>
                  </>
                ) : <p className="text-slate-600">Choose a category below to see disposal instructions.</p>}

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-bold">{result.source === 'manual' ? 'Selected category' : 'Wrong? Correct the category'}</h3>
                  <ManualPicker value={finalCat} onChange={c => { setManual(c); setSaved(null) }} />
                  {corrected && (
                    <label className="mt-3 block text-sm">Optional feedback
                      <textarea value={feedback} onChange={e => setFeedback(e.target.value.slice(0, 300))} rows={2} placeholder="e.g. This was an aluminium can, not a bottle."
                        className="mt-1 w-full rounded-lg border border-slate-300 p-2" />
                    </label>
                  )}
                  {manual && result.predictedCategory && (
                    <button className="mt-2 inline-flex items-center gap-1 text-sm text-slate-600 underline" onClick={() => setManual(null)}><Undo2 size={14} /> Back to the AI suggestion</button>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary" onClick={save} disabled={!finalCat || !!saved}><Save size={18} /> {saved ? 'Saved' : 'Save Result'}</button>
                  <button className="btn-ghost" onClick={reset}><RefreshCw size={18} /> Scan Another Item</button>
                </div>
                {saved && <Notice tone="ok">Saved to this browser. <Link to="/dashboard" className="underline font-semibold">View dashboard</Link>. Corrections are stored separately from the original AI prediction.</Notice>}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function Info2({ label, value }: { label: string; value: string }) {
  return <div><h3 className="text-sm font-semibold text-slate-500">{label}</h3><p className="font-medium">{value}</p></div>
}

function ManualPicker({ value, onChange, compact }: { value: CategoryId | null; onChange: (c: CategoryId) => void; compact?: boolean }) {
  return (
    <div className={`mt-3 flex flex-wrap gap-2 ${compact ? 'justify-center' : ''}`} role="radiogroup" aria-label="Waste category">
      {CATEGORIES.map(c => {
        const on = value === c.id, Icon = c.icon
        return (
          <button key={c.id} role="radio" aria-checked={on} onClick={() => onChange(c.id)}
            className={`chip border transition ${on ? 'text-white border-transparent' : 'bg-white border-slate-300 hover:border-slate-500'}`}
            style={on ? { background: c.color } : undefined}><Icon size={14} /> {c.short}</button>
        )
      })}
    </div>
  )
}

function Notice({ tone, children }: { tone: 'warn' | 'error' | 'ok'; children: React.ReactNode }) {
  const m = { warn: 'bg-amber-50 text-amber-900 border-amber-200', error: 'bg-red-50 text-red-900 border-red-200', ok: 'bg-green-50 text-green-900 border-green-200' }[tone]
  const I = tone === 'ok' ? CheckCircle2 : AlertTriangle
  return <div className={`my-3 flex gap-2 rounded-xl border p-3 text-sm ${m}`} role={tone === 'error' ? 'alert' : undefined}><I size={18} className="mt-0.5 shrink-0" /><div>{children}</div></div>
}

function ModelBanner({ state, error, onRetry }: { state: ModelState; error: string | null; onRetry: () => void }) {
  if (state === 'ready') return <Notice tone="ok">AI model ready. Analysis runs entirely on your device.</Notice>
  if (state === 'loading') return <div className="my-3 flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-sky-900"><Loader2 className="animate-spin" size={18} /> Loading the AI model (first time only)…</div>
  if (state === 'error') return (
    <Notice tone="error">
      <b>The AI model could not load.</b> {error ? <span className="break-words">({error})</span> : null} Check your internet connection (the model files download once, then are cached) and retry.
      You can still scan: add an image and choose the category manually. <button onClick={onRetry} className="ml-1 underline font-semibold">Retry</button>
    </Notice>
  )
  return null
}
