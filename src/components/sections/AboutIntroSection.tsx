import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AboutIntroSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="about-intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand-500" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600">
                About the Company
              </span>
            </span>
            <h2
              id="about-intro-heading"
              className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight"
            >
              At Eskay Digital,<br />
              <span className="text-brand-600">we are more than</span><br />
              a solutions provider.
            </h2>
          </motion.div>

          {/* Right: body copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-5"
          >
            <p className="text-neutral-600 leading-relaxed">
              At Eskay Digital, we are your dedicated partners in navigating the
              ever-evolving digital landscape. With a commitment to innovation
              and excellence, we empower businesses to thrive in the digital age.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              At Eskay Digital, we are more than just a digital solutions
              provider; we are your strategic partner in navigating the
              ever-evolving digital landscape. With a passion for innovation and
              a commitment to excellence, we empower businesses to thrive in the
              digital age.
            </p>
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group mt-2 self-start"
            >
              Read More
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
