import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Guide from './pages/Guide'
import About from './pages/About'

const Scanner = lazy(() => import('./pages/Scanner'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded focus:bg-white focus:p-2">Skip to content</a>
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<p className="container-x py-20 text-center text-slate-500">Loading…</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
