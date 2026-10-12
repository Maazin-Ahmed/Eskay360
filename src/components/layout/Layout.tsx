import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/footer/Footer'

export function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
