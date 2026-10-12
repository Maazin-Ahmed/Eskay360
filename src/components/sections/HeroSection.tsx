import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex items-center bg-neutral-950 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle geometric background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,88,200,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,88,200,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Brand accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-brand-600"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-8 h-px bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">
              Welcome
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Eskay
            <br />
            <span className="text-brand-400">Digital</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-neutral-300 mb-4"
          >
            Your Digital Transformation Partner!
          </motion.p>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-neutral-400 leading-relaxed max-w-xl mb-10"
          >
            At Eskay Digital, we are your dedicated partners in navigating the
            ever-evolving digital landscape. With a commitment to innovation and
            excellence, we empower businesses to thrive in the digital age.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/about-us"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-500 transition-colors shadow-sm"
            >
              About the Company
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/service"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-neutral-300 border border-neutral-700 rounded-md hover:border-neutral-500 hover:text-white transition-colors"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-600"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
