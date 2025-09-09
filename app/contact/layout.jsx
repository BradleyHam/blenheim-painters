import { siteConfig, getSiteTitle, getServiceAreasText } from '@/config/site-config'

export const metadata = {
  title: getSiteTitle(`Contact ${siteConfig.businessName}`),
  description: `Contact ${siteConfig.businessName} for a free painting consultation in ${siteConfig.townName} and surrounding areas. Get in touch via phone, email, or our online form.`,
  keywords: [
    `contact painter ${siteConfig.townName}`,
    `${siteConfig.businessName} contact`,
    `painting quote ${siteConfig.serviceAreas[1] || siteConfig.townName}`,
    'free painting estimate NZ',
    'professional painter contact',
  ],
  openGraph: {
    title: `Contact Us | ${siteConfig.businessName}`,
    description: `Get in touch for premium painting services in ${siteConfig.townName} and surrounding areas`,
  },
  twitter: {
    title: `Contact Us | ${siteConfig.businessName}`,
    description: `Get in touch for premium painting services in ${siteConfig.townName} and surrounding areas`,
  }
}

export default function ContactLayout({ children }) {
  return children
} 