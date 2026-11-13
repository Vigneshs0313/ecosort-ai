import type { CategoryId } from '../data/categories'
import type { ScanRecord } from './types'

export const RECYCLABLE: CategoryId[] = ['plastic', 'paper', 'metal', 'glass']

export function summarize(records: ScanRecord[]) {
  const by: Record<CategoryId, number> = { plastic: 0, paper: 0, metal: 0, glass: 0, organic: 0, ewaste: 0, general: 0 }
  records.forEach(r => { by[r.category]++ })
  const total = records.length
  const recyclable = RECYCLABLE.reduce((n, c) => n + by[c], 0)
  const aiKept = records.filter(r => r.predictedCategory && !r.correction).length
  return { by, total, recyclable, organic: by.organic, aiKept, other: by.ewaste + by.general, nonRecyclable: total - recyclable }
}
