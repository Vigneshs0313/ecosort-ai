import { Logo } from './Navbar'

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-green-100">
      <div className="container-x grid gap-6 py-10 sm:grid-cols-2">
        <div>
          <div className="[&_a]:!text-white"><Logo /></div>
          <p className="mt-3 max-w-sm text-sm text-green-200">Identify. Segregate. Recycle. Repeat.</p>
        </div>
        <p className="text-sm text-green-200 sm:text-right">
          Built for IGEN GREEN DAY 2026, Section C: Nine Green Action Projects.<br />
          Images are analysed on your device and are never uploaded.<br />
          Disposal advice is general. Always follow your local collection rules.
        </p>
      </div>
    </footer>
  )
}
