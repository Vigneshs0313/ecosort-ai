import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Recycle, ScanLine, X } from 'lucide-react'

const LINKS = [
  ['/', 'Home'], ['/scanner', 'AI Scanner'], ['/categories', 'Categories'], ['/guide', 'Recycling Guide'], ['/dashboard', 'Dashboard'], ['/about', 'About'],
] as const

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-brand-dark" aria-label="EcoSort AI home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white"><Recycle size={20} /></span>
      EcoSort <span className="text-brand">AI</span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-brand-light text-brand-dark' : 'text-slate-600 hover:text-brand-dark hover:bg-slate-100'}`
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {LINKS.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/scanner" className="btn-primary !py-2 !px-4 text-sm"><ScanLine size={16} /> Scan Waste</Link>
          <button className="lg:hidden rounded-lg p-2 hover:bg-slate-100" onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 grid gap-1" aria-label="Mobile">
          {LINKS.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={cls} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
      )}
    </header>
  )
}
