import type { CategoryId } from '../data/categories'

export type ModelSource = 'mobilenet' | 'custom' | 'manual'

export interface RawPrediction { label: string; probability: number }

export interface ScanRecord {
  id: string
  createdAt: string            // ISO timestamp
  thumb: string                // small JPEG data URL (stored locally only)
  source: ModelSource          // which model (or manual) produced the original result
  modelName: string
  rawPredictions: RawPrediction[]   // untouched model output
  itemLabel: string            // label shown to the user
  confidence: number | null    // 0..1 for the label that drove the suggestion
  mappingNote: string          // how the label became a category
  predictedCategory: CategoryId | null  // ORIGINAL suggestion – never overwritten by corrections
  category: CategoryId         // effective category (manual choice or correction wins)
  correction?: { from: CategoryId | null; to: CategoryId; at: string; feedback: string }
}
