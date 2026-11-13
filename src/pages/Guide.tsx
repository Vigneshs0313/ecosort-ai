import { Check, Info, X } from 'lucide-react'
import { DONTS, DOS, PROCESSES, SEGREGATION_COLLEGE, SEGREGATION_HOME } from '../data/guide'

const List = ({ items }: { items: string[] }) => <ul className="mt-3 space-y-2">{items.map(i => <li key={i} className="flex gap-2"><Check size={18} className="mt-1 shrink-0 text-brand" />{i}</li>)}</ul>

export default function Guide() {
  return (
    <div className="container-x py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Recycling guide</h1>
      <p className="mt-2 max-w-2xl text-slate-600">Practical steps for sorting at home and on campus, and a plain-language look at what happens next.</p>
      <p className="mt-4 flex gap-2 rounded-xl bg-sky-50 p-4 text-sm text-sky-900"><Info size={18} className="mt-0.5 shrink-0" />Local rules differ. A material that is recycled in one city may not be accepted in another, so check what your collector takes.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <section className="card p-6"><h2 className="text-xl font-bold">Segregating waste at home</h2><List items={SEGREGATION_HOME} /></section>
        <section className="card p-6"><h2 className="text-xl font-bold">Segregating waste at college</h2><List items={SEGREGATION_COLLEGE} /></section>
      </div>

      <h2 className="mt-12 text-2xl font-extrabold">What happens to each material</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {PROCESSES.map(p => (
          <section key={p.title} className="card p-6">
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{p.summary}</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">{p.steps.map(s => <li key={s}>{s}</li>)}</ol>
          </section>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-extrabold">Do's and don'ts</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <section className="card border-t-4 border-t-brand p-6"><h3 className="font-bold text-brand-dark">Do</h3><ul className="mt-3 space-y-2">{DOS.map(d => <li key={d} className="flex gap-2"><Check size={18} className="mt-1 shrink-0 text-brand" />{d}</li>)}</ul></section>
        <section className="card border-t-4 border-t-red-500 p-6"><h3 className="font-bold text-red-700">Don't</h3><ul className="mt-3 space-y-2">{DONTS.map(d => <li key={d} className="flex gap-2"><X size={18} className="mt-1 shrink-0 text-red-600" />{d}</li>)}</ul></section>
      </div>
    </div>
  )
}
