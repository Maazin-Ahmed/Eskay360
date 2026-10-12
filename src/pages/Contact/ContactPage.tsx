import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { siteConfig } from '@/data/site'

interface FormState {
  name: string
  email: string
  message: string
  smsConsent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const initialPackage = searchParams.get('package') || searchParams.get('service')

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: initialPackage ? `Inquiring about: ${initialPackage}\n\n` : '',
    smsConsent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmissionStatus('idle')

    // Simulate front-end validation & submission response
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionStatus('success')
    }, 800)
  }

  return (
    <>
      <SEO
        title={siteConfig.meta.contact.title}
        description={siteConfig.meta.contact.description}
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
                  Direct Inquiries
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Contacts
              </h1>
              <p className="text-xl text-neutral-300 font-medium">
                Get in Touch
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28 bg-white" aria-label="Contact information and form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Contact Information Cards */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-5 h-px bg-brand-600" aria-hidden="true" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
                      Reach Out
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-950 tracking-tight mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-base text-neutral-600 leading-relaxed mb-8">
                    At Eskay Digital, we welcome your inquiries, feedback, and the opportunity to connect. Please don’t hesitate to reach out to us using the contact information provided above. Whether you have questions about our services, require more information on our solutions, or simply want to get in touch, our team is here to assist you. Your communication is important to us, and we’ll make it a priority to respond promptly. Thank you for considering Eskay Digital as your trusted partner in your digital journey.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      siteConfig.address.full
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 hover:border-brand-300 hover:bg-white transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
                        Our Office
                      </span>
                      <p className="text-sm font-semibold text-neutral-900 leading-snug">
                        {siteConfig.address.display}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 hover:border-brand-300 hover:bg-white transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
                        Telephone
                      </span>
                      <p className="text-sm font-semibold text-neutral-900 leading-snug">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 hover:border-brand-300 hover:bg-white transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
                        Email Inquiries
                      </span>
                      <p className="text-sm font-semibold text-neutral-900 leading-snug">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>

                  {/* Support */}
                  <div className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 bg-neutral-50/60">
                    <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
                        Client Assistance
                      </span>
                      <p className="text-sm font-semibold text-neutral-900 leading-snug">
                        For support Call us 24/7: {siteConfig.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-8 sm:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-neutral-950 tracking-tight mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-neutral-500">
                      Fill out the form below and an Eskay Digital representative will respond promptly.
                    </p>
                  </div>

                  {submissionStatus === 'success' ? (
                    <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0" />
                        <h4 className="text-base font-bold text-emerald-950">
                          Form Information Validated!
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-emerald-800">
                        Thank you, <strong>{formData.name}</strong>. Your message details have been validated successfully on the client side.
                      </p>
                      <div className="p-4 bg-white/80 rounded-lg text-xs text-neutral-600 border border-emerald-100">
                        <strong>Preview Mode Note:</strong> In this frontend rebuild demo, direct mail delivery is not wired to a live backend API. To reach our operations team immediately, please reach us directly at{' '}
                        <a
                          href={`tel:${siteConfig.phoneRaw}`}
                          className="text-brand-600 font-semibold underline"
                        >
                          {siteConfig.phone}
                        </a>{' '}
                        or{' '}
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-brand-600 font-semibold underline"
                        >
                          {siteConfig.email}
                        </a>.
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmissionStatus('idle')
                          setFormData({ name: '', email: '', message: '', smsConsent: false })
                        }}
                        className="mt-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-semibold text-neutral-900 mb-2"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value })
                            if (errors.name) setErrors({ ...errors, name: undefined })
                          }}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 text-sm bg-neutral-50/50 border rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-colors ${
                            errors.name
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-neutral-200 focus:ring-brand-500/20 focus:border-brand-500'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle size={13} />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-neutral-900 mb-2"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value })
                            if (errors.email) setErrors({ ...errors, email: undefined })
                          }}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 text-sm bg-neutral-50/50 border rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-colors ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-neutral-200 focus:ring-brand-500/20 focus:border-brand-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle size={13} />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-semibold text-neutral-900 mb-2"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value })
                            if (errors.message) setErrors({ ...errors, message: undefined })
                          }}
                          placeholder="Tell us about your requirements, project scope, or questions..."
                          className={`w-full px-4 py-3 text-sm bg-neutral-50/50 border rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-colors ${
                            errors.message
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-neutral-200 focus:ring-brand-500/20 focus:border-brand-500'
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle size={13} />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* SMS Opt-in Checkbox (Mandatory exact wording) */}
                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={formData.smsConsent}
                            onChange={(e) =>
                              setFormData({ ...formData, smsConsent: e.target.checked })
                            }
                            className="mt-1 h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
                          />
                          <span className="text-xs text-neutral-500 leading-relaxed">
                            By submitting this form and signing up for texts, you consent to receive customer care messages at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Message &amp; data rates may apply. Message frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). Reply HELP for help. For more details, please review our{' '}
                            <Link
                              to="/privacy-policy"
                              className="text-brand-600 underline hover:text-brand-700"
                            >
                              Privacy Policy
                            </Link>{' '}
                            and{' '}
                            <Link
                              to="/terms-and-conditions"
                              className="text-brand-600 underline hover:text-brand-700"
                            >
                              Terms
                            </Link>.
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Validating Information...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage
