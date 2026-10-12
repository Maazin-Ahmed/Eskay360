import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/Home/HomePage'
import { AboutPage } from '@/pages/About/AboutPage'
import { ServicesPage } from '@/pages/Services/ServicesPage'
import { FAQPage } from '@/pages/FAQ/FAQPage'
import { ContactPage } from '@/pages/Contact/ContactPage'
import { PrivacyPolicyPage } from '@/pages/Privacy/PrivacyPolicyPage'
import { TermsPage } from '@/pages/Terms/TermsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
