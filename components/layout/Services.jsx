import Link from "next/link"
import CtaButton from "../ui/CtaButton"
import HeadingTag from "../ui/HeadingTag"
import ServiceCard from "../ui/ServiceCard"
import ServiceDetailCard from "../ui/ServiceDetailCard"
import Image from "next/image"

export default function Services() {
  // Interior service details data
  const interiorServices = [
    {
      image: "/interiors/interior-repaint-in-lake-hayes.jpg",
      alt: "Luxury Living Room Painting",
      title: "Living Spaces",
      features: [
        "Bespoke feature wall creation",
        "Ceiling and architectural detail refinishing",
        "Custom trim and molding painting",
        "Expert color consultation"
      ]
    },
    {
      image: "/interiors/kitchen-repaint-at-millbrook-resort.jpg",
      alt: "Luxury Kitchen Painting",
      title: "Kitchens & Bathrooms",
      features: [
        "Premium moisture-resistant finishes",
        "Cabinetry refinishing and transformation",
        "Specialized tile and surface treatments",
        "Durable, washable wall finishes"
      ]
    },
    {
      image: "/interiors/bedroom-repaint-in-arrowtown.jpg",
      alt: "Luxury Bedroom Painting",
      title: "Bedrooms & Studies",
      features: [
        "Sophisticated accent walls",
        "Premium low-VOC paint options",
        "Built-in cabinetry and bookcase refinishing",
        "Custom decorative finishes"
      ]
    }
  ];

  // Exterior service details data
  const exteriorServices = [
    {
      image: "/exteriors/axon-panel-painting-in-kelvin-heights.jpg",
      alt: "Luxury Home Exterior Painting",
      title: "Façade & Siding",
      features: [
        "Weather-resistant premium coatings",
        "Comprehensive surface preparation",
        "UV and moisture protection systems",
        "Custom color schemes and consultations"
      ]
    },
    {
      image: "/exteriors/trim-painting-in-kelvin-heights.jpg",
      alt: "Luxury Exterior Trim Painting",
      title: "Trim & Accents",
      features: [
        "Detailed trim and fascia painting",
        "Window frame and door refinishing",
        "Architectural feature enhancement",
        "Precision masking and protection"
      ]
    },
    {
      image: "/exteriors/deck-staining-in-arrowtown.jpg",
      alt: "Luxury Deck and Patio Painting",
      title: "Decks & Outdoor Spaces",
      features: [
        "High-performance deck staining and sealing",
        "Patio and concrete surface treatments",
        "Outdoor furniture and fixture refinishing",
        "Alpine-specific weather protection"
      ]
    }
  ];

  // Roof service details data
  const roofServices = [
    {
      image: "/roof-restoration.jpg",
      alt: "Roof Restoration and Painting",
      title: "Roof Restoration",
      features: [
        "Comprehensive roof cleaning and preparation",
        "Repair of damaged tiles and flashings",
        "Premium roof sealing treatments",
        "Expert assessment and recommendations"
      ]
    },
    {
      image: "/roof-painting.jpg",
      alt: "Premium Roof Painting",
      title: "Premium Roof Painting",
      features: [
        "High-performance roof coating systems",
        "UV and weather-resistant finishes",
        "Color consultation for optimal aesthetics",
        "Precision application techniques"
      ]
    },
    {
      image: "/roof-protection.jpg",
      alt: "Long-term Roof Protection",
      title: "Long-term Protection",
      features: [
        "Specialized alpine climate protection",
        "Anti-moss and algae treatments",
        "Thermal reflective coating options",
        "Comprehensive warranty protection"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-32 bg-white">
      <div className="px-4 lg:px-8 container">
        <div className="text-start lg:text-center max-w-4xl mx-auto mb-10 lg:mb-20 flex flex-col items-start lg:items-center space-y-6">
          <HeadingTag>Our Services</HeadingTag>  
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-loose text-navy leading-tight lg:leading-tight" >
                Interior & Exterior Repaints, <span className="text-gold italic"> Done Right</span>
          </h2>
          <div className="h-1 w-24 bg-gold lg:mx-auto "></div>
          {/* <p className="text-gray-600 text-lg leading-relaxed">
            Specializing in premium interior and exterior repainting for Queenstown's finest homes, delivering
            unparalleled craftsmanship and attention to detail.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <ServiceCard 
            image="/interior-painting-queenstown-french-wash-feature-wall--arthurs-point.jpeg"
            alt="Luxury Interior Painting"
            title="Interior Repainting"
            description="Crisp lines. Perfect coverage. A fresh feel throughout your space."
            linkHref="/interior"
          />

          <ServiceCard 
            image="/exteriors/exterior-painting-in-queenstown.jpg"
            alt="Luxury Exterior Painting"
            title="Exterior Repainting"
            description="Boost curb appeal and shield your home from the elements."
            linkHref="/exterior"
          />
        
          <ServiceCard 
            image="/roof-painting/webp/roof-painting-in-queenstown.webp"
            alt="Premium Roof Painting"
            title="Roof Painting & Restoration"
            description="Protecting and beautifying your roof with specialized treatments and premium finishes"
            linkHref="/roof-painting-queenstown"
            imagePosition="object-[center_10%]"
          />
        </div>

        {/* <div id="interior-services" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy flex-shrink-0">
              Interior Painting
            </h3>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {interiorServices.map((service, index) => (
              <ServiceDetailCard
                key={index}
                image={service.image}
                alt={service.alt}
                title={service.title}
                features={service.features}
              />
            ))}
          </div>
        </div>

        <div id="exterior-services" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy flex-shrink-0">
              Exterior Painting
            </h3>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {exteriorServices.map((service, index) => (
              <ServiceDetailCard
                key={index}
                image={service.image}
                alt={service.alt}
                title={service.title}
                features={service.features}
              />
            ))}
          </div>
        </div> */}

        <div className="text-center mt-12">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}