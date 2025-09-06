import Contact from '@/components/layout/Contact'
import Image from 'next/image'
import Script from 'next/script'

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Little Dog Decorating Contact Page",
    "description": "Get in touch with Little Dog Decorating for your painting needs in Queenstown and Arrowtown.",
    "url": "https://www.littledogdecorating.co.nz/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Little Dog Decorating",
      "image": "https://www.littledogdecorating.co.nz/little-dog-decorating-logo--queenstown-painter.webp",
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
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+64 21 632 938",
        "email": "littledogdecorating@gmail.com",
        "availableLanguage": "English"
      }
    }
  }

  return (
    <>
      <Script
        id="structured-data-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      <main className="">
        <div className="page-header h-[300px] lg:h-[500px] mx-5 rounded-lg relative">
          <Image 
            src="/queenstown.jpg" 
            alt="Exterior Painting" 
            fill 
            priority
            className="object-cover rounded-lg" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333]/90 to-transparent rounded-lg"></div>
          <h1 className="text-white text-2xl lg:text-4xl font-semibold tracking-tight absolute bottom-0 left-0 p-6 lg:p-12">Get in Touch</h1>
        </div>
        <Contact />
      </main>
    </>
  )
}
//------