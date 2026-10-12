import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found : Eskay Digital 360"
        description="The requested page could not be found."
      />
      <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center">
          <span className="text-6xl font-extrabold text-brand-600 block mb-4">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
            The page you are looking for might have been moved or is temporarily unavailable.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors shadow-sm"
            >
              <Home size={15} />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/service"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-neutral-700 bg-neutral-100 rounded-md hover:bg-neutral-200 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
