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
import { getWebsiteSchema, getFAQPageSchema } from '@/config/structured-data'
export default async function Home() {
  // Fetch featured and recent projects from markdown
  const projects = await getFeaturedAndRecentProjects();

  // Use dynamic schemas from config
  const websiteSchema = getWebsiteSchema()
  
  // FAQ data for structured markup (matching the FAQ component)
  const homepageFaqs = [
    {
      question: `Why should I choose a Master Painter for my home painting project in ${siteConfig.townName}?`,
      answer: `Choosing a Master Painter ensures your painting project is completed to the highest professional standards. As members of Master Painters NZ, ${siteConfig.businessName} provides exceptional workmanship, extensive industry training (BCITO-qualified), and guaranteed customer satisfaction.`
    },
    {
      question: `What residential painting services do you offer in ${siteConfig.townName}?`,
      answer: `${siteConfig.businessName} specializes in interior and exterior painting services for residential re-paints, renovations, and new builds in ${siteConfig.townName}. Our comprehensive service includes detailed preparation, premium painting products, and meticulous finishes tailored to your home.`
    },
    {
      question: 'Do you use environmentally friendly paints for residential projects?',
      answer: 'Yes, we proudly offer eco-friendly, low-VOC paints from top-quality brands such as Dulux and Resene. These paints provide superior finish quality, durability, and are safer for your family and the environment.'
    },
    {
      question: 'Are your painting services guaranteed?',
      answer: `Absolutely. ${siteConfig.businessName} is fully licensed, insured, and offers a 5-year warranty on our painting services. We guarantee against peeling, cracking, and fading, providing you peace of mind and protecting your investment.`
    }
  ]
  
  const faqSchema = getFAQPageSchema(homepageFaqs)

  return (
    <>
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

