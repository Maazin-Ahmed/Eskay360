import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Code2,
  Zap,
  Globe,
  Target,
  Briefcase,
} from 'lucide-react'
import { homeServices } from '@/data/services'

const serviceIcons: Record<string, React.ElementType> = {
  'digital-marketing': TrendingUp,
  'software-development': Code2,
  'digital-transformation': Zap,
  'web-development': Globe,
  'google-advertising': Target,
  'business-consulting': Briefcase,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function ServicesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-neutral-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600">
              What We Do
            </span>
          </span>
          <h2
            id="services-heading"
            className="text-4xl lg:text-5xl font-bold text-neutral-900"
          >
            Services
          </h2>
        </div>

        {/* Service grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {homeServices.map((service) => {
            const Icon = serviceIcons[service.id] || Globe
            return (
              <motion.article
                key={service.id}
                variants={item}
                className="group bg-white border border-neutral-200 rounded-xl p-7 hover:border-brand-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                  <Icon
                    size={20}
                    className="text-brand-600"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/service"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
