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
import { getProjects } from '@/lib/markdown'
import { siteConfig, getSiteTitle, getServiceAreasText } from '@/config/site-config'
import { getServiceSchema, getHowToSchema } from '@/config/structured-data'
import { imageConfig } from '@/config/images'
import { copyConfig } from '@/config/copy'

// Add specific metadata for this page
export const metadata: Metadata = {
  title: getSiteTitle(`Exterior Painting Services ${siteConfig.townName} & ${getServiceAreasText()}`),
  description: `Protect and beautify your home exterior with ${siteConfig.businessName}. Professional exterior painters serving ${siteConfig.townName} and surrounding areas. Durable finishes, weather protection.`,
  keywords: [
    `exterior painting ${siteConfig.townName}`,
    `exterior painter ${siteConfig.serviceAreas[1] || siteConfig.townName}`,
    'house painting exterior NZ',
    `weatherboard painting ${siteConfig.townName}`,
    'fence painting',
    'deck staining',
    'exterior house painters',
    siteConfig.businessName,
  ],
  openGraph: {
    title: `Exterior Painting Services ${siteConfig.townName} | ${siteConfig.businessName}`,
    description: `Durable and beautiful exterior painting for homes in ${siteConfig.townName} and surrounding areas.`,
  },
  twitter: {
    title: `Exterior Painting Services ${siteConfig.townName} | ${siteConfig.businessName}`,
    description: `Protect your home with expert exterior painting in ${siteConfig.townName} and surrounding areas.`,
  },
}

const houseTypes = [
  {
    label: 'Weatherboard',
    image: imageConfig.process.weatherboard,
    content: (
      <>
        <p className="mb-4">Weatherboard homes are a {siteConfig.townName} classic, and we&apos;ve got the expertise to make them shine:</p>
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
    image: imageConfig.process.cedar,
    content: (
      <>
        <p className="mb-4">Timber cladding requires special care to preserve its natural beauty while protecting it from {siteConfig.townName}&apos;s elements:</p>
        <ul className="list-disc list-inside mb-4">
          <li>We begin with a gentle clean using specialized wood cleaners to remove dirt without damaging the timber</li>
          <li>For weathered timber, we use restoration techniques like sanding or chemical brightening to rejuvenate the wood</li>
          <li>We&apos;re experts in applying both stains and clear sealers, enhancing the wood&apos;s natural grain</li>
          <li>For cedar, we use products specifically formulated to handle its unique properties and natural oils</li>
          <li>Our team applies UV-resistant finishes to protect against {siteConfig.townName}&apos;s intense sunlight</li>
          <li>We use breathable finishes that allow the timber to naturally regulate moisture, preventing trapped dampness</li>
          <li>For a modern look, we can apply solid color paints using techniques that maintain the texture of the wood</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Plaster',
    image: imageConfig.process.plaster,
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
    image: imageConfig.process.axonPanel,
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
          <li>Our team is experienced in applying durable finishes that stand up to {siteConfig.townName}&apos;s varied climate</li>
        </ul>
      </>
    ),
  },
];

export default async function ExteriorPage() {
  // Fetch exterior projects
  const allProjects = await getProjects();
  const exteriorProjects = allProjects.filter(p => p.services.includes("Exterior Painting"));

  // Generate schemas dynamically from config
  const serviceSchema = getServiceSchema("Exterior Painting")
  const howToSchema = getHowToSchema("Exterior Painting")

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
          src={imageConfig.services.exterior.path} 
          alt="Exterior Painting" 
          fill 
          priority
          className="object-cover rounded-lg" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333]/90 to-transparent rounded-lg"></div>
        <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight absolute bottom-0 left-0 p-6 lg:p-12 lg:pb-10">{copyConfig.services.exterior.pageTitle}</h1>
      </div>
      
      <main className="bg-white flex flex-col">
        {/* Section 1: Protecting Your Outdoor Space */}
        <ContentSection 
          subtitle="First Up"
          title="Protecting Your Outdoor Space"
          content={
            <>
              <p className='mb-4'>Your home&apos;s exterior is its first line of defense against {siteConfig.townName}&apos;s four seasons. Before we break out the brushes, we&apos;ll make sure everything&apos;s sorted:</p>
              <ul className="list-disc list-inside mb-4">
                <li>We&apos;ll shift your outdoor furniture to a safe spot</li>
                <li>Those prized plants? We&apos;ll cover them up nice and cozy</li>
                <li>Anything attached to the walls gets a protective wrap</li>
              </ul>
              <p>It&apos;s all about keeping your outdoor area as pristine as those Wakatipu views. No worries, no hassles - that&apos;s how we roll.</p>
            </>
          }
          imagePath={imageConfig.process.exteriorMasking}
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
              <p className='mb-4'>Right, let&apos;s get your walls ready for their new look. {siteConfig.townName} weather can be tough on exteriors, so we&apos;ll:</p>
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
          imagePath={imageConfig.process.exteriorSurfacePrep}
          imageAlt="Prepping Your Walls"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />
        
        {/* Section 3: House Types Selector */}
        <section className='px-5 lg:px-[80px] py-12 lg:py-24 bg-light-bg/10'>
          <div className='max-w-7xl mx-auto'>
            <SectionHeading 
              subtitle={copyConfig.services.exterior.sections.houseTypes.sectionTitle} 
              title={copyConfig.services.exterior.sections.houseTypes.title} 
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
          imagePath={imageConfig.process.exteriorSweeping}
          imageAlt="Cleaning up after painting"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />
        <Testimonials />
        
        {/* Exterior Projects Section - Added for SEO and CRO benefits */}
        {/* {exteriorProjects && exteriorProjects.length > 0 && (
          <ProjectSection
            subtitle="Our Exterior Projects"
            title="Recent Exterior Transformations"
            description={`Discover how we've revitalized homes across ${siteConfig.townName} with our expert exterior painting services. Browse our recent projects to see our workmanship firsthand.`}
            projects={exteriorProjects}
            className="bg-light-bg/10"
          />
        )} */}
      </main>

      <FooterBanner />
   
    </div>
    </>
  )
}