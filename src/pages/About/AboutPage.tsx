import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Users, Briefcase, Smile, Award } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { StrengthsSection } from '@/components/sections/StrengthsSection'
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/data/site'

const stats = [
  { value: '10', label: 'Business Partners', icon: Users },
  { value: '100', label: 'Finished Projects', icon: Briefcase },
  { value: '10', label: 'Happy Clients', icon: Smile },
  { value: '0', label: 'Awards Winning', icon: Award },
]

export function AboutPage() {
  return (
    <>
      <SEO
        title={siteConfig.meta.about.title}
        description={siteConfig.meta.about.description}
      />

      <div className="flex flex-col">
        {/* Page Header */}
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
                  Company Overview
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                About Us
              </h1>
              <p className="text-xl text-neutral-300 font-medium">
                Empowering Your Digital Journey!
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="promise-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-5 h-px bg-brand-600" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
                    Our Commitment
                  </span>
                </div>
                <h2
                  id="promise-heading"
                  className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight leading-tight mb-6"
                >
                  What We Promise for Successfull Company
                </h2>
                <div className="p-6 bg-brand-50/70 rounded-xl border border-brand-100 mb-8">
                  <h3 className="text-sm font-semibold text-brand-900 uppercase tracking-wider mb-2">
                    Our Mission
                  </h3>
                  <p className="text-base text-brand-950 leading-relaxed font-medium">
                    To empower businesses to thrive in the dynamic world of technology.
                  </p>
                </div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors shadow-sm"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right Column - Narrative */}
              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
                <p>
                  At Eskay Digital, we are driven by a passion for innovation and a relentless pursuit of excellence. We understand that in the digital age, businesses face complex challenges and exciting opportunities. That’s why we’ve dedicated ourselves to being your trusted partners on this transformative journey.
                </p>
                <p>
                  Our mission is clear: to empower businesses to thrive in the dynamic world of technology. We achieve this by combining expertise, creativity, and cutting-edge solutions to deliver tangible results. Whether you’re a startup with a bold vision or an established enterprise seeking digital transformation, we’re here to provide the strategies and tools you need to succeed. With Eskay Digital by your side, you can navigate the digital landscape with confidence, embracing change, and emerging stronger than ever.
                </p>

                <div className="pt-6 border-t border-neutral-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0" />
                      <span>Data-driven strategies and agile execution</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0" />
                      <span>Dedicated partnership from discovery to scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-neutral-50 border-y border-neutral-200" aria-label="Company metrics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-neutral-200/80 shadow-sm"
                  >
                    <div className="p-3 rounded-lg bg-brand-50 text-brand-600 mb-4">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <span className="text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight mb-2">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-neutral-600">
                      {stat.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <StrengthsSection />

        {/* How We Work Section */}
        <HowWeWorkSection />

        {/* CTA */}
        <CTASection
          title="Transform Your Operations with Eskay Digital"
          description="Schedule a consultation with our experienced specialists to build your scalable digital roadmap."
        />
      </div>
    </>
  )
}

export default AboutPage
