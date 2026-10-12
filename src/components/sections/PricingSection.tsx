import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { homePricingPlans } from '@/data/pricing'

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-neutral-900 text-white relative overflow-hidden"
      aria-label="Pricing section"
    >
      {/* Background grid accent */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-px bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">
              Pricing Plans
            </span>
            <span className="w-6 h-px bg-brand-500" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Transparent, Predictable Investments
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Choose the package that aligns with your digital growth stage, or contact our team for a tailored enterprise engagement.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {homePricingPlans.map((plan, index) => {
            const isGrowth = plan.highlighted

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 ${
                  isGrowth
                    ? 'bg-neutral-800/90 border-2 border-brand-500 shadow-2xl shadow-brand-900/30'
                    : 'bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400 block mb-2">
                    {plan.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.price.startsWith('$') && (
                      <span className="text-sm font-medium text-neutral-400">
                        / package
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full h-px bg-neutral-800 my-6" />

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full p-0.5 bg-brand-500/20 text-brand-400 flex-shrink-0">
                        <Check size={14} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-neutral-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact-us"
                  className={`w-full py-3.5 px-6 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isGrowth
                      ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-sm'
                      : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 hover:text-white border border-neutral-700'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Note below cards */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-400">
            Looking for comprehensive specialized development, Amazon management, or custom enterprise solutions?{' '}
            <Link
              to="/service"
              className="text-brand-400 hover:text-brand-300 underline font-medium"
            >
              Explore all 15 service offerings &amp; detailed scopes
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
