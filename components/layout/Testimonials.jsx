'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { testimonials } from '@/data/testimonials'

const Testimonials = () => {
  // Display only the first 3 testimonials on the homepage
  const featuredTestimonials = testimonials.slice(0, 3);
  
  return (
    <section id="testimonials" className="pb-16 sm:pb-20 md:pb-24  sm:pt-16 md:pt-24 lg:pt-[96px] bg-white mt-12 lg:mt-0">
      <div className="container px-4 sm:px-6 md:px-8">
        {/* <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-navy">
            Client Testimonials
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover what discerning homeowners across Queenstown have to say about our craftsmanship and service.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-5 py-8 sm:p-8 md:p-10 rounded-lg shadow-md border border-gray-100 flex flex-col h-full">
              <div className="flex justify-start mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-gold text-gold" />
                ))}
              </div>
              {testimonial.text && (
                <blockquote className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg italic lg:leading-relaxed flex-grow leading-snug">
                  "{testimonial.text}"
                </blockquote>
              )}
              
              <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-navy flex items-center justify-center text-white text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <Link href="/testimonials">
            <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-white text-sm sm:text-base py-2 px-4 sm:py-2.5 sm:px-6">
              View More Client Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials