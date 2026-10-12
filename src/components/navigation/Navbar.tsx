import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/data/site'
import logoDark from '@/assets/logo-dark.png'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-xs border-b border-neutral-200/90'
          : 'bg-white/95 backdrop-blur-md border-b border-neutral-100'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center flex-shrink-0 focus-visible:outline-brand-500 rounded"
            aria-label="Eskay Digital 360 — home"
          >
            <img
              src={logoDark}
              alt="Eskay Digital 360"
              className="h-8 lg:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {siteConfig.nav.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== '/' && location.pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-700 bg-brand-50 font-semibold'
                      : 'text-neutral-700 hover:text-brand-700 hover:bg-neutral-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-700 transition-colors"
            >
              <Phone size={15} strokeWidth={2} className="text-brand-600" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors duration-150 shadow-xs"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-brand-600 hover:bg-neutral-50 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-200"
          >
            <nav
              className="px-4 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {siteConfig.nav.map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  (item.href !== '/' && location.pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-brand-700 bg-brand-50 font-semibold'
                        : 'text-neutral-700 hover:text-brand-700 hover:bg-neutral-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="mt-3 pt-3 border-t border-neutral-200 flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-neutral-600 rounded-md hover:bg-neutral-50"
                >
                  <Phone size={16} className="text-brand-600" />
                  {siteConfig.phone}
                </a>
                <Link
                  to="/contact-us"
                  onClick={() => setMenuOpen(false)}
                  className="mx-4 text-center px-5 py-3 text-base font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
