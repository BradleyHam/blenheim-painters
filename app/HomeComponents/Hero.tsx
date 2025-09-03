'use client'
import Image from "next/image"
import { Phone, Calendar, ArrowRight, Star, CheckCircle } from "lucide-react"
import ButtonCta from "../SiteComponents/ButtonCta"
import { useModal } from '../SiteComponents/ModalClientManager'


export default function EnhancedHero() {
  const { handleOpenModal } = useModal();

  return (
    <section className=" relative w-full overflow-hidden  min-h-[80vh]">
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Blenheim Painters",
            description: "Premium Interior & Exterior Painting Specialists in Blenheim",
            image: "/portrait.webp",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Blenheim",
              addressRegion: "Marlborough",
              addressCountry: "NZ",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-41.5131",
              longitude: "173.9540",
            },
            telephone: "+6435778899",
            areaServed: "Blenheim",
            serviceArea: "Marlborough District",
            sameAs: ["https://facebook.com/blenheimpainters", "https://instagram.com/blenheimpainters"],
          }),
        }}
      />

      {/* Large background brush stroke spanning corner to corner */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"> */}
        <Image
          src="/brush-stroke.svg"
          alt=""
          width={800}
          height={400}
          className="absolute top-24 w-full h-full opacity-50 z-10"
          style={{
            transform: 'scale(1.8) rotate(-15deg) translate(0, 50px) ',
            transformOrigin: 'bottom'
          }}
        />
      {/* </div> */}

      {/* Noise texture background */}
      <div className="" />

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 pb-12 sm:px-6 sm:pt-12 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-1 gap-8 lg:gap-16 items-center min-h-[80vh] max-w-4xl">
          {/* Main content */}
          <div className="flex flex-col justify-center space-y-8 lg:pb-0 pb-8 pt-8 lg:pt-0">
            {/* Location tag */}
            <h1 className="inline-flex items-center rounded-full tracking-tight text-base font-medium text-cta w-fit">
              House Painters Blenheim
            </h1>

            {/* Main headline */}
            <div className="space-y-4 text-heading">
              <h2 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#545C67] tracking-tight leading-tight">
                Bring New Life to Your Home
       
                With Expert Painting in Blenheim
              </h2>
            </div>
            <p className="text-[#545C67] max-w-2xl text-base font-medium tracking-tight">With over 15 years of family experience in painting, my partner and I treat your home like our own and back every job
            with a <span className="font-bold italic">full workmanship warranty.</span></p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Licensed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Insured</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-5 w-5 fill-current" />
                <span className="text-sm font-medium">5 Star Rated on Google</span>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <ButtonCta text='Book a consultation' type={2} onClick={handleOpenModal} />     
            </div>
          </div>

          {/* Portrait image - stacked below content on mobile, absolute positioned on desktop */}
          <div className="relative lg:absolute lg:bottom-0 lg:-right-24 z-20 w-full lg:w-auto flex justify-center lg:justify-end">
            <Image
              src="/portrait.webp"
              alt="Professional painter in Blenheim with crossed arms holding paint brush"
              width={400}
              height={400}
              priority
              className="object-cover object-bottom w-[500px] h-[500px] lg:w-[750px] lg:h-[750px]"
            />
          </div>
        </div>
      </div>

    </section> 
  )
}
