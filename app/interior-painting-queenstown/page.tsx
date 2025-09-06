import React from 'react'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import CtaBanner from '@/app/experimental-components/CtaFooter'
import SectionHeading from '@/components/layout/SectionHeading'
import ContentSection from './ContentSection'
import InteractiveSection from './InteractiveSection'
import Testimonials from '@/components/layout/Testimonials'
import ProjectSection from '@/components/layout/ProjectSection'
import { getInteriorProjects } from '@/sanity/lib/api'
import { Metadata } from 'next'
import Script from "next/script"

const applyCoatingOptions = [
  {
    label: 'Brush and Roll',
    image: '/services/interior/rolling.png',
    content: (
      <>
        <p className="mb-4"> When it&apos;s a good shout: If you&apos;re still living in the house or have lots of fiddly bits to work around.</p>
        <p className="font-semibold mb-2">Why you might like it:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Easy to touch up later if the kids decide to play cricket inside</li>
          <li>We don&apos;t waste much paint</li>
          <li>Less time spent covering everything in sight</li>
        </ul>
        <p className="font-semibold mb-2">But keep in mind:</p>
        <ul className="list-disc list-inside">
          <li>Might see a few brush marks here and there</li>
          <li>Takes a bit longer to dry evenly</li>
          <li>Can sometimes leave darker edges (we call it &quot;picture framing&quot;)</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Spray Painting',
    image: '/services/interior/spray.png',
    content: (
      <>
        <p className="pb-4">When it&apos;s a good shout: Perfect for new builds or big open spaces.</p>
        <p className="font-semibold mb-2">Why you might like it:</p>
        <ul className="list-disc list-inside mb-4">
          <li>We&apos;ll be in and out before you know it</li>
          <li>Dries nice and even</li>
          <li>Looks smooth as</li>
        </ul>
        <p className="font-semibold mb-2">But keep in mind:</p>
        <ul className="list-disc list-inside">
          <li>We&apos;ll need to cover more stuff up</li>
          <li>Touching up later might be a bit trickier</li>
          <li>Paint hangs about in the air a bit longer</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Wallpaper',
    image: '/services/interior/wallpaper-2.png',
    content: (
      <>
        <p className="mb-4">When it&apos;s a good shout: Want to really make your Queenstown pad stand out? Wallpaper&apos;s your ticket to something special.</p>
        <p className="font-semibold mb-2">Why you might like it:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Create a feature wall that&apos;ll have your mates buzzing</li>
          <li>So many choices - from subtle textures to wild patterns</li>
          <li>Adds a bit of depth to your rooms</li>
          <li>Lasts yonks if you treat it right</li>
          <li>Great for hiding those not-so-perfect walls</li>
        </ul>
        <p className="font-semibold mb-2">Why trust us with your wallpaper:</p>
        <ul className="list-disc list-inside">
          <li>We&apos;ve got access to some choice wallpaper collections</li>
          <li>We know how to line up those patterns just right</li>
          <li>We&apos;ll help you pick something that suits your style and your life</li>
          <li>Fancy a mix of paint and wallpaper? We&apos;ve got you covered</li>
        </ul>
      </>
    ),
  },
];

// Add specific metadata for this page
export const metadata: Metadata = {
  title: 'Interior Painting Services Queenstown & Arrowtown',
  description: 'Transform your home interior with Little Dog Decorating. Expert interior painters in Queenstown and Arrowtown, using premium materials for flawless finishes.',
  keywords: [
    'interior painting Queenstown',
    'interior painter Arrowtown',
    'house painting interior NZ',
    'residential interior painting',
    'wall painting Queenstown',
    'ceiling painting',
    'trim painting',
    'Little Dog Decorating',
    'feature wall creation',
    'interior repaints',
    'waterproof kitchen and bathroom painting',
    'kitchen painting',
    'bathroom painting'
  ],
  openGraph: {
    title: 'Interior Painting Services Queenstown & Arrowtown | Little Dog Decorating',
    description: 'Expert interior painting for luxury homes in Queenstown & Arrowtown.',
    // You can add a specific OG image for this page if desired
    images: ['/interior-queenstown.jpeg'],
  }
}

export default async function InteriorPage() {
  // Fetch interior projects
  const interiorProjects = await getInteriorProjects();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Interior Painting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Little Dog Decorating",
      "image": "https://www.littledogdecorating.co.nz/little-dog-decorating-logo--queenstown-painter.webp",
      "telephone": "+64 21 632 938",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "31 Marston Road",
        "addressLocality": "Queenstown",
        "addressRegion": "Otago",
        "postalCode": "9304",
        "addressCountry": "New Zealand"
      }
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
    "url": "https://www.littledogdecorating.co.nz/interior-painting-queenstown",
    "description": "Premium interior painting services in Queenstown and Arrowtown. Transform your home with our expert interior painting solutions."
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Our Professional Interior Painting Process in Queenstown",
    "description": "Four-step method we follow to prepare and paint your interior for a flawless finish.",
    "image": [
      "https://www.littledogdecorating.co.nz/interior-queenstown.jpeg"
    ],
    "totalTime": "PT2H",
    "supply": [
      { "@type": "HowToSupply", "name": "Premium interior paint" },
      { "@type": "HowToSupply", "name": "Wall fillers and primers" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Professional paint rollers and brushes" },
      { "@type": "HowToTool", "name": "Spray equipment" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Furniture and Floor Protection",
        "text": "We carefully move and cover all furniture and floors to protect your belongings during the painting process."
      },
      {
        "@type": "HowToStep",
        "name": "Surface Preparation",
        "text": "We fill cracks, smooth surfaces, scrape off old paint, apply primer if needed, and sand everything for a perfect finish."
      },
      {
        "@type": "HowToStep",
        "name": "Paint Application",
        "text": "We apply premium paints using your choice of brush and roll or spray techniques to achieve a flawless finish."
      },
      {
        "@type": "HowToStep",
        "name": "Cleanup and Finishing",
        "text": "We remove all protective coverings, dust and vacuum the area, and return all furniture to its original position."
      }
    ]
  };

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

    <div className="text-darkText mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
      {/* Hero Section */}
      <div className="page-header h-[300px] lg:h-[500px] mx-5 rounded-lg relative">
        <Image 
          src="/interior-painting-queenstown-french-wash-feature-wall--arthurs-point.jpeg" 
          alt="Interior Painting" 
          fill
          priority
          className="object-cover rounded-lg" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333]/90 to-transparent rounded-lg"></div>
        <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight absolute bottom-0 left-0 p-6 lg:p-12 lg:pb-10  ">Interior Painting in Queenstown</h1>
      </div>
      
      <main className="bg-white flex flex-col">
        {/* Section 1: Keeping Your Stuff Safe */}
        <ContentSection 
          subtitle="First Things First"
          title="Keeping Your Stuff Safe"
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
          imagePath="/services/interior/protection.png"
          imageAlt="Furniture and floor protection"
          imageOnLeft={true}
          bgColor="bg-light-bg/10"
        />
        
        {/* Section 2: Getting Your Walls Ready */}
        <ContentSection 
          subtitle="Getting Your Walls Ready"
          title="The Not-So-Glamorous (But Super Important) Bit"
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
          imagePath="/services/interior/prep.png"
          imageAlt="Wall preparation and sanding"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />
       
        {/* Section 3: Application Methods */}
        <section className='px-4 sm:px-6 lg:px-8 py-16 md:py-32 bg-light-bg/10'>
          <div className=' mx-auto'>
            <SectionHeading 
              subtitle='Interior Coatings' 
              title='Choose Your Coating Method' 
              type={2} 
            />
            <div className='mt-10'>
              <InteractiveSection applyCoatingOptions={applyCoatingOptions} />
            </div>
          </div>
        </section>

        {/* Section 4: Cleaning Up */}
        <ContentSection 
          subtitle="Cleaning Up"
          title="We'll Leave Your Place Spick and Span"
          content={
            <>
              <p className="mb-6">We reckon a job&apos;s not done until everything&apos;s back to normal - or better! Here&apos;s what we do before we head off:</p>
              <ul className="list-disc list-inside mb-8">
                <li>Peel off all that protective gear</li>
                <li>Give everything a good dust and vac</li>
                <li>Put all your bits and bobs back where they belong</li>
                <li>One last look around to make sure you&apos;re happy as Larry</li>
              </ul>
              <p className="mb-6">Ready to give your Queenstown home a fresh new look? Give us a bell and we&apos;ll sort you out with a free quote. Whether it&apos;s a quick spruce-up or a total transformation, we&apos;ve got the skills to make your place look choice.</p>
            </>
          }
          imagePath="/services/interior/cleaning.png"
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
            subtitle="Our Interior Projects"
            title="Recent Interior Transformations"
            description="Explore our latest interior painting projects, showcasing our attention to detail and commitment to quality. See how we've transformed homes across Queenstown."
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
