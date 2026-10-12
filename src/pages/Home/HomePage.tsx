import { SEO } from '@/components/ui/SEO'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutIntroSection } from '@/components/sections/AboutIntroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { StrengthsSection } from '@/components/sections/StrengthsSection'
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/data/site'

export function HomePage() {
  return (
    <>
      <SEO
        title={siteConfig.meta.home.title}
        description={siteConfig.meta.home.description}
      />
      <div className="flex flex-col">
        <HeroSection />
        <AboutIntroSection />
        <ServicesSection />
        <StrengthsSection />
        <HowWeWorkSection />
        <PricingSection />
        <CTASection />
      </div>
    </>
  )
}

export default HomePage
