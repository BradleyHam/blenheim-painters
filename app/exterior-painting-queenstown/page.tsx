import { Metadata } from 'next'
import Image from 'next/image'
import Script from "next/script"

import FooterBanner from '@/app/experimental-components/CtaFooter'
import Footer from '@/components/layout/Footer'
import HouseTypeSelector from './HouseTypeSelector'
import SectionHeading from '@/components/layout/SectionHeading'
import ContentSection from './ContentSection'
import Testimonials from '@/components/layout/Testimonials'
import ProjectSection from '@/components/layout/ProjectSection'
import { getExteriorProjects } from '@/sanity/lib/api'

// Add specific metadata for this page
export const metadata: Metadata = {
  title: 'Exterior Painting Services Queenstown & Arrowtown',
  description: 'Protect and beautify your home exterior with Little Dog Decorating. Professional exterior painters serving Queenstown and Arrowtown. Durable finishes, weather protection.',
  keywords: [
    'exterior painting Queenstown',
    'exterior painter Arrowtown',
    'house painting exterior NZ',
    'weatherboard painting Queenstown',
    'fence painting',
    'deck staining',
    'exterior house painters',
    'Little Dog Decorating',
  ],
  openGraph: {
    title: 'Exterior Painting Services Queenstown & Arrowtown | Little Dog Decorating',
    description: 'Durable and beautiful exterior painting for homes in Queenstown & Arrowtown.',
    // images: ['/og-exterior.jpg'],
  },
  twitter: {
    title: 'Exterior Painting Services Queenstown & Arrowtown | Little Dog Decorating',
    description: 'Protect your home with expert exterior painting in Queenstown & Arrowtown.',
    // images: ['/twitter-exterior.jpg'],
  },
}

const houseTypes = [
  {
    label: 'Weatherboard',
    image: '/services/exterior/weatherboard.jpg',
    content: (
      <>
        <p className="mb-4">Weatherboard homes are a Queenstown classic, and we&apos;ve got the expertise to make them shine:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Our team uses specialized primers designed to bond well with both old and new weatherboards</li>
          <li>We apply flexible, high-quality exterior paints that can withstand the natural expansion and contraction of the wood</li>
          <li>Extra attention is given to end-grain sealing and caulking joints to prevent moisture ingress</li>
          <li>For uneven surfaces, we employ techniques like &apos;wet-edge&apos; painting to ensure a smooth, consistent finish</li>
          <li>We&apos;re skilled in both brush and spray application, choosing the best method for your specific weatherboards</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Timber',
    image: '/services/exterior/cedar.jpg',
    content: (
      <>
        <p className="mb-4">Timber cladding requires special care to preserve its natural beauty while protecting it from Queenstown&apos;s elements:</p>
        <ul className="list-disc list-inside mb-4">
          <li>We begin with a gentle clean using specialized wood cleaners to remove dirt without damaging the timber</li>
          <li>For weathered timber, we use restoration techniques like sanding or chemical brightening to rejuvenate the wood</li>
          <li>We&apos;re experts in applying both stains and clear sealers, enhancing the wood&apos;s natural grain</li>
          <li>For cedar, we use products specifically formulated to handle its unique properties and natural oils</li>
          <li>Our team applies UV-resistant finishes to protect against Queenstown&apos;s intense sunlight</li>
          <li>We use breathable finishes that allow the timber to naturally regulate moisture, preventing trapped dampness</li>
          <li>For a modern look, we can apply solid color paints using techniques that maintain the texture of the wood</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Plaster',
    image: '/services/exterior/plaster.jpg',
    content: (
      <>
        <p className="mb-4">Plaster and stucco homes require a delicate touch and specialized knowledge:</p>
        <ul className="list-disc list-inside mb-4">
          <li>We start with a comprehensive inspection, identifying and repairing any cracks or damage in the plaster</li>
          <li>Our team uses elastomeric paints that can bridge hairline cracks and move with the substrate</li>
          <li>We apply masonry primers to ensure excellent adhesion and longevity of the topcoat</li>
          <li>For textured plaster, we use techniques like back-rolling to ensure even coverage in all the nooks and crannies</li>
          <li>We&apos;re skilled in both rolling and spraying applications, choosing the best method for your plaster&apos;s texture</li>
          <li>Our painters are trained in maintaining consistent texture when patching is required</li>
          <li>We use breathable paints that allow moisture to escape, preventing bubbling and peeling</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Axon Panel',
    image: '/services/exterior/axon-panel.jpg',
    content: (
      <>
        <p className="mb-4">Axon Panels offer a modern look, and we know exactly how to make them pop:</p>
        <ul className="list-disc list-inside mb-4">
          <li>We begin with a thorough clean, ensuring all surfaces are free from construction dust and debris</li>
          <li>Our team uses specialized masking techniques to protect the crisp lines of the vertical grooves</li>
          <li>We apply high-adhesion primers designed specifically for pre-primed fiber cement panels</li>
          <li>Our painters are skilled in both brush and roller techniques to achieve a smooth, even finish on large flat surfaces</li>
          <li>We use low-sheen or satin finishes that highlight the panel&apos;s texture without emphasizing surface imperfections</li>
          <li>For the joints, we employ careful caulking and painting techniques to maintain a seamless look</li>
          <li>We can recommend and apply bold, modern colors that complement the contemporary style of Axon Panels</li>
          <li>Our team is experienced in applying durable finishes that stand up to Queenstown&apos;s varied climate</li>
        </ul>
      </>
    ),
  },
];

export default async function ExteriorPage() {
  // Fetch exterior projects
  const exteriorProjects = await getExteriorProjects();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Exterior Painting",
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
    "url": "https://www.littledogdecorating.co.nz/exterior-painting-queenstown",
    "description": "Professional exterior painting services in Queenstown and Arrowtown. Protect and beautify your home with our expert exterior painting solutions."
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Our Professional Exterior Painting Process in Queenstown",
    "description": "Four-step method we follow to prepare and paint your home exterior for long-lasting protection and beauty.",
    "image": [
      "https://www.littledogdecorating.co.nz/ldd-exterior.jpg"
    ],
    "totalTime": "PT2H",
    "supply": [
      { "@type": "HowToSupply", "name": "Premium exterior paints" },
      { "@type": "HowToSupply", "name": "Weather-resistant primers" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Professional spray equipment" },
      { "@type": "HowToTool", "name": "Scaffolding and safety gear" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Outdoor Space Protection",
        "text": "We carefully move outdoor furniture, cover plants, and protect wall fixtures to safeguard your property during the painting process."
      },
      {
        "@type": "HowToStep",
        "name": "Surface Preparation",
        "text": "We clean surfaces, scrape peeling paint, replace rotted wood, fill cracks and gaps, sand surfaces, and apply primer to ensure the best foundation."
      },
      {
        "@type": "HowToStep",
        "name": "Paint Application",
        "text": "We apply premium exterior paints using techniques appropriate for your specific home cladding type, ensuring excellent coverage and durability."
      },
      {
        "@type": "HowToStep",
        "name": "Cleanup and Final Inspection",
        "text": "We pack up equipment, sweep and tidy your outdoor area, return all items to their original positions, and conduct a final walkthrough."
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
          src="/exteriors/exterior-painting-in-queenstown.jpg" 
          alt="Exterior Painting" 
          fill 
          priority
          className="object-cover rounded-lg" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333]/90 to-transparent rounded-lg"></div>
        <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight absolute bottom-0 left-0 p-6 lg:p-12 lg:pb-10">Exterior Painting in Queenstown</h1>
      </div>
      
      <main className="bg-white flex flex-col">
        {/* Section 1: Protecting Your Outdoor Space */}
        <ContentSection 
          subtitle="First Up"
          title="Protecting Your Outdoor Space"
          content={
            <>
              <p className='mb-4'>Your home&apos;s exterior is its first line of defense against Queenstown&apos;s four seasons. Before we break out the brushes, we&apos;ll make sure everything&apos;s sorted:</p>
              <ul className="list-disc list-inside mb-4">
                <li>We&apos;ll shift your outdoor furniture to a safe spot</li>
                <li>Those prized plants? We&apos;ll cover them up nice and cozy</li>
                <li>Anything attached to the walls gets a protective wrap</li>
              </ul>
              <p>It&apos;s all about keeping your outdoor area as pristine as those Wakatipu views. No worries, no hassles - that&apos;s how we roll.</p>
            </>
          }
          imagePath="/services/exterior/masking.png"
          imageAlt="Protecting Your Outdoor Space"
          imageOnLeft={true}
          bgColor="bg-light-bg/10"
        />
        
        {/* Section 2: Prepping Your Walls */}
        <ContentSection 
          subtitle="Prepping Your Walls"
          title="The Crucial Bit Most Folks Forget"
          content={
            <>
              <p className='mb-4'>Right, let&apos;s get your walls ready for their new look. Queenstown weather can be tough on exteriors, so we&apos;ll:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Give everything a good clean - no grime left behind</li>
                <li>Scrape off any peeling paint - it&apos;s got to go</li>
                <li>Replace any rotted wood - can&apos;t paint over problems</li>
                <li>Fill up those cracks and gaps - smooth as</li>
                <li>Sand it all down - for that perfect finish</li>
                <li>Chuck on some quality primer - it&apos;s the key to long-lasting color</li>
              </ul>
            </>
          }
          imagePath="/services/exterior/prep.png"
          imageAlt="Prepping Your Walls"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />
        
        {/* Section 3: House Types Selector */}
        <section className='px-5 lg:px-[80px] py-12 lg:py-24 bg-light-bg/10'>
          <div className='max-w-7xl mx-auto'>
            <SectionHeading 
              subtitle='Queenstown homes' 
              title='We know your cladding' 
              type={2}
            />
            <div className="mt-10">
              <HouseTypeSelector houseTypes={houseTypes} />
            </div>
          </div>
        </section>

        {/* Section 4: Cleaning Up */}
        <ContentSection 
          subtitle="The Clean Up"
          title="Leaving your place better than we found it"
          content={
            <>
              <p className='mb-4'>We reckon the job&apos;s not done until everything&apos;s spick and span. Here&apos;s our post-paint routine:</p>
              <ul className="list-disc list-inside mb-8">
                <li>Pack up all our gear and any leftover materials</li>
                <li>Give your outdoor area a good sweep and tidy</li>
                <li>Put all your outdoor bits and bobs back where they belong</li>
                <li>One last walk around to make sure you&apos;re chuffed with the result</li>
              </ul>
            </>
          }
          imagePath="/services/exterior/sweeping.png"
          imageAlt="Cleaning up after painting"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />
        <Testimonials />
        
        {/* Exterior Projects Section - Added for SEO and CRO benefits */}
        {exteriorProjects && exteriorProjects.length > 0 && (
          <ProjectSection
            subtitle="Our Exterior Projects"
            title="Recent Exterior Transformations"
            description="Discover how we've revitalized homes across Queenstown with our expert exterior painting services. Browse our recent projects to see our workmanship firsthand."
            projects={exteriorProjects}
            className="bg-light-bg/10"
          />
        )}
      </main>

      <FooterBanner />
   
    </div>
    </>
  )
}