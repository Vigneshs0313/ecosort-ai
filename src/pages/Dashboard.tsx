import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Award, Download, RotateCcw, ScanLine, Search, Trash2 } from 'lucide-react'
import { CATEGORIES, CAT_BY_ID, type CategoryId } from '../data/categories'
import { correctionsCsv, download, scansCsv } from '../lib/csv'
import { summarize } from '../lib/stats'
import { useScans } from '../lib/store'
import CategoryBadge from '../components/CategoryBadge'

const localDay = (iso: string) => { const d = new Date(iso); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` }

export default function Dashboard() {
  const { records, remove, clear, resetToAuditDataset, storageError } = useScans()
  const [filter, setFilter] = useState<CategoryId | 'all'>('all')
  const [q, setQ] = useState('')
  const [confirmClear, setConfirmClear] = useState(false)
  const s = useMemo(() => summarize(records), [records])

  const pie = CATEGORIES.map(c => ({ name: c.short, value: s.by[c.id], color: c.color })).filter(d => d.value > 0)
  const bars = CATEGORIES.map(c => ({ name: c.short, scans: s.by[c.id], color: c.color }))
  const daily = useMemo(() => {
    const m = new Map<string, number>()
    records.forEach(r => { const k = localDay(r.createdAt); m.set(k, (m.get(k) ?? 0) + 1) })
    return [...m.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([day, scans]) => ({ day, scans }))
  }, [records])

  const rows = records.filter(r => (filter === 'all' || r.category === filter) &&
    (!q.trim() || `${r.itemLabel} ${CAT_BY_ID[r.category].name} ${r.correction?.feedback ?? ''}`.toLowerCase().includes(q.trim().toLowerCase())))
  const nCorr = records.filter(r => r.correction).length
  const pct = (n: number) => (s.total ? Math.round((n / s.total) * 100) : 0)

  const cards = [
    { label: 'Total scans', value: s.total, color: '#14532D' },
    ...(['plastic', 'paper', 'metal', 'glass', 'organic'] as CategoryId[]).map(id => ({ label: `${CAT_BY_ID[id].short} identified`, value: s.by[id], color: CAT_BY_ID[id].color })),
    { label: 'Other identified', value: s.other, color: '#78716C', note: 'E-waste and general' },
  ]

  return (
    <div className="container-x py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Dashboard</h1>
          <p className="mt-2 text-slate-600">Every figure here is calculated from scans saved in this browser.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/audit" className="btn-primary !py-2 !px-4 text-sm"><Award size={16} /> Audit Evidence Report</Link>
          <button className="btn-ghost !py-2" disabled={!records.length} onClick={() => download('ecosort-scans.csv', scansCsv(records))}><Download size={16} /> Export scans CSV</button>
          <button className="btn-ghost !py-2" disabled={!nCorr} onClick={() => download('ecosort-corrections.csv', correctionsCsv(records))}><Download size={16} /> Export corrections ({nCorr})</button>
          <button className="btn-ghost !py-2 !text-slate-600 hover:!text-brand-dark" onClick={resetToAuditDataset} title="Reload initial 156-item verified audit dataset"><RotateCcw size={15} /> Reset to Audit Baseline</button>
        </div>
      </div>
      {storageError && <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900" role="alert">{storageError}</p>}

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {cards.map(c => (
          <div key={c.label} className="card border-l-4 p-4" style={{ borderLeftColor: c.color }}>
            <p className="font-display text-3xl font-extrabold">{c.value}</p>
            <p className="text-sm text-slate-600">{c.label}</p>
            {'note' in c && <p className="text-xs text-slate-400">{c.note}</p>}
          </div>
        ))}
      </div>

      {s.total === 0 ? (
        <div className="card mt-8 grid place-items-center p-12 text-center">
          <ScanLine size={44} className="text-slate-300" />
          <h2 className="mt-3 text-xl font-bold">No scans yet</h2>
          <p className="mt-1 max-w-md text-slate-600">Scan an item and select Save Result. Your charts and history will appear here.</p>
          <Link to="/scanner" className="btn-primary mt-5">Scan Waste</Link>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <section className="card p-5"><h2 className="font-bold">Category distribution</h2>
              <div className="h-64" role="img" aria-label="Pie chart of scans by category">
                <ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={pie} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={2}>{pie.map(d => <Cell key={d.name} fill={d.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-3 text-xs">{pie.map(d => <span key={d.name} className="flex items-center gap-1"><i className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />{d.name} {d.value}</span>)}</div>
            </section>
            <section className="card p-5"><h2 className="font-bold">Items scanned by category</h2>
              <div className="h-64" role="img" aria-label="Bar chart of scans by category">
                <ResponsiveContainer width="100%" height="100%"><BarChart data={bars}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" fontSize={12} /><YAxis allowDecimals={false} fontSize={12} /><Tooltip /><Bar dataKey="scans" radius={[6, 6, 0, 0]}>{bars.map(d => <Cell key={d.name} fill={d.color} />)}</Bar></BarChart></ResponsiveContainer>
              </div>
            </section>
            <section className="card p-5"><h2 className="font-bold">Daily scanning activity</h2>
              <div className="h-64" role="img" aria-label="Line chart of scans per day">
                <ResponsiveContainer width="100%" height="100%"><LineChart data={daily}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="day" fontSize={12} /><YAxis allowDecimals={false} fontSize={12} /><Tooltip /><Line type="monotone" dataKey="scans" stroke="#16A34A" strokeWidth={3} dot={{ r: 4 }} /></LineChart></ResponsiveContainer>
              </div>
            </section>
            <section className="card p-5"><h2 className="font-bold">Recyclable vs non-recyclable</h2>
              <p className="text-xs text-slate-500">Recyclable here means plastic, paper, metal and glass. Organic is compostable and e-waste needs special collection, so both are counted under the other group.</p>
              {[['Recyclable', s.recyclable, '#16A34A'], ['Other (organic, e-waste, general)', s.nonRecyclable, '#78716C']].map(([l, n, c]) => (
                <div key={l as string} className="mt-4">
                  <div className="flex justify-between text-sm"><span>{l}</span><span className="font-semibold">{n as number} ({pct(n as number)}%)</span></div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuenow={pct(n as number)} aria-valuemin={0} aria-valuemax={100} aria-label={l as string}><div className="h-full rounded-full transition-all" style={{ width: `${pct(n as number)}%`, background: c as string }} /></div>
                </div>
              ))}
              <p className="mt-6 text-sm text-slate-600">{nCorr} of {s.total} scans were corrected by you. Corrections are exported separately so you can analyse where the model struggles. EcoSort does not retrain itself.</p>
            </section>
          </div>

          <section className="card mt-8 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="mr-auto text-lg font-bold">Scan history</h2>
              <label className="relative"><span className="sr-only">Search history</span><Search size={16} className="absolute left-3 top-3 text-slate-400" />
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search history" className="rounded-xl border border-slate-300 py-2 pl-9 pr-3 text-sm" /></label>
              <label><span className="sr-only">Filter by category</span>
                <select value={filter} onChange={e => setFilter(e.target.value as CategoryId | 'all')} className="rounded-xl border border-slate-300 px-3 py-2 text-sm">
                  <option value="all">All categories</option>{CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select></label>
              {!confirmClear ? <button className="btn-ghost !py-2 !text-red-700" onClick={() => setConfirmClear(true)}><Trash2 size={16} /> Clear all</button> : (
                <span className="flex items-center gap-2 rounded-xl bg-red-50 px-3 py-1.5 text-sm" role="alertdialog" aria-label="Confirm clear all history">
                  Delete all {s.total} scans? This cannot be undone.
                  <button className="rounded-lg bg-red-600 px-3 py-1 font-semibold text-white" onClick={() => { clear(); setConfirmClear(false) }}>Delete</button>
                  <button className="underline" onClick={() => setConfirmClear(false)}>Cancel</button>
                </span>
              )}
            </div>
            {rows.length === 0 ? <p className="mt-6 text-center text-slate-500">No scans match your search or filter.</p> : (
              <ul className="mt-4 divide-y divide-slate-100">
                {rows.map(r => (
                  <li key={r.id} className="flex items-center gap-4 py-3">
                    <img src={r.thumb} alt="" className="h-14 w-14 rounded-lg object-cover bg-slate-100" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold capitalize">{r.itemLabel}</p>
                      <p className="text-xs text-slate-500">{new Date(r.createdAt).toLocaleString()} · {r.confidence != null ? `${(r.confidence * 100).toFixed(0)}% confidence` : 'manual'}</p>
                      {r.correction && <p className="text-xs text-amber-700">AI said {r.correction.from ? CAT_BY_ID[r.correction.from].short : 'nothing'}, corrected to {CAT_BY_ID[r.correction.to].short}{r.correction.feedback ? `: ${r.correction.feedback}` : ''}</p>}
                    </div>
                    <CategoryBadge id={r.category} />
                    <button className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600" onClick={() => remove(r.id)} aria-label={`Delete scan ${r.itemLabel}`}><Trash2 size={18} /></button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  )
}
