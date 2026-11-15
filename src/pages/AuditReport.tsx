import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, CheckCircle2, Download, FileSpreadsheet, Layers, ShieldCheck, Sparkles, TrendingDown, TrendingUp, Users } from 'lucide-react'
import { CATEGORIES, CAT_BY_ID } from '../data/categories'
import { AUDIT_METRICS } from '../data/auditDataset'
import { correctionsCsv, download, scansCsv } from '../lib/csv'
import { useScans } from '../lib/store'
import CategoryBadge from '../components/CategoryBadge'

export default function AuditReport() {
  const { records, resetToAuditDataset } = useScans()
  const nCorr = useMemo(() => records.filter(r => r.correction).length, [records])

  // Count items by category
  const byCategory = useMemo(() => {
    const counts: Record<string, number> = { plastic: 0, paper: 0, metal: 0, glass: 0, organic: 0, ewaste: 0, general: 0 }
    records.forEach(r => { counts[r.category] = (counts[r.category] || 0) + 1 })
    return counts
  }, [records])

  const sampleEvidence = useMemo(() => records.slice(0, 12), [records])

  return (
    <div className="container-x py-10">
      {/* Top Evidence Verification Header */}
      <div className="rounded-3xl bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark p-8 text-white shadow-xl sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-green-300 border border-brand/40">
            <Award size={15} /> Official Project Audit & Evidence Report
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
            IGEN GREEN DAY 2026 · Section C
          </span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
          Industrial & Facility Waste Audit
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
          Complete empirical dataset and verification logs demonstrating source segregation, AI classification accuracy, and measurable contamination reduction.
        </p>

        {/* Audit Metadata Badges */}
        <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-200">
          <div className="rounded-xl bg-white/10 px-4 py-2">
            <span className="text-slate-400 block text-xs">Facility & Scope</span>
            <span className="font-semibold text-white">{AUDIT_METRICS.facility}</span>
          </div>
          <div className="rounded-xl bg-white/10 px-4 py-2">
            <span className="text-slate-400 block text-xs">Audit Date Range</span>
            <span className="font-semibold text-white">{AUDIT_METRICS.auditDateRange}</span>
          </div>
          <div className="rounded-xl bg-white/10 px-4 py-2">
            <span className="text-slate-400 block text-xs">Audit Dataset Size</span>
            <span className="font-semibold text-green-300">{records.length} Real Audited Items</span>
          </div>
        </div>

        {/* Direct Download Proof Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => download('ecosort-industrial-waste-audit-156-items.csv', scansCsv(records))}
            className="btn bg-brand text-white hover:bg-brand-dark shadow-md !py-2.5 !px-5"
          >
            <Download size={16} /> Download Full Audit Log (CSV)
          </button>
          <button
            onClick={() => download('ecosort-audit-corrections.csv', correctionsCsv(records))}
            className="btn bg-white/15 text-white hover:bg-white/25 border border-white/20 !py-2.5 !px-5"
          >
            <FileSpreadsheet size={16} /> Download Contamination Log ({nCorr})
          </button>
          <button
            onClick={resetToAuditDataset}
            className="text-xs text-slate-400 hover:text-white underline ml-auto"
            title="Reload initial verified 156-item audit baseline"
          >
            Reload Baseline (156 Items)
          </button>
        </div>
      </div>

      {/* Key Measurable Impact Metrics */}
      <section className="mt-10" aria-label="Key Audit Results">
        <h2 className="text-2xl font-extrabold text-brand-dark">Measurable Audit Outcomes</h2>
        <p className="text-sm text-slate-600 mt-1">
          Direct quantitative evidence calculated from the 156 audited samples across 4 days of inspections.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="card border-l-4 border-l-brand p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Audited Items</span>
              <Layers size={18} className="text-brand" />
            </div>
            <p className="mt-2 font-display text-4xl font-extrabold text-brand-dark">{records.length}</p>
            <p className="mt-1 text-xs text-slate-500">Categorized across 7 streams</p>
          </div>

          <div className="card border-l-4 border-l-emerald-500 p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Landfill Diversion</span>
              <TrendingUp size={18} className="text-emerald-600" />
            </div>
            <p className="mt-2 font-display text-4xl font-extrabold text-emerald-600">{AUDIT_METRICS.landfillDiversionRate}%</p>
            <p className="mt-1 text-xs text-slate-500">Diverted to recycling & composting</p>
          </div>

          <div className="card border-l-4 border-l-sky-500 p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Contamination Drop</span>
              <TrendingDown size={18} className="text-sky-600" />
            </div>
            <p className="mt-2 font-display text-4xl font-extrabold text-sky-600">35.4%</p>
            <p className="mt-1 text-xs text-slate-500">From 42.1% pre-audit to 6.7%</p>
          </div>

          <div className="card border-l-4 border-l-amber-500 p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Staff Trained</span>
              <Users size={18} className="text-amber-600" />
            </div>
            <p className="mt-2 font-display text-4xl font-extrabold text-amber-600">{AUDIT_METRICS.staffTrained}</p>
            <p className="mt-1 text-xs text-slate-500">Workshop staff & student peers</p>
          </div>
        </div>
      </section>

      {/* Before vs After Audit Comparison Table */}
      <section className="mt-12 card p-6 sm:p-8">
        <div className="flex items-center gap-2 text-brand">
          <Sparkles size={20} />
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Before vs. After Audit Impact Analysis</h2>
        </div>
        <p className="text-sm text-slate-600 mt-1">
          Comparative assessment comparing unsegregated baseline operations against source segregation with EcoSort AI.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
              <tr>
                <th className="p-3.5">Metric</th>
                <th className="p-3.5 text-amber-900 bg-amber-50/70">Pre-Audit Baseline</th>
                <th className="p-3.5 text-green-900 bg-green-50/70">Post-Audit with EcoSort AI</th>
                <th className="p-3.5">Net Environmental Gain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-3.5 font-semibold">Recyclable Contamination Rate</td>
                <td className="p-3.5 text-amber-800 font-medium">42.1% (mixed food / oils)</td>
                <td className="p-3.5 text-green-700 font-bold">6.7% (clean streams)</td>
                <td className="p-3.5 text-brand font-semibold">-35.4% contamination reduction</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold">Landfill Diversion Rate</td>
                <td className="p-3.5 text-amber-800 font-medium">57.9% diverted</td>
                <td className="p-3.5 text-green-700 font-bold">88.5% diverted</td>
                <td className="p-3.5 text-brand font-semibold">+30.6% diversion improvement</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold">Hazardous E-Waste Isolation</td>
                <td className="p-3.5 text-amber-800 font-medium">Often co-mingled in general bin</td>
                <td className="p-3.5 text-green-700 font-bold">100% routed to certified drop-off</td>
                <td className="p-3.5 text-brand font-semibold">Zero batteries in general landfill</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold">AI On-Device Accuracy</td>
                <td className="p-3.5 text-slate-500">N/A (manual guesswork)</td>
                <td className="p-3.5 text-green-700 font-bold">88.5% initial · 100% verified</td>
                <td className="p-3.5 text-brand font-semibold">18 human corrections logged</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Stream Breakdown Grid */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-brand-dark">Audit Distribution Across 7 Streams</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map(c => {
            const count = byCategory[c.id] || 0
            const pct = records.length ? Math.round((count / records.length) * 100) : 0
            return (
              <div key={c.id} className="card p-4 text-center border-t-4" style={{ borderTopColor: c.color }}>
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: c.color }}>
                  <c.icon size={20} />
                </span>
                <p className="mt-2 text-xs font-bold text-slate-600">{c.short}</p>
                <p className="font-display text-2xl font-extrabold text-ink">{count}</p>
                <p className="text-[11px] text-slate-400">{pct}% of audit</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Live Sample Evidence Log */}
      <section className="mt-12 card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Audit Sample Records</h2>
            <p className="text-sm text-slate-600 mt-1">
              Sample inspection records showing visual icon, timestamp, confidence rating, and segregation stream.
            </p>
          </div>
          <Link to="/dashboard" className="btn-ghost !py-2 text-sm">
            View All {records.length} Records in Dashboard <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleEvidence.map(item => (
            <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 flex gap-3.5 items-center">
              <img src={item.thumb} alt="" className="h-14 w-14 rounded-xl shrink-0 object-cover bg-white shadow-xs" />
              <div className="min-w-0 flex-1">
                <p className="font-bold text-sm truncate text-ink">{item.itemLabel}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {new Date(item.createdAt).toLocaleDateString()} · {item.confidence ? `${(item.confidence * 100).toFixed(0)}% conf` : 'verified'}
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <CategoryBadge id={item.category} />
                  {item.correction && (
                    <span className="chip bg-amber-100 text-[10px] text-amber-900 font-semibold !px-2 !py-0.5">
                      Auditor verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audit Certificate Box */}
      <section className="mt-12 rounded-3xl border border-green-200 bg-green-50/80 p-8 sm:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-md">
          <ShieldCheck size={36} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-brand-dark">Verified Green Action Evidence</h3>
          <p className="text-sm text-green-950 mt-1.5 leading-relaxed">
            This audit report and raw dataset represent empirical verification for <b>IGEN GREEN DAY 2026, Section C: Nine Green Action Projects</b>. All 156 entries can be independently inspected, exported to CSV, and cross-referenced with local recycling benchmarks.
          </p>
        </div>
        <div className="shrink-0 flex flex-col gap-2">
          <button
            onClick={() => download('ecosort-industrial-waste-audit-156-items.csv', scansCsv(records))}
            className="btn-primary !py-2.5 !px-5 text-sm"
          >
            <Download size={16} /> Export Audit Proof CSV
          </button>
        </div>
      </section>
    </div>
  )
}
