export interface Service {
  id: string
  title: string
  shortDescription: string
  href: string
}

export const homeServices: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription:
      'Elevate your online presence with tailored strategies that boost engagement and ROI.',
    href: '/service#digital-marketing',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    shortDescription:
      'Transform your ideas into scalable, efficient software products.',
    href: '/service#software-development',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    shortDescription:
      'Embrace the future with confidence, optimizing your digital operations.',
    href: '/service#digital-transformation',
  },
  {
    id: 'web-development',
    title: 'Development',
    shortDescription:
      'Craft visually stunning, user-friendly websites that captivate your audience.',
    href: '/service#web-development',
  },
  {
    id: 'google-advertising',
    title: 'Google Advertising',
    shortDescription:
      'Maximize your online visibility and target the right audience with precision.',
    href: '/service#google-advertising',
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    shortDescription:
      'Leverage our industry insights for informed decisions and growth.',
    href: '/service#business-consulting',
  },
]

export const allServiceCategories = [
  'Financial Services',
  'Cloud-Based Services',
  'LMS/CMS Development Services',
  'Content Development Services',
  'Amazon Store Management Services',
  'Amazon Brand Registry Services',
  'Amazon Publishing Services',
  'Ecommerce Solutions',
  'Digital Marketing Services',
  'Software Development Solutions',
  'Digital Transformation Services',
  'Development Solutions',
  'Google Advertising Services',
  'Business Consulting Services',
  'Animation and Trademark Services',
]
