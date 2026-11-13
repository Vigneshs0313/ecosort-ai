import { CAT_BY_ID } from '../data/categories'
import type { ScanRecord } from './types'

const esc = (v: unknown) => {
  let s = v == null ? '' : String(v)
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s            // block spreadsheet formula injection
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}
const toCsv = (head: string[], rows: unknown[][]) => [head, ...rows].map(r => r.map(esc).join(',')).join('\r\n')

export function scansCsv(records: ScanRecord[]) {
  return toCsv(
    ['id', 'timestamp', 'source', 'model', 'item_label', 'confidence_pct', 'ai_predicted_category', 'final_category', 'was_corrected', 'mapping_note'],
    records.map(r => [r.id, r.createdAt, r.source, r.modelName, r.itemLabel, r.confidence == null ? '' : (r.confidence * 100).toFixed(1),
      r.predictedCategory ? CAT_BY_ID[r.predictedCategory].name : '', CAT_BY_ID[r.category].name, r.correction ? 'yes' : 'no', r.mappingNote]),
  )
}

export function correctionsCsv(records: ScanRecord[]) {
  return toCsv(
    ['scan_id', 'corrected_at', 'model_label', 'confidence_pct', 'original_ai_category', 'corrected_category', 'feedback'],
    records.filter(r => r.correction).map(r => [r.id, r.correction!.at, r.itemLabel, r.confidence == null ? '' : (r.confidence * 100).toFixed(1),
      r.correction!.from ? CAT_BY_ID[r.correction!.from].name : 'none (no AI suggestion)', CAT_BY_ID[r.correction!.to].name, r.correction!.feedback]),
  )
}

export function download(filename: string, text: string) {
  const url = URL.createObjectURL(new Blob(['\ufeff' + text], { type: 'text/csv;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
