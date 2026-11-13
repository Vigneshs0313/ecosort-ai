import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Ban, Leaf, Trash, X } from 'lucide-react'
import { CATEGORIES, CAT_BY_ID, type CategoryId } from '../data/categories'

export default function Categories() {
  const { id } = useParams()
  const nav = useNavigate()
  const open = id ? CAT_BY_ID[id as CategoryId] : undefined

  if (open) {
    const Icon = open.icon
    return (
      <div className="container-x py-10">
        <Link to="/categories" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark"><ArrowLeft size={16} /> All categories</Link>
        <div className="card mt-4 overflow-hidden">
          <div className="flex items-center gap-4 p-6 text-white" style={{ background: open.color }}>
            <Icon size={40} /><div><h1 className="text-3xl font-extrabold">{open.name}</h1><p className="opacity-90">{open.recyclable ? 'Recoverable when handled correctly' : 'Residual waste'}</p></div>
          </div>
          <div className="grid gap-8 p-6 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-lg">{open.description}</p>
              <div><h2 className="font-bold">Common examples</h2><div className="mt-2 flex flex-wrap gap-2">{open.examples.map(e => <span key={e} className="chip bg-slate-100">{e}</span>)}</div></div>
              <div><h2 className="font-bold">Correct bin</h2><p className="mt-1 flex gap-2"><Trash size={18} className="mt-1 shrink-0" />{open.bin}</p></div>
              <div><h2 className="font-bold">Why it matters</h2><p className="mt-1 flex gap-2"><Leaf size={18} className="mt-1 shrink-0 text-brand" />{open.importance}</p></div>
            </div>
            <div className="space-y-5">
              <div><h2 className="font-bold">How to dispose of it</h2><ol className="mt-2 list-decimal space-y-1 pl-5">{open.steps.map(s => <li key={s}>{s}</li>)}</ol></div>
              <div><h2 className="font-bold">Keep out of this stream</h2><ul className="mt-2 space-y-1">{open.avoid.map(a => <li key={a} className="flex gap-2"><Ban size={16} className="mt-1 shrink-0 text-red-600" />{a}</li>)}</ul></div>
              <p className="text-xs text-slate-500">Collection rules differ by city and provider. Not every item in a category is accepted everywhere.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-x py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Waste categories</h1>
      <p className="mt-2 max-w-2xl text-slate-600">Seven streams cover most household and campus waste. Select a card for the full guidance.</p>
      {id && <p className="mt-4 flex items-center gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">That category does not exist. <button onClick={() => nav('/categories')}><X size={14} /></button></p>}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(c => (
          <Link key={c.id} to={`/categories/${c.id}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-2" style={{ background: c.color }} />
            <div className="p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: c.color }}><c.icon size={22} /></span>
                <h2 className="text-xl font-bold">{c.name}</h2>
              </div>
              <p className="mt-3 text-sm text-slate-600">{c.description}</p>
              <p className="mt-3 text-sm"><b>Examples:</b> {c.examples.join(', ')}</p>
              <p className="mt-2 text-sm"><b>Bin:</b> {c.bin}</p>
              <p className="mt-3 text-sm font-semibold text-brand-dark group-hover:underline">View details</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
