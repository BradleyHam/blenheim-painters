import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight, MapPin, Phone, Mail, Clock, Star, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Hero from '../app/experimental-components/hero'
import Benefits from "@/components/ui/Benefits"
import About from "@/components/layout/About"
import Services from "@/components/layout/Services"
import Process from "@/components/layout/Process"
import Faq from "@/components/layout/Faq"
import Testimonials from "@/components/layout/Testimonials"
import Contact from "@/components/layout/Contact"
import Footer from "@/components/layout/Footer"
import CtaFooter from "@/app/experimental-components/CtaFooter"
import ProjectSection from "@/components/layout/ProjectSection"
import { getFeaturedAndRecentProjects } from "@/lib/markdown"
import Script from "next/script"
import EnhancedHero from "@/components/layout/enhancedHero"
import { siteConfig, getSiteTitle, getServiceAreasText } from '@/config/site-config'
export default async function Home() {
  // Fetch featured and recent projects from markdown
  const projects = await getFeaturedAndRecentProjects();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "alternateName": siteConfig.businessNameAlt,
    "url": siteConfig.website,
    "logo": `${siteConfig.website}${siteConfig.seoDefaults.ogImage}`,
    "image": `${siteConfig.website}ldd-exterior.jpg`,
    "description": `Professional painting and decorating services in ${siteConfig.townName} and ${getServiceAreasText()}. We specialize in interior, exterior, and roof painting for residential properties.`,
    "telephone": siteConfig.phoneNumber,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.region,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.coordinates.latitude,
      "longitude": siteConfig.coordinates.longitude
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.coordinates.latitude,
        "longitude": siteConfig.coordinates.longitude
      },
      "geoRadius": siteConfig.serviceRadius
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": Object.values(siteConfig.social).filter(Boolean),
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting",
            "url": `${siteConfig.website}interior-painting-${siteConfig.townNameLower}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Painting",
            "url": `${siteConfig.website}exterior-painting-${siteConfig.townNameLower}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Painting",
            "url": `${siteConfig.website}roof-painting-${siteConfig.townNameLower}`
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.businessName,
    "url": siteConfig.website,
    "description": `Professional painters in ${siteConfig.townName} and ${getServiceAreasText()}, offering interior, exterior, and roof painting services.`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.website}search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <div className="flex flex-col bg-white overflow-hidden max-w-full">
        <main className="flex-1 overflow-hidden">
          {/* Hero section - full width with custom padding */}
          <div className="overflow-hidden lg:px-8 px-0 sm:px-4 mb-0 sm:mb-8">
            <EnhancedHero />
            {/* <Hero /> */}
          </div>
          
          {/* Content sections with appropriate spacing */}
          <div className="space-y-0 overflow-hidden">
            <Testimonials />
            <About />
            <Services />
            
            {/* Featured and Recent Projects Section */}
            {/* {projects && projects.length > 0 && (
              <ProjectSection 
                subtitle="Our Recent Work"
                title="Featured Projects"
                description="Take a look at some of our recent painting and decorating projects across Queenstown and Arrowtown."
                projects={projects}
                className="bg-light-bg/10"
              />
            )} */}
            
            {/* <Process /> */}
            <Faq />
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}

