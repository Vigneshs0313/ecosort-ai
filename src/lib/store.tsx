import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { CategoryId } from '../data/categories'
import { getInitialAuditRecords } from '../data/auditDataset'
import type { ScanRecord } from './types'

const KEY = 'ecosort-ai:scans:v1'

interface Ctx {
  records: ScanRecord[]
  storageError: string | null
  addRecord: (r: ScanRecord) => boolean
  correct: (id: string, to: CategoryId, feedback: string) => void
  remove: (id: string) => void
  clear: () => void
  resetToAuditDataset: () => void
}
const StoreCtx = createContext<Ctx | null>(null)

function load(): { records: ScanRecord[]; error: string | null } {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) {
      const initialAudit = getInitialAuditRecords()
      return { records: initialAudit, error: null }
    }
    const parsed = JSON.parse(raw) as ScanRecord[]
    // If an existing user has 0 scans saved, populate with the official audit dataset
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return { records: getInitialAuditRecords(), error: null }
    }
    return { records: parsed, error: null }
  } catch {
    return { records: getInitialAuditRecords(), error: 'Saved scans could not be read. Loaded official 156-item audit dataset baseline.' }
  }
}

export function ScanStoreProvider({ children }: { children: ReactNode }) {
  const initial = useMemo(load, [])
  const [records, setRecords] = useState<ScanRecord[]>(initial.records)
  const [storageError, setError] = useState<string | null>(initial.error)

  // Persist on every change; surface quota/permission errors instead of failing silently.
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(records)); setError(e => (e?.startsWith('Could not save') ? null : e)) }
    catch { setError('Could not save to browser storage (it may be full or disabled). New scans will be lost on refresh. Export your CSV or delete old scans.') }
  }, [records])

  // Keep multiple tabs in sync.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => { if (e.key === KEY) setRecords(load().records) }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const addRecord = useCallback((r: ScanRecord) => { setRecords(p => [r, ...p]); return true }, [])
  const correct = useCallback((id: string, to: CategoryId, feedback: string) => {
    setRecords(p => p.map(r => r.id !== id ? r : {
      ...r, category: to, correction: { from: r.predictedCategory, to, at: new Date().toISOString(), feedback: feedback.trim() },
    }))
  }, [])
  const remove = useCallback((id: string) => setRecords(p => p.filter(r => r.id !== id)), [])
  const clear = useCallback(() => setRecords([]), [])
  const resetToAuditDataset = useCallback(() => {
    const base = getInitialAuditRecords()
    setRecords(base)
  }, [])

  return (
    <StoreCtx.Provider value={{ records, storageError, addRecord, correct, remove, clear, resetToAuditDataset }}>
      {children}
    </StoreCtx.Provider>
  )
}

export function useScans() {
  const c = useContext(StoreCtx)
  if (!c) throw new Error('useScans must be used inside ScanStoreProvider')
  return c
}
