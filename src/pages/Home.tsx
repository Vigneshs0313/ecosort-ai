import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Camera, CloudOff, Factory, Globe2, Leaf, Lightbulb, ScanLine, ShieldCheck, Sprout, Trees } from 'lucide-react'
import { CATEGORIES } from '../data/categories'
import { summarize } from '../lib/stats'
import { useScans } from '../lib/store'

function HeroVisual() {
  // Seven colour-coded bins; one item sits inside a scan frame above them.
  const bins = CATEGORIES
  return (
    <svg viewBox="0 0 520 400" className="w-full" role="img" aria-label="Illustration: an item inside a scan frame above seven colour-coded waste bins">
      <rect x="150" y="20" width="220" height="150" rx="18" fill="#fff" stroke="#16A34A" strokeWidth="2" strokeDasharray="8 6" />
      {[[150, 20, 1, 1], [370, 20, -1, 1], [150, 170, 1, -1], [370, 170, -1, -1]].map(([x, y, dx, dy], i) => (
        <path key={i} d={`M${x} ${y + dy * 26} V${y} H${x + dx * 26}`} stroke="#0EA5E9" strokeWidth="5" fill="none" strokeLinecap="round" />
      ))}
      <rect x="236" y="56" width="48" height="84" rx="12" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="3" />
      <rect x="248" y="44" width="24" height="16" rx="4" fill="#0EA5E9" />
      <rect x="244" y="82" width="32" height="28" rx="4" fill="#fff" opacity=".8" />
      <rect x="160" y="98" width="200" height="3" fill="#0EA5E9" opacity=".55" />
      <path d="M260 178 V232" stroke="#14532D" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
      <path d="M252 226 l8 10 l8 -10" stroke="#14532D" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {bins.map((c, i) => {
        const w = 62, x = 8 + i * 72, y = 250
        return (
          <g key={c.id}>
            <rect x={x - 3} y={y - 8} width={w + 6} height="12" rx="5" fill={c.color} />
            <path d={`M${x} ${y + 4} h${w} l-6 112 h${-w + 12} z`} fill={c.color} opacity={i === 0 ? 1 : 0.86} />
            <text x={x + w / 2} y={y + 140} textAnchor="middle" fontSize="12" fontWeight="600" fill="#1E293B">{c.short}</text>
          </g>
        )
      })}
    </svg>
  )
}

const STEPS = [
  { icon: Camera, title: 'Add a photo', text: 'Upload, drag in or capture one item.' },
  { icon: Brain, title: 'AI analyses it', text: 'A neural network runs in your browser. No upload.' },
  { icon: ScanLine, title: 'Get a category', text: 'See the suggested bin and how confident the model is.' },
  { icon: Sprout, title: 'Dispose correctly', text: 'Follow the steps, or correct the result if it is wrong.' },
]
const WHY = [
  { icon: Factory, title: 'Cleaner recycling', text: 'Contaminated loads are often rejected. Sorting at source keeps recyclables usable.' },
  { icon: Leaf, title: 'Less methane', text: 'Food waste in landfills releases methane. Composting avoids it.' },
  { icon: ShieldCheck, title: 'Safer handling', text: 'Batteries and sharp or hazardous items injure workers and cause fires when mixed in.' },
  { icon: Trees, title: 'Saved resources', text: 'Recycled material needs less energy and fewer raw materials than new.' },
]
const SDGS = [
  { n: 11, t: 'Sustainable Cities and Communities', d: 'Cleaner, better-managed urban waste.', c: '#F99D26' },
  { n: 12, t: 'Responsible Consumption and Production', d: 'Less waste through reuse and recycling.', c: '#BF8B2E' },
  { n: 13, t: 'Climate Action', d: 'Lower emissions from landfill and manufacturing.', c: '#3F7E44' },
]

export default function Home() {
  const { records } = useScans()
  const s = summarize(records)
  const stats = [
    { label: 'Total items scanned', value: s.total }, { label: 'Recyclable items', value: s.recyclable },
    { label: 'Organic waste', value: s.organic }, { label: 'Waste successfully categorized', value: s.aiKept, note: 'AI suggestions you kept' },
  ]
  return (
    <>
      <section className="bg-gradient-to-b from-brand-light/70 to-canvas">
        <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.05] text-brand-dark sm:text-6xl">Turn Waste Into a Sustainable Future.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">Identify waste intelligently. Make responsible disposal decisions. Build a cleaner planet with EcoSort AI.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/scanner" className="btn-primary"><ScanLine size={18} /> Start Scanning</Link>
              <Link to="/guide" className="btn-ghost">Explore Recycling Guide <ArrowRight size={18} /></Link>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-500"><CloudOff size={16} /> Runs in your browser. Free, no account, no image upload.</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="container-x -mt-2" aria-label="Your statistics">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(x => (
            <div key={x.label} className="card p-5">
              <p className="font-display text-4xl font-extrabold text-brand-dark">{x.value}</p>
              <p className="mt-1 text-sm font-medium">{x.label}</p>
              {x.note && <p className="text-xs text-slate-500">{x.note}</p>}
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-500">{s.total === 0 ? 'No scans yet. These figures are calculated from the scans you save on this device, so they start at zero.' : 'Calculated from scans saved on this device.'}</p>
      </section>

      <section className="container-x mt-20">
        <h2 className="text-3xl font-extrabold">How EcoSort AI works</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((x, i) => (
            <li key={x.title} className="card p-5">
              <span className="text-sm font-bold text-brand">Step {i + 1}</span>
              <x.icon className="mt-3 text-brand-dark" />
              <h3 className="mt-3 text-lg font-bold">{x.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{x.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x mt-20">
        <h2 className="text-3xl font-extrabold">Why waste segregation matters</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {WHY.map(x => (
            <div key={x.title} className="card flex gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-light text-brand-dark"><x.icon size={22} /></span>
              <div><h3 className="font-bold">{x.title}</h3><p className="mt-1 text-sm text-slate-600">{x.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="flex items-end justify-between"><h2 className="text-3xl font-extrabold">Seven waste categories</h2><Link to="/categories" className="text-sm font-semibold text-brand-dark underline">See all details</Link></div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map(c => (
            <Link key={c.id} to={`/categories/${c.id}`} className="card group p-4 text-center transition hover:-translate-y-1">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: c.color }}><c.icon /></span>
              <p className="mt-3 text-sm font-bold">{c.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="rounded-3xl bg-brand-dark p-8 text-green-50 sm:p-12">
          <h2 className="text-3xl font-extrabold text-white">Environmental benefits</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            <li><Globe2 className="mb-2 text-green-300" /><b>Less landfill</b><p className="text-sm text-green-200">Correct sorting diverts material from dumps.</p></li>
            <li><Lightbulb className="mb-2 text-green-300" /><b>Energy saved</b><p className="text-sm text-green-200">Recycled materials generally need less energy than virgin ones.</p></li>
            <li><Leaf className="mb-2 text-green-300" /><b>Healthier soil and water</b><p className="text-sm text-green-200">Hazardous items stay out of ordinary waste.</p></li>
          </ul>
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="text-3xl font-extrabold">Sustainable Development Goals</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {SDGS.map(g => (
            <div key={g.n} className="card overflow-hidden">
              <div className="p-5 text-white" style={{ background: g.c }}><p className="font-display text-5xl font-extrabold">{g.n}</p></div>
              <div className="p-5"><h3 className="font-bold">{g.t}</h3><p className="mt-1 text-sm text-slate-600">{g.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="card flex flex-col items-center gap-4 p-10 text-center">
          <h2 className="text-3xl font-extrabold">Scan your first item</h2>
          <p className="max-w-lg text-slate-600">It takes a few seconds and shows exactly how to dispose of it.</p>
          <Link to="/scanner" className="btn-primary"><ScanLine size={18} /> Scan Waste</Link>
        </div>
      </section>
    </>
  )
}
