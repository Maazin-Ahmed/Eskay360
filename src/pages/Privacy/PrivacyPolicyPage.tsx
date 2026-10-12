import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, FileText, ChevronRight } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { siteConfig } from '@/data/site'
import { privacyPolicySections } from '@/data/legal'

export function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const section of privacyPolicySections) {
        const id = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <SEO
        title={siteConfig.meta.privacy.title}
        description={siteConfig.meta.privacy.description}
      />

      <div className="flex flex-col">
        {/* Header */}
        <section className="bg-neutral-950 text-white py-16 lg:py-20 border-b border-neutral-800 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield size={16} className="text-brand-400" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">
                  Legal &amp; Compliance
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-base sm:text-lg text-neutral-300">
                {siteConfig.legalName} ({siteConfig.dba})
              </p>
            </div>
          </div>
        </section>

        {/* Content with Sidebar Table of Contents */}
        <section className="py-16 lg:py-24 bg-white" aria-label="Privacy Policy document">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Sticky TOC Sidebar */}
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-28 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 pb-3 border-b border-neutral-200">
                    <FileText size={14} />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-1 max-h-[calc(100vh-14rem)] overflow-y-auto pr-2" aria-label="Table of contents">
                    {privacyPolicySections.map((sec) => {
                      const id = sec.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      const isActive = activeSection === id
                      return (
                        <a
                          key={id}
                          href={`#${id}`}
                          className={`block text-xs py-1.5 px-2.5 rounded-md transition-colors ${
                            isActive
                              ? 'bg-brand-50 text-brand-700 font-semibold'
                              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                          }`}
                        >
                          {sec.title}
                        </a>
                      )
                    })}
                  </nav>

                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <Link
                      to="/terms-and-conditions"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700"
                    >
                      <span>View Terms &amp; Conditions</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Document Text */}
              <main className="lg:col-span-8 space-y-12 max-w-prose">
                {privacyPolicySections.map((sec) => {
                  const id = sec.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  return (
                    <article key={id} id={id} className="scroll-mt-28">
                      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-4 pb-2 border-b border-neutral-100">
                        {sec.title}
                      </h2>
                      <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                        {sec.content.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </article>
                  )
                })}

                <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-500">
                    Last updated: {siteConfig.legalName}
                  </p>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <span>Have questions about your data? Contact our team</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
