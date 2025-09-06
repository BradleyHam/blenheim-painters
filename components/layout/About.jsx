import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeadingTag from "@/components/ui/HeadingTag"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-12 md:gap-16 items-center">
          <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] order-1 md:order-none">
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-xl transform -translate-x-8 z-10">
              <Image
                src="/dan-and-dog-in-lower-shotover.jpg"
                alt="Little Dog Decorating owner with his Jack Russell terrier"
                fill
                className="object-cover "
              />
            </div>
            
            <div className="absolute -top-8 -right-6 lg:-right-4 w-[180px] h-[140px] sm:w-[180px] sm:h-[150px] md:w-[200px] md:h-[160px] lg:w-[260px] lg:h-[200px] rounded-lg overflow-hidden shadow-2xl border-4 border-white z-20 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-gold/20">
              <Image
                src="/little-dog-decorating-company-vehicle.jpg" 
                alt="Little Dog Decorating van"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <HeadingTag>Queenstown&apos;s Repainting Pros</HeadingTag>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                Little Dog, <span className="text-gold italic">Big Results</span>
              </h2>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-gold"></div>
            </div>

            <p className="text-darkText text-base sm:text-lg leading-relaxed">
              We may be called Little Dog Decorating, but we deliver a mighty finish. With our trusty Jack Russell on patrol, you can count on quality work and a friendly smile. After nearly two decades painting around Queenstown, we know how to make well-loved spaces feel brand new again.
            </p>
    
            <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                <span className="text-navy text-sm sm:text-base">15+ Years of Expertise</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                <span className="text-navy text-sm sm:text-base">Fully Insured Service</span>
              </div>
            
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                <span className="text-navy text-sm sm:text-base">Complimentary Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}