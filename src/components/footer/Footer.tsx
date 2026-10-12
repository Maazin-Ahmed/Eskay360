import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/site'
import logoWhite from '@/assets/logo-white.png'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" aria-label="Eskay Digital 360 — home">
              <img
                src={logoWhite}
                alt="Eskay Digital 360"
                className="h-8 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {siteConfig.legalName} ({siteConfig.dba})
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors group"
              >
                <MapPin size={15} className="mt-0.5 text-neutral-500 group-hover:text-brand-400 flex-shrink-0" />
                <span>{siteConfig.address.full}</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors group"
              >
                <Phone size={15} className="text-neutral-500 group-hover:text-brand-400 flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors group"
              >
                <Mail size={15} className="text-neutral-500 group-hover:text-brand-400 flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">
            {siteConfig.copyright}
          </p>
          <p className="text-xs text-neutral-600">
            for support Call us 24/7&nbsp;
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
