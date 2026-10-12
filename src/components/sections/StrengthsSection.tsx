import { motion } from 'framer-motion'

const strengths = [
  {
    id: 1,
    label: 'Expertise',
    description:
      'Our team of industry experts excels in their respective domains.',
  },
  {
    id: 2,
    label: 'Innovation',
    description:
      'We stay at the forefront of technology to deliver cutting-edge solutions.',
  },
  {
    id: 3,
    label: 'Customization',
    description:
      'Tailored solutions to meet your unique business needs.',
  },
  {
    id: 4,
    label: 'Client-Centric',
    description:
      'Your success is our priority; we work closely with you.',
  },
  {
    id: 5,
    label: 'Proven Track Record',
    description: 'Earned trust through successful projects.',
  },
]

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function StrengthsSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="strengths-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand-500" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600">
                Why Choose Us
              </span>
            </span>
            <h2
              id="strengths-heading"
              className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight"
            >
              Strengths
            </h2>
            <p className="mt-5 text-neutral-500 text-base leading-relaxed max-w-sm">
              We combine deep expertise with a client-first philosophy to deliver
              results that matter.
            </p>
          </div>

          {/* Right: strengths list */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-0 divide-y divide-neutral-100"
          >
            {strengths.map((s) => (
              <motion.li
                key={s.id}
                variants={item}
                className="py-5 flex items-start gap-4"
              >
                <div
                  className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-white text-xs font-bold">
                    {s.id}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {s.label}:
                  </h3>
                  <p className="text-sm text-neutral-600">{s.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
