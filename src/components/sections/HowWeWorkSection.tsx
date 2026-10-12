import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    label: 'Consultation',
    description: 'In-depth understanding of your goals and challenges.',
  },
  {
    number: '02',
    label: 'Strategy',
    description: 'Tailored strategy aligned with your objectives.',
  },
  {
    number: '03',
    label: 'Execution',
    description: 'Implementation with expertise and technology.',
  },
  {
    number: '04',
    label: 'Monitoring',
    description: 'Continuous tracking for data-driven refinements.',
  },
  {
    number: '05',
    label: 'Delivery',
    description: 'Success measured by your success.',
  },
]

export function HowWeWorkSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-neutral-950"
      aria-labelledby="how-we-work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">
              Our Process
            </span>
            <span className="w-8 h-px bg-brand-500" aria-hidden="true" />
          </span>
          <h2
            id="how-we-work-heading"
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px bg-neutral-800 -translate-x-6 z-0"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 flex flex-col gap-3">
                <span className="text-4xl font-bold text-neutral-800 leading-none">
                  {step.number}
                </span>
                <div className="w-8 h-0.5 bg-brand-600" aria-hidden="true" />
                <h3 className="text-base font-semibold text-white">
                  {step.label}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
