import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, HelpCircle, Phone, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/data/site'
import { faqItems } from '@/data/faq'

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openIds, setOpenIds] = useState<string[]>(['faq-1'])

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <SEO
        title={siteConfig.meta.faq.title}
        description={siteConfig.meta.faq.description}
      />

      <div className="flex flex-col">
        {/* Header */}
        <section className="bg-neutral-950 text-white py-20 lg:py-24 border-b border-neutral-800 relative overflow-hidden">
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
                <span className="w-6 h-px bg-brand-500" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">
                  Help &amp; Insights
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
                Clear answers regarding our digital solutions, development workflows, timelines, security protocols, and client onboarding.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-white" aria-label="FAQ Accordion">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="mb-12">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search questions or keywords (e.g., security, Amazon, timeline)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors shadow-xs"
                  aria-label="Search frequently asked questions"
                />
              </div>
            </div>

            {/* Accordion list */}
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-200 p-8">
                <HelpCircle size={36} className="mx-auto text-neutral-400 mb-3" />
                <p className="text-base font-semibold text-neutral-900 mb-1">
                  No matching questions found
                </p>
                <p className="text-sm text-neutral-500 mb-6">
                  Have a specific question not listed here? Our team is always available to assist.
                </p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-brand-600 text-white rounded-md hover:bg-brand-700"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((item, index) => {
                  const isOpen = openIds.includes(item.id)
                  const buttonId = `faq-btn-${item.id}`
                  const panelId = `faq-panel-${item.id}`

                  return (
                    <div
                      key={item.id}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'border-brand-200 bg-brand-50/20 shadow-xs'
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <button
                        id={buttonId}
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="text-xs font-bold text-brand-600 mt-1 uppercase tracking-wider">
                            Q{index + 1}
                          </span>
                          <span className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
                            {item.question}
                          </span>
                        </div>
                        <span
                          className={`mt-1 p-1 rounded-md text-neutral-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-brand-600 bg-brand-100/50' : 'bg-neutral-100'
                          }`}
                        >
                          <ChevronDown size={18} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-brand-100/40">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Quick Contact Box */}
            <div className="mt-16 p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-lg font-bold text-neutral-900 mb-1">
                  Have more questions?
                </h2>
                <p className="text-sm text-neutral-600">
                  Our customer care and consulting teams are ready to discuss your custom project.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-100 transition-colors"
                >
                  <Phone size={15} />
                  <span>Call Us</span>
                </a>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors shadow-xs"
                >
                  <span>Send a Message</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </div>
    </>
  )
}

export default FAQPage
