import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Search,
  Check,
  Clock,
  RefreshCw,
  LifeBuoy,
  ShieldAlert,
  ArrowRight,
  Filter,
} from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/data/site'
import { serviceCatalog, ServiceCatalogItem } from '@/data/pricing'

export function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredServices = useMemo(() => {
    return serviceCatalog.filter((item: ServiceCatalogItem) => {
      const matchesCategory =
        selectedCategory === 'all' || item.id === selectedCategory

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.packages.some(
          (pkg) =>
            pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pkg.deliverables.some((d) =>
              d.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <SEO
        title={siteConfig.meta.services.title}
        description={siteConfig.meta.services.description}
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
                  Capabilities &amp; Catalog
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
                Comprehensive digital solutions engineered for growth, efficiency, and long-term enterprise value. All packages include transparent deliverables and clear milestones.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-4 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search services or deliverables..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
                  aria-label="Search services"
                />
              </div>

              {/* Quick Category Selector */}
              <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium whitespace-nowrap pl-1">
                  <Filter size={14} />
                  <span>Category:</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  All ({serviceCatalog.length})
                </button>
                {serviceCatalog.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedCategory(item.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === item.id
                        ? 'bg-brand-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-neutral-50/60" aria-label="Services list">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-neutral-200 p-8">
                <p className="text-lg font-medium text-neutral-900 mb-2">
                  No matching services found
                </p>
                <p className="text-sm text-neutral-500 mb-6">
                  Try adjusting your search query or reset the category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="px-5 py-2.5 text-sm font-semibold bg-brand-600 text-white rounded-md hover:bg-brand-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-16 lg:space-y-20">
                {filteredServices.map((service, sIndex) => (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: sIndex * 0.05 }}
                    className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs overflow-hidden scroll-mt-36"
                  >
                    {/* Service Header */}
                    <div className="p-6 sm:p-8 lg:p-10 border-b border-neutral-100 bg-linear-to-r from-neutral-50/50 to-white">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="max-w-3xl">
                          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 block mb-2">
                            Service Area {sIndex + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-3">
                            {service.title}
                          </h2>
                          <p className="text-base text-neutral-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Link
                            to={`/contact-us?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors border border-brand-200"
                          >
                            <span>Inquire for {service.title}</span>
                            <ArrowRight size={15} />
                          </Link>
                        </div>
                      </div>

                      {/* Disclaimer banner if present */}
                      {service.disclaimer && (
                        <div className="mt-6 p-4 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3">
                          <ShieldAlert
                            size={18}
                            className="text-amber-600 flex-shrink-0 mt-0.5"
                          />
                          <p className="text-xs text-amber-900 leading-relaxed">
                            {service.disclaimer}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Packages Grid */}
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.packages.map((pkg, pIndex) => (
                          <div
                            key={pIndex}
                            className="flex flex-col bg-neutral-50/60 rounded-xl border border-neutral-200/70 p-6 hover:border-brand-300 hover:bg-white transition-all duration-200"
                          >
                            {/* Package Header */}
                            <div className="mb-4">
                              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                {pkg.name}
                              </h3>
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                                  {pkg.price}
                                </span>
                              </div>
                              {pkg.billingType && (
                                <span className="inline-block mt-2 text-xs font-medium text-neutral-500 bg-neutral-200/60 px-2.5 py-0.5 rounded-full">
                                  {pkg.billingType}
                                </span>
                              )}
                            </div>

                            <div className="w-full h-px bg-neutral-200/80 my-4" />

                            {/* Deliverables */}
                            <div className="flex-1 mb-6">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                                Included Deliverables
                              </h4>
                              <ul className="space-y-2.5" role="list">
                                {pkg.deliverables.map((deliv, dIdx) => (
                                  <li
                                    key={dIdx}
                                    className="flex items-start gap-2.5 text-sm text-neutral-700"
                                  >
                                    <div className="mt-0.5 p-0.5 rounded-full bg-brand-100 text-brand-700 flex-shrink-0">
                                      <Check size={12} strokeWidth={2.5} />
                                    </div>
                                    <span className="leading-snug">{deliv}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Metadata / Details */}
                            <div className="space-y-2 pt-4 border-t border-neutral-200/60 text-xs text-neutral-500 mb-6">
                              {pkg.deliveryTimeframe && (
                                <div className="flex items-start gap-2">
                                  <Clock size={14} className="mt-0.5 text-neutral-400 flex-shrink-0" />
                                  <span><strong>Timeframe:</strong> {pkg.deliveryTimeframe}</span>
                                </div>
                              )}
                              {pkg.revisionLimit && (
                                <div className="flex items-start gap-2">
                                  <RefreshCw size={14} className="mt-0.5 text-neutral-400 flex-shrink-0" />
                                  <span><strong>Revisions:</strong> {pkg.revisionLimit}</span>
                                </div>
                              )}
                              {pkg.supportDuration && (
                                <div className="flex items-start gap-2">
                                  <LifeBuoy size={14} className="mt-0.5 text-neutral-400 flex-shrink-0" />
                                  <span><strong>Support:</strong> {pkg.supportDuration}</span>
                                </div>
                              )}
                              {pkg.milestones && (
                                <div className="pt-1 text-[11px] text-neutral-500">
                                  <strong>Milestones:</strong> {pkg.milestones}
                                </div>
                              )}
                              {pkg.adSpend && (
                                <div className="pt-1 text-[11px] text-amber-700">
                                  <strong>Ad Spend:</strong> {pkg.adSpend}
                                </div>
                              )}
                              {pkg.hosting && (
                                <div className="pt-1 text-[11px] text-neutral-500">
                                  <strong>Hosting:</strong> {pkg.hosting}
                                </div>
                              )}
                              {pkg.note && (
                                <div className="pt-1 text-[11px] text-neutral-500 italic">
                                  {pkg.note}
                                </div>
                              )}
                            </div>

                            {/* Card CTA */}
                            <Link
                              to={`/contact-us?package=${encodeURIComponent(
                                `${service.title} - ${pkg.name}`
                              )}`}
                              className="w-full py-2.5 px-4 text-center rounded-lg text-sm font-semibold bg-neutral-900 text-white hover:bg-brand-600 transition-colors shadow-xs"
                            >
                              Choose Package
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Need a Custom Digital Solution?"
          description="We tailor scope, deliverables, and architecture to align with your organization’s specific requirements."
        />
      </div>
    </>
  )
}

export default ServicesPage
