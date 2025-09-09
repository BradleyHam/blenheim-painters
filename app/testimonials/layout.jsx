import { siteConfig, getSiteTitle, getServiceAreasText } from '@/config/site-config'

export const metadata = {
  title: getSiteTitle(`Testimonials | ${siteConfig.businessName}`),
  description: `Read what satisfied homeowners in ${siteConfig.townName} and surrounding areas say about ${siteConfig.businessName}. High-quality painting services and exceptional customer care.`,
  keywords: [
    `painter testimonials ${siteConfig.townName}`,
    `painting reviews ${siteConfig.serviceAreas[1] || siteConfig.townName}`,
    'customer feedback painting NZ',
    `${siteConfig.businessName} reviews`,
    `best painter ${siteConfig.townName}`,
  ],
  openGraph: {
    title: `Client Testimonials | ${siteConfig.businessName}`,
    description: `See why homeowners trust ${siteConfig.businessName} for their painting needs in ${siteConfig.townName}.`,
  },
  twitter: {
    title: `Client Testimonials | ${siteConfig.businessName}`,
    description: `Hear from our happy clients in ${siteConfig.townName} and surrounding areas.`,
  },
}

export default function TestimonialsLayout({ children }) {
  return children
} 