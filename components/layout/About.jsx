import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeadingTag from "@/components/ui/HeadingTag"
import { imageConfig } from '@/config/images'
import { copyConfig } from '@/config/copy'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-12 md:gap-16 items-center">
          <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] order-1 md:order-none">
            <div className="relative h-[420px] sm:h-[380px] md:h-[420px] lg:h-[580px] rounded-lg overflow-hidden shadow-xl transform -translate-x-8 z-10">
              <Image
                src={imageConfig.about.owner.path}
                alt={imageConfig.about.owner.alt}
                fill
                className="object-cover object-top"
              />
            </div>
            
            <div className="absolute -top-8 -right-6 lg:-right-4 w-[180px] h-[140px] sm:w-[180px] sm:h-[150px] md:w-[200px] md:h-[160px] lg:w-[260px] lg:h-[200px] rounded-lg overflow-hidden shadow-2xl border-4 border-white z-20 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-gold/20">
              <Image
                src={imageConfig.about.vehicle.path}
                alt={imageConfig.about.vehicle.alt}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <HeadingTag>{copyConfig.about.tagline}</HeadingTag>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                {copyConfig.about.title.main} <span className="text-gold italic">{copyConfig.about.title.accent}</span>
              </h2>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-gold"></div>
            </div>

            <p className="text-darkText text-base sm:text-lg leading-relaxed">
              {copyConfig.about.description}
            </p>
    
            <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-2 sm:pt-4">
              {copyConfig.about.credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                  <span className="text-navy text-sm sm:text-base">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}