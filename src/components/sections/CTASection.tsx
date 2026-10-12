import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/data/site'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
}

export function CTASection({
  title = 'Ready to Empower Your Digital Journey?',
  description = 'Connect with our team of specialists to discuss your goals, explore custom strategies, and experience the Eskay Digital difference.',
  primaryCtaText = 'Get in Touch',
  primaryCtaHref = '/contact-us',
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-brand-900 text-white relative overflow-hidden" aria-label="Call to action">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-300 mb-4">
            Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-brand-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryCtaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-brand-900 bg-white rounded-md hover:bg-neutral-100 transition-colors shadow-lg"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border border-brand-500/50 rounded-md hover:bg-brand-800 transition-colors"
            >
              <Phone size={15} />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
