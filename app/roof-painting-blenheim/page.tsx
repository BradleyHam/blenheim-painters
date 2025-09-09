import type { Metadata } from "next"
import Image from "next/image"
import CtaButton from "../../components/ui/CtaButton"
import ContentSection from "../interior-painting-blenheim/ContentSection"
import { Gauge, ShieldCheck, SunSnow, Sparkles, HardHat, Brush, PaintBucket, SprayCan } from "lucide-react"
import RoofPaintingFaq from "./RoofPaintingFAQ"
import CtaFooter from "../experimental-components/CtaFooter"
import Script from "next/script"
import ProjectSection from "@/components/layout/ProjectSection"
import { getProjects } from "@/lib/markdown"
import { siteConfig, getSiteTitle, getServiceAreasText } from '@/config/site-config'
import { imageConfig } from '@/config/images'
import { getServiceSchema, getHowToSchema } from '@/config/structured-data'

export const metadata: Metadata = {
  title: getSiteTitle(`Roof Painting ${siteConfig.townName}`),
  description: `Professional roof painting services in ${siteConfig.townName}. Protect and enhance your roof with our expert painting solutions. Get a free quote today.`,
  keywords: `roof painting ${siteConfig.townName}, roof painters, roof coating, roof protection, exterior painting, ${siteConfig.businessName}`
}

export default async function RoofPainting() {
  // Fetch roof painting projects
  const allProjects = await getProjects();
  const roofProjects = allProjects.filter(p => p.services.includes("Roof Painting"));

  // Generate schemas dynamically from config
  const serviceSchema = getServiceSchema("Roof Painting")
  const howToSchema = getHowToSchema("Roof Painting")

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
  

      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="page-header h-[300px] lg:h-[500px] mx-5 rounded-lg relative">
          <Image 
            src={`/roof-painting/roof-painting-in-${siteConfig.townNameLower}.jpg`} 
            alt="Roof Painting" 
            fill
            priority
          className="object-cover [object-position:50%_0%] rounded-lg" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333] from-10% to-[#333]/30 z-10 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 p-6 lg:p-12 lg:pb-10 z-20 text-white max-w-2xl flex flex-col items-start gap-4">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight">Roof Painting in {siteConfig.townName}</h1>
            <p>Let's give your roof a fresh start—no rust, no leaks, just solid protection against whatever {siteConfig.townName} weather can dish out.</p>
            {/* <CtaButton text="Book Your Free Roof Inspection" /> */}
          </div>
        </div>
 
 
        {/* Main Content */}
        <ContentSection 
          subtitle="Protect Your Investment"
          title="Why Expert Roof Painting Is Essential"
          content={
            <>
              <p className="text-gray-700 leading-relaxed">
                Beyond aesthetics, professional roof painting serves as a critical protective barrier for your most valuable asset. Our premium coating systems create an impermeable shield against Central Otago's harsh UV radiation, freeze-thaw cycles, and moisture penetration that can deteriorate roofing materials over time. This preventative measure extends your roof's lifespan significantly while enhancing your property's architectural integrity.
              </p>
              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Comprehensive Protection</span> — Prevents corrosion, oxidation and structural damage while sealing microscopic cracks before they develop into costly repairs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <SunSnow className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Climate-Specific Formulation</span> — Our specialized coatings are engineered to withstand Central Otago's extreme temperature fluctuations, intense alpine UV exposure, and winter precipitation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Enhanced Curb Appeal</span> — Transform your property's aesthetic with premium finishes that complement your home's architectural style and neighborhood character
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Thermal Efficiency</span> — Our specialized reflective coating technology can reduce heat absorption by up to 30%, potentially lowering cooling costs during summer months
                  </div>
                </li>
              </ul>
            </>
          }
          imagePath={imageConfig.process.roofOne}
          imageAlt="Roof with premium protective coating system deflecting environmental elements"
          imageOnLeft={false}
          bgColor="bg-gray-50"
        />

        <ContentSection 
          subtitle="Our Meticulous Methodology"
          title="The Science of Superior Roof Coating"
          content={
            <>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive roof coating process follows a rigorously developed protocol that emphasizes thorough preparation, premium materials, and expert application techniques. Each project receives individualized attention from our certified specialists who evaluate your roof's specific needs and environmental exposure factors to determine the optimal treatment plan.
              </p>
              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <HardHat className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Safety-First Infrastructure</span> — Professional-grade scaffolding and fall protection systems ensure complete access to all roof sections while maintaining the highest safety standards for our technicians and your property
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brush className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Advanced Surface Preparation</span> — Multi-stage cleaning process including pressure washing, chemical treatments for biological growth, and mechanical abrasion to ensure optimal coating adhesion and longevity
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PaintBucket className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Targeted Remediation</span> — Specialized rust conversion primers and elastomeric fillers address localized deterioration, ensuring a uniform substrate before application of primary coating systems
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <SprayCan className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Precision Application System</span> — Computer-controlled spraying equipment delivers precisely calibrated coating thickness in multiple perpendicular passes, ensuring complete coverage and optimal material performance
                  </div>
                </li>
              </ul>
            </>
          }
          imagePath={imageConfig.process.roofTwo} 
          imageAlt="Professional technician applying advanced coating system with specialized equipment"
          imageOnLeft={true}
          bgColor="bg-white"
        /> 

        {/* Roof Projects Section */}
        {roofProjects && roofProjects.length > 0 && (
          <ProjectSection
            subtitle="Our Roof Projects"
            title="Recent Roof Transformations"
            description={`Browse our recent roof painting projects in ${siteConfig.townName} and surrounding areas. See how our premium coatings enhance and protect roofs from harsh alpine conditions.`}
            projects={roofProjects}
            className="bg-light-bg/10"
            showMoreMessage={roofProjects.length < 3 ? "More roofing projects coming soon..." : ""}
          />
        )}

        <RoofPaintingFaq />
        <CtaFooter />      
      </main>
    </>
  )
}
