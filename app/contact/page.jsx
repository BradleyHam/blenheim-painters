import Contact from '@/components/layout/Contact'
import Image from 'next/image'
import Script from 'next/script'
import { getContactPageSchema } from '@/config/structured-data'

export default function ContactPage() {

  return (
    <>
      <Script
        id="structured-data-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContactPageSchema()) }}
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