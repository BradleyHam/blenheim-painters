import React from 'react'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import CtaBanner from '@/app/experimental-components/CtaFooter'
import SectionHeading from '@/components/layout/SectionHeading'
import ContentSection from './ContentSection'
import InteractiveSection from './InteractiveSection'
import Testimonials from '@/components/layout/Testimonials'
import ProjectSection from '@/components/layout/ProjectSection'
import { getProjects } from '@/lib/markdown'
import { Metadata } from 'next'
import Script from "next/script"
import { imageConfig } from '@/config/images'
import { siteConfig, getSiteTitle, getServiceAreasText } from '@/config/site-config'
import { getServiceSchema, getHowToSchema, getBreadcrumbSchema } from '@/config/structured-data'
import { copyConfig } from '@/config/copy'

// Generate coating options from copy config
const applyCoatingOptions = copyConfig.services.interior.sections.coatingMethods.options.map((option, index) => {
  const images = [imageConfig.process.interiorRolling, imageConfig.process.interiorSpray, '/services/interior/wallpaper-2.png']
  
  return {
    label: option.label,
    image: images[index],
    content: (
      <>
        <p className="mb-4">When it&apos;s a good shout: {option.whenToUse}</p>
        <p className="font-semibold mb-2">Why you might like it:</p>
        <ul className="list-disc list-inside mb-4">
          {option.pros.map((pro, i) => <li key={i}>{pro}</li>)}
        </ul>
        {option.cons && (
          <>
            <p className="font-semibold mb-2">But keep in mind:</p>
            <ul className="list-disc list-inside">
              {option.cons.map((con, i) => <li key={i}>{con}</li>)}
            </ul>
          </>
        )}
        {option.whyTrustUs && (
          <>
            <p className="font-semibold mb-2">Why trust us with your wallpaper:</p>
            <ul className="list-disc list-inside">
              {option.whyTrustUs.map((reason, i) => <li key={i}>{reason}</li>)}
            </ul>
          </>
        )}
      </>
    ),
  }
});

// Add specific metadata for this page
export const metadata: Metadata = {
  title: getSiteTitle(`Interior Painting Services ${siteConfig.townName} & ${getServiceAreasText()}`),
  description: `Transform your home interior with ${siteConfig.businessName}. Expert interior painters in ${siteConfig.townName} and surrounding areas, using premium materials for flawless finishes.`,
  keywords: [
    `interior painting ${siteConfig.townName}`,
    `interior painter ${siteConfig.serviceAreas[1] || siteConfig.townName}`,
    'house painting interior NZ',
    'residential interior painting',
    `wall painting ${siteConfig.townName}`,
    'ceiling painting',
    'trim painting',
    siteConfig.businessName,
    'feature wall creation',
    'interior repaints',
    'waterproof kitchen and bathroom painting',
    'kitchen painting',
    'bathroom painting'
  ],
  openGraph: {
    title: `Interior Painting Services ${siteConfig.townName} | ${siteConfig.businessName}`,
    description: `Expert interior painting for luxury homes in ${siteConfig.townName} and surrounding areas.`,
    // You can add a specific OG image for this page if desired
    images: ['/interior-queenstown.jpeg'],
  }
}

export default async function InteriorPage() {
  // Fetch interior projects
  const allProjects = await getProjects();
  const interiorProjects = allProjects.filter(p => p.services.includes("Interior Painting"));

  // Generate schemas dynamically from config
  const serviceSchema = getServiceSchema("Interior Painting")
  const howToSchema = getHowToSchema("Interior Painting")
  
  // Breadcrumb schema for navigation
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Interior Painting", url: `/interior-painting-${siteConfig.townNameLower}` }
  ]
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script
        id="structured-data-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="structured-data-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="structured-data-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

    <div className="text-darkText mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
      {/* Hero Section */}
      <div className="page-header h-[300px] lg:h-[500px] mx-5 rounded-lg relative">
        <Image 
          src={imageConfig.services.interior.path} 
          alt={imageConfig.services.interior.alt} 
          fill
          priority
          className="object-cover rounded-lg" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333]/90 to-transparent rounded-lg"></div>
        <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight absolute bottom-0 left-0 p-6 lg:p-12 lg:pb-10  ">{copyConfig.services.interior.pageTitle}</h1>
      </div>
      
      <main className="bg-white flex flex-col">
        {/* Section 1: Keeping Your Stuff Safe */}
        <ContentSection 
          subtitle={copyConfig.services.interior.sections.protection.subtitle}
          title={copyConfig.services.interior.sections.protection.title}
          content={
            <>
              <p className="mb-4">Look, we know your home isn&apos;t just a bunch of walls - it&apos;s where you live! That&apos;s why before we even think about cracking open a paint tin, we make sure everything&apos;s ship-shape:</p>
              <ul className="mb-4 list-disc list-inside">
                <li>We&apos;ll carefully shift the small stuff out of the way</li>
                <li>Big furniture? We&apos;ll pop it in the middle and wrap it up snug</li>
                <li>Anything that might take a tumble gets secured</li>
              </ul>
              <p>It&apos;s all about making sure your place is as tidy when we leave as it was when we arrived. No stress, no mess - that&apos;s our promise.</p>
            </>
          }
          imagePath={imageConfig.process.interiorProtection}
          imageAlt="Furniture and floor protection"
          imageOnLeft={true}
          bgColor="bg-light-bg/10"
        />
        
        {/* Section 2: Getting Your Walls Ready */}
        <ContentSection 
          subtitle={copyConfig.services.interior.sections.preparation.subtitle}
          title={copyConfig.services.interior.sections.preparation.title}
          content={
            <>
              <p className="mb-4">Alright, this is where the magic starts to happen. Before we make your walls look mint, we need to sort out any issues:</p>
              <ul className="list-disc list-inside">
                <li>Filling in those pesky cracks? You bet.</li>
                <li>Smoothing out dings and dents? Absolutely.</li>
                <li>Scraping off old, flaky paint? Consider it done.</li>
                <li>Slapping on some primer if needed? No worries.</li>
                <li>Sanding everything down? Smooth as a baby&apos;s bum, mate.</li>
              </ul>
            </>
          }
          imagePath={imageConfig.process.interiorPrep}
          imageAlt="Wall preparation and sanding"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />
       
        {/* Section 3: Application Methods */}
        <section className='px-4 sm:px-6 lg:px-8 py-16 md:py-32 bg-light-bg/10'>
          <div className=' mx-auto'>
            <SectionHeading 
              subtitle='Interior Coatings' 
              title={copyConfig.services.interior.sections.coatingMethods.title} 
              type={2} 
            />
            <div className='mt-10'>
              <InteractiveSection applyCoatingOptions={applyCoatingOptions} />
            </div>
          </div>
        </section>

        {/* Section 4: Cleaning Up */}
        <ContentSection 
          subtitle={copyConfig.services.interior.sections.cleanup.subtitle}
          title={copyConfig.services.interior.sections.cleanup.title}
          content={
            <>
              <p className="mb-6">We reckon a job&apos;s not done until everything&apos;s back to normal - or better! Here&apos;s what we do before we head off:</p>
              <ul className="list-disc list-inside mb-8">
                <li>Peel off all that protective gear</li>
                <li>Give everything a good dust and vac</li>
                <li>Put all your bits and bobs back where they belong</li>
                <li>One last look around to make sure you&apos;re happy as Larry</li>
              </ul>
              <p className="mb-6">Ready to give your {siteConfig.townName} home a fresh new look? Give us a bell and we&apos;ll sort you out with a free quote. Whether it&apos;s a quick spruce-up or a total transformation, we&apos;ve got the skills to make your place look choice.</p>
            </>
          }
          imagePath={imageConfig.process.interiorCleaning}
          imageAlt="Cleaning up after painting"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />
        
        {/* Testimonials Section */}
        <div className="pb-0 pt-0">
          <Testimonials />
        </div>
        
        {/* Interior Projects Section - Added for SEO and CRO benefits */}
        {interiorProjects && interiorProjects.length > 0 && (
          <ProjectSection
            subtitle={copyConfig.projects.sections.interior.subtitle}
            title={copyConfig.projects.sections.interior.title}
            description={copyConfig.projects.sections.interior.description}
            projects={interiorProjects}
            className="bg-light-bg/10"
          />
        )}
      </main>
      
      <CtaBanner />
    </div>
    </>
  )
}
