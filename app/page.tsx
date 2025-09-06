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
import { getFeaturedAndRecentProjects } from "@/sanity/lib/api"
import Script from "next/script"
import EnhancedHero from "@/components/layout/enhancedHero"
export default async function Home() {
  // Fetch featured and recent projects, with featured project first
  const projects = await getFeaturedAndRecentProjects();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Little Dog Decorating",
    "alternateName": "Little Dog Painting & Decorating",
    "url": "https://www.littledogdecorating.co.nz/",
    "logo": "https://www.littledogdecorating.co.nz/little-dog-decorating-logo--queenstown-painter.webp",
    "image": "https://www.littledogdecorating.co.nz/ldd-exterior.jpg",
    "description": "Professional painting and decorating services in Queenstown and Arrowtown. We specialize in interior, exterior, and roof painting for residential properties.",
    "telephone": "+64 21 632 938",
    "email": "littledogdecorating@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "31 Marston Road",
      "addressLocality": "Queenstown",
      "addressRegion": "Otago",
      "postalCode": "9304",
      "addressCountry": "New Zealand"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -44.9847,
      "longitude": 168.7488
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -44.9847,
        "longitude": 168.7488
      },
      "geoRadius": 25
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/littledogdecorating",
      "https://www.instagram.com/littledogdecorating"
    ],
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
            "url": "https://www.littledogdecorating.co.nz/interior-painting-queenstown"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Painting",
            "url": "https://www.littledogdecorating.co.nz/exterior-painting-queenstown"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Painting",
            "url": "https://www.littledogdecorating.co.nz/roof-painting-queenstown"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Little Dog Decorating",
    "url": "https://www.littledogdecorating.co.nz/",
    "description": "Professional painters in Queenstown and Arrowtown, offering interior, exterior, and roof painting services.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.littledogdecorating.co.nz/search?q={search_term_string}",
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
            {projects && projects.length > 0 && (
              <ProjectSection 
                subtitle="Our Recent Work"
                title="Featured Projects"
                description="Take a look at some of our recent painting and decorating projects across Queenstown and Arrowtown."
                projects={projects}
                className="bg-light-bg/10"
              />
            )}
            
            {/* <Process /> */}
            <Faq />
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}

