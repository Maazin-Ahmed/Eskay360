export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  category: string
  name: string
  price: string
  priceNote?: string
  features: string[]
  cta: string
  highlighted?: boolean
}

// Homepage pricing plans (from the main page)
export const homePricingPlans: PricingPlan[] = [
  {
    id: 'starter-digital-marketing',
    category: 'STARTER DIGITAL MARKETING',
    name: 'Starter',
    price: '$500',
    features: [
      'Social Media Management',
      'Basic SEO',
      'Monthly Analytics',
    ],
    cta: 'Choose Plan',
  },
  {
    id: 'growth-digital-marketing',
    category: 'GROWTH DIGITAL MARKETING',
    name: 'Growth',
    price: '$1000',
    features: [
      'Social Media Management',
      'Advanced SEO',
      'Advertising (Ad Spend Extra)',
      'Monthly Analytics and Reporting',
    ],
    cta: 'Choose Plan',
    highlighted: true,
  },
  {
    id: 'enterprise-digital-marketing',
    category: 'ENTERPRISE DIGITAL MARKETING',
    name: 'Enterprise',
    price: 'Custom Package',
    features: [
      'Comprehensive Social Media Management',
      'Advanced SEO and Content Marketing',
      'Advertising (Ad Spend Included)',
      'Conversion Rate Optimization',
      'Monthly Analytics, Reporting, and Strategy Sessions',
    ],
    cta: 'Custom Quote',
  },
]

export interface ServicePackage {
  name: string
  price: string
  billingType?: string
  deliverables: string[]
  milestones?: string
  deliveryTimeframe?: string
  revisionLimit?: string
  supportDuration?: string
  adSpend?: string
  hosting?: string
  note?: string
}

export interface ServiceCatalogItem {
  id: string
  title: string
  description: string
  packages: ServicePackage[]
  disclaimer?: string
}

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    id: 'financial-services',
    title: 'Financial Services',
    description:
      'Financial-related consulting and support for individuals and businesses. Pricing depends on the scope, jurisdiction, and complexity of each engagement, so we quote after a short discovery call.',
    packages: [
      {
        name: 'Custom engagement',
        price: 'Custom quote — contact us',
        billingType: 'One-time per engagement',
        deliverables: ['Defined in a written scope/statement of work agreed before the engagement begins'],
        milestones: 'Discovery → written proposal/scope → delivery of agreed work',
        revisionLimit: 'Set out in the statement of work',
        supportDuration: 'Set out in the statement of work',
      },
    ],
    disclaimer:
      'Role & licenses: Eskay Digital is a digital services company. We are not a financial adviser, lender, broker, accountant, attorney, tax professional, or fiduciary, and we do not provide licensed financial, investment, legal, or tax advice. Where an engagement requires a licensed professional, the work is performed by or referred to an appropriately licensed partner under that partner\'s own license and agreement. Financial results are not guaranteed: any figures, projections, or outcomes discussed are illustrative only, are not a promise of future performance, and no specific financial result is guaranteed. Please obtain independent licensed advice before making financial decisions.',
  },
  {
    id: 'cloud-based-services',
    title: 'Cloud-Based Services',
    description:
      'Cloud strategy, migration, and management services. Because the effort depends on your existing systems, data volumes, and provider choice, pricing is quoted per engagement.',
    packages: [
      {
        name: 'Custom engagement',
        price: 'Custom quote — contact us',
        billingType: 'One-time per engagement (cloud provider subscription/hosting billed separately by the provider)',
        deliverables: ['Defined in a written scope/statement of work (e.g. assessment, migration plan, configuration, handover)'],
        milestones: 'Assessment → migration plan → implementation → testing → handover',
        revisionLimit: 'Set out in the statement of work',
        supportDuration: 'Set out in the statement of work',
      },
    ],
  },
  {
    id: 'lms-cms-development',
    title: 'LMS/CMS Development Services',
    description:
      'Custom learning-management and content-management platform development for training, education, and content-driven businesses.',
    packages: [
      {
        name: 'Learning Management System',
        price: '$10,000 — one-time',
        deliverables: ['Custom LMS development', 'User training and support'],
        milestones: 'Discovery & scope → UX/design → development → testing/QA → launch & handover',
        deliveryTimeframe: 'Approx. 6–10 weeks from receipt of requirements and content',
        revisionLimit: '3 rounds of revisions within the agreed scope',
        supportDuration: '90 days after launch',
      },
    ],
  },
  {
    id: 'content-development',
    title: 'Content Development Services',
    description:
      'Research-driven content creation for websites, blogs, and marketing campaigns.',
    packages: [
      {
        name: 'Content Creation',
        price: '$800 — one-time',
        deliverables: ['Blog post writing', 'SEO-optimized website content', 'Monthly content calendar'],
        milestones: 'Content brief → drafting → review → final delivery',
        deliveryTimeframe: 'Approx. 7–14 business days from receipt of the content brief',
        revisionLimit: '2 rounds of revisions',
        supportDuration: '30 days after final delivery',
      },
    ],
  },
  {
    id: 'amazon-store-management',
    title: 'Amazon Store Management Services',
    description:
      'End-to-end setup and ongoing management of your Amazon seller presence.',
    packages: [
      {
        name: 'Amazon Store Management',
        price: '$2,500 — one-time',
        deliverables: ['Brand Registry setup and support', 'Amazon store management', 'Product listings optimization'],
        milestones: 'Account assessment → setup/optimization → review & handover',
        deliveryTimeframe: 'Approx. 2–4 weeks from receipt of account access and assets',
        revisionLimit: '2 rounds of revisions on listings/creatives',
        supportDuration: '60 days after handover',
      },
    ],
  },
  {
    id: 'amazon-brand-registry',
    title: 'Amazon Brand Registry Services',
    description:
      'Support with Amazon Brand Registry application, setup, and brand protection.',
    packages: [
      {
        name: 'Amazon Brand Registry',
        price: '$2,500 — one-time',
        deliverables: ['Brand Registry setup and support', 'Amazon store management', 'Product listings optimization'],
        milestones: 'Eligibility review → application setup → review & handover',
        deliveryTimeframe: 'Approx. 1–3 weeks from receipt of required brand/trademark details (Amazon\'s own review times are outside our control)',
        revisionLimit: '2 rounds of revisions on submitted materials',
        supportDuration: '30 days after handover',
      },
    ],
  },
  {
    id: 'amazon-publishing',
    title: 'Amazon Publishing Services',
    description:
      'Publishing setup and launch support for authors and publishers on Amazon Kindle Direct Publishing.',
    packages: [
      {
        name: 'Amazon Publishing',
        price: '$1,500 — one-time',
        deliverables: ['Kindle Direct Publishing (KDP) setup', 'Book formatting and cover design', 'Initial marketing strategy'],
        milestones: 'Manuscript/asset intake → formatting & cover → KDP setup → launch',
        deliveryTimeframe: 'Approx. 2–3 weeks from receipt of the final manuscript',
        revisionLimit: '2 rounds of revisions on formatting and cover',
        supportDuration: '30 days after launch',
      },
    ],
  },
  {
    id: 'ecommerce-solutions',
    title: 'Ecommerce Solutions',
    description:
      'Store setup and conversion optimization for online retail businesses.',
    packages: [
      {
        name: 'Ecommerce Store Setup',
        price: '$2,000 — one-time',
        deliverables: ['Ecommerce store creation and setup', 'Product listings and management', 'Payment integration'],
        milestones: 'Scope & platform → store build → product/payment setup → QA & launch',
        deliveryTimeframe: 'Approx. 2–4 weeks from receipt of product data and assets',
        revisionLimit: '2 rounds of revisions',
        supportDuration: '60 days after launch',
      },
      {
        name: 'Ecommerce Optimization',
        price: '$1,500 — one-time',
        deliverables: ['Ecommerce store audit', 'Conversion rate optimization', 'Product page enhancement'],
        milestones: 'Audit → recommendations → implementation → review',
        deliveryTimeframe: 'Approx. 2–3 weeks from receipt of analytics/store access',
        revisionLimit: '2 rounds of revisions',
        supportDuration: '30 days after completion',
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    description:
      'Social media, SEO, and paid advertising services. The Growth package is a 12-month term paid once; renewal after 12 months is optional and is never charged automatically.',
    packages: [
      {
        name: 'Starter Digital Marketing',
        price: '$500 — one-time',
        billingType: 'One-time',
        deliverables: ['Social media management', 'Basic SEO', 'Monthly analytics'],
        deliveryTimeframe: 'Onboarding/implementation approx. 5–10 business days',
        revisionLimit: '1 round of revisions per deliverable',
        supportDuration: '30 days',
        adSpend: 'Paid advertising spend is extra and is paid by you directly to the ad platform',
      },
      {
        name: 'Growth Digital Marketing',
        price: '$1,000 — one-time payment for a 12-month term',
        billingType: 'One-time (12-month term). Renewal is optional, requires your express consent, and is never automatic.',
        deliverables: ['Social media management', 'Advanced SEO', 'PPC advertising setup and management (ad spend extra)', 'Monthly analytics and reporting'],
        deliveryTimeframe: 'Onboarding approx. 5–10 business days, then ongoing for the term',
        revisionLimit: '2 rounds of revisions per deliverable',
        supportDuration: 'For the duration of the 12-month term',
        adSpend: 'Advertising spend is extra and is paid by you directly to the ad platform',
      },
      {
        name: 'Enterprise Digital Marketing',
        price: 'Custom quote — contact us',
        billingType: 'One-time / term as agreed in the written scope',
        deliverables: ['Comprehensive social media management', 'Advanced SEO and content marketing', 'PPC advertising (ad spend included per package)', 'Conversion rate optimization', 'Monthly analytics, reporting, and strategy sessions'],
      },
    ],
  },
  {
    id: 'software-development',
    title: 'Software Development Solutions',
    description:
      'Custom software built to your specification, from basic builds to advanced enterprise systems.',
    packages: [
      {
        name: 'Basic Software Development',
        price: '$5,000 — one-time',
        deliverables: ['Custom software development', 'Testing and quality assurance', 'Basic support'],
        milestones: 'Discovery → design → development → testing/QA → delivery & handover',
        deliveryTimeframe: 'Approx. 4–8 weeks from receipt of the agreed specification',
        revisionLimit: '3 rounds of revisions within scope',
        supportDuration: '30 days after delivery',
      },
      {
        name: 'Intermediate Software Development',
        price: '$10,000 — one-time',
        deliverables: ['Custom software development', 'Enhanced testing and QA', '24/7 support'],
        milestones: 'Discovery → design → development → testing/QA → delivery & handover',
        deliveryTimeframe: 'Approx. 6–10 weeks from receipt of the agreed specification',
        revisionLimit: '3 rounds of revisions within scope',
        supportDuration: '90 days after delivery',
      },
      {
        name: 'Advanced Software Development',
        price: 'Custom quote — contact us',
        billingType: 'One-time, quoted per project',
        deliverables: ['Advanced custom software development', 'Robust testing and QA', 'Priority support and maintenance'],
      },
    ],
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Services',
    description:
      'Modernizing processes, systems, and tools for digital-first operations. Scope varies widely by business, so pricing is quoted after a discovery assessment.',
    packages: [
      {
        name: 'Custom engagement',
        price: 'Custom quote — contact us',
        billingType: 'One-time per engagement',
        deliverables: ['Defined in a written scope/statement of work (e.g. assessment, roadmap, implementation, training)'],
        milestones: 'Assessment → roadmap → implementation → training → handover',
        revisionLimit: 'Set out in the statement of work',
        supportDuration: 'Set out in the statement of work',
      },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development Solutions',
    description:
      'Custom website design and development, from brochure sites to full e-commerce and enterprise builds.',
    packages: [
      {
        name: 'Basic Web Development',
        price: '$2,500 — one-time',
        deliverables: ['Custom website design', 'Up to 10 pages', 'Basic SEO optimization'],
        milestones: 'Discovery → design → build → QA → launch',
        deliveryTimeframe: 'Approx. 2–4 weeks from receipt of content and assets',
        revisionLimit: '2 rounds of revisions',
        supportDuration: '30 days after launch',
        hosting: 'Web hosting and domain are not included and are billed by your chosen provider',
      },
      {
        name: 'E-commerce Web Development',
        price: '$5,000 — one-time',
        deliverables: ['Custom e-commerce website design', 'Product listings and shopping cart', 'Payment integration'],
        milestones: 'Discovery → design → build → product/payment setup → QA → launch',
        deliveryTimeframe: 'Approx. 3–6 weeks from receipt of content and assets',
        revisionLimit: '2 rounds of revisions',
        supportDuration: '60 days after launch',
        hosting: 'Web hosting, domain, and payment-gateway fees are not included and are billed by the respective providers',
      },
      {
        name: 'Enterprise Web Development',
        price: 'Custom quote — contact us',
        billingType: 'One-time, quoted per project',
        deliverables: ['Custom enterprise website design', 'Scalable and interactive features', 'Advanced SEO and performance optimization'],
      },
    ],
  },
  {
    id: 'google-advertising',
    title: 'Google Advertising Services',
    description:
      'Google Ads campaign setup and management. The fee covers our management service only; advertising spend is paid by you directly to Google.',
    packages: [
      {
        name: 'Google Ads Management',
        price: '$750 — one-time',
        deliverables: ['PPC campaign setup and management', 'Keyword research and optimization', 'Performance tracking'],
        milestones: 'Account/audience review → campaign build → launch → optimization & reporting',
        deliveryTimeframe: 'Setup approx. 5–10 business days; optimization is ongoing',
        revisionLimit: '1 round of revisions on campaign structure/creatives',
        supportDuration: '30 days after launch',
        adSpend: 'Not included. Ad spend is paid by you directly to Google and is non-refundable once spent.',
      },
    ],
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting Services',
    description:
      'Strategic and operational consulting for growth, process improvement, and planning. Pricing depends on the engagement, so we quote after a discovery call.',
    packages: [
      {
        name: 'Custom engagement',
        price: 'Custom quote — contact us',
        billingType: 'One-time per engagement',
        deliverables: ['Defined in a written scope/statement of work (e.g. assessment, recommendations, roadmap)'],
        milestones: 'Discovery → recommendations → roadmap → review',
        revisionLimit: 'Set out in the statement of work',
        supportDuration: 'Set out in the statement of work',
      },
    ],
  },
  {
    id: 'animation-trademark',
    title: 'Animation and Trademark Services',
    description:
      'Custom animation production and trademark filing support.',
    packages: [
      {
        name: 'Animation',
        price: '$2,500 — one-time',
        deliverables: ['Custom animation creation', 'Scriptwriting and storyboarding', 'Voiceover (if needed)'],
        milestones: 'Script & storyboard → design/animatic → animation → voiceover/audio → final delivery',
        deliveryTimeframe: 'Approx. 3–5 weeks from approval of the script/storyboard',
        revisionLimit: '2 rounds of revisions',
        supportDuration: '30 days after final delivery',
      },
      {
        name: 'Trademark Registration (filing support)',
        price: '$1,000 — one-time',
        deliverables: ['Trademark search and analysis (informational)', 'Filing and registration support', 'Trademark protection guidance'],
        milestones: 'Search → application preparation → filing → status follow-up → handover',
        deliveryTimeframe: 'Filing typically prepared within 5–10 business days; registration timelines are set by the trademark office (e.g. USPTO, often several months) and are outside our control',
        revisionLimit: '2 rounds of revisions on application materials; refiling is subject to additional government fees',
        supportDuration: '30 days after filing/handover',
        note: 'Government filing fees not included. Trademark/registry filing fees are paid by you directly to the relevant authority.',
      },
    ],
    disclaimer:
      'Role, licenses & guarantees: Our trademark service is a document preparation and filing-support service only. Eskay Digital is not a law firm, is not your attorney, and does not provide legal advice or opinions on registrability; using this service does not create an attorney-client relationship. Where legal advice is required, we may refer you to an appropriately licensed attorney/partner under their own license and agreement. Trademark registration is decided solely by the relevant trademark office and other authorities; we do not control and cannot guarantee that a trademark will be approved, registered, or protected in any jurisdiction. No approval, timing, or outcome is guaranteed.',
  },
]

// Summary price list table data
export const priceSummary = [
  { service: 'Financial Services', package: 'Custom engagement', price: 'Quote on request', billing: 'One-time' },
  { service: 'Cloud-Based Services', package: 'Custom engagement', price: 'Quote on request', billing: 'One-time' },
  { service: 'LMS/CMS Development Services', package: 'Learning Management System', price: '$10,000', billing: 'One-time' },
  { service: 'Content Development Services', package: 'Content Creation', price: '$800', billing: 'One-time' },
  { service: 'Amazon Store Management Services', package: 'Amazon Store Management', price: '$2,500', billing: 'One-time' },
  { service: 'Amazon Brand Registry Services', package: 'Amazon Brand Registry', price: '$2,500', billing: 'One-time' },
  { service: 'Amazon Publishing Services', package: 'Amazon Publishing', price: '$1,500', billing: 'One-time' },
  { service: 'Ecommerce Solutions', package: 'Ecommerce Store Setup', price: '$2,000', billing: 'One-time' },
  { service: 'Ecommerce Solutions', package: 'Ecommerce Optimization', price: '$1,500', billing: 'One-time' },
  { service: 'Digital Marketing Services', package: 'Starter Digital Marketing', price: '$500', billing: 'One-time' },
  { service: 'Digital Marketing Services', package: 'Growth Digital Marketing', price: '$1,000', billing: 'One-time · 12-month term (renewal optional)' },
  { service: 'Digital Marketing Services', package: 'Enterprise Digital Marketing', price: 'Quote on request', billing: 'One-time / term (by quote)' },
  { service: 'Software Development Solutions', package: 'Basic Software Development', price: '$5,000', billing: 'One-time' },
  { service: 'Software Development Solutions', package: 'Intermediate Software Development', price: '$10,000', billing: 'One-time' },
  { service: 'Software Development Solutions', package: 'Advanced Software Development', price: 'Quote on request', billing: 'One-time' },
  { service: 'Digital Transformation Services', package: 'Custom engagement', price: 'Quote on request', billing: 'One-time' },
  { service: 'Web Development Solutions', package: 'Basic Web Development', price: '$2,500', billing: 'One-time' },
  { service: 'Web Development Solutions', package: 'E-commerce Web Development', price: '$5,000', billing: 'One-time' },
  { service: 'Web Development Solutions', package: 'Enterprise Web Development', price: 'Quote on request', billing: 'One-time' },
  { service: 'Google Advertising Services', package: 'Google Ads Management', price: '$750', billing: 'One-time (ad spend extra)' },
  { service: 'Business Consulting Services', package: 'Custom engagement', price: 'Quote on request', billing: 'One-time' },
  { service: 'Animation & Trademark Services', package: 'Animation', price: '$2,500', billing: 'One-time' },
  { service: 'Animation & Trademark Services', package: 'Trademark Registration', price: '$1,000', billing: 'One-time (government fees extra)' },
]
