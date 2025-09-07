'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import CtaFooter from '../experimental-components/CtaFooter'
import { testimonials } from '@/data/testimonials'
import Script from 'next/script'
import { imageConfig } from '@/config/images'
import { getAggregateRatingSchema, getReviewSchema } from '@/config/structured-data'
import { siteConfig } from '@/config/site-config'

const TestimonialsPage = () => {
  // Transform testimonials data to include ratings for schema generation
  const testimonialsWithRatings = testimonials.map(testimonial => ({
    ...testimonial,
    rating: 5, // All testimonials show 5 stars in the UI
    content: testimonial.text,
    name: testimonial.author
  }))

  // Generate dynamic schemas from config
  const testimonialSchema = getAggregateRatingSchema(testimonialsWithRatings)

  return (
    <>
      <Script
        id="structured-data-testimonials"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
      />

      <section id="testimonials" className="bg-white">
        <div className="page-header h-[300px] lg:h-[500px] mx-5 rounded-lg relative">
          <Image 
            src={imageConfig.hero.townscape.path} 
            alt="Exterior Painting" 
            fill 
            priority
            className="object-cover rounded-lg" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333]/90 to-transparent rounded-lg"></div>
          <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight absolute bottom-0 left-0 p-6 lg:p-12 lg:pb-10  ">Testimonials</h1>
        </div>
        <div className="container py-12 lg:py-24 px-5">
          {/* <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-navy">
              Client Testimonials
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover what discerning homeowners across Queenstown have to say about our craftsmanship and service.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 lg:p-10 rounded-lg shadow-md border border-gray-100 flex flex-col h-full">
                <div className="flex justify-start mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-gold text-gold" />
                  ))}
                </div>
                {testimonial.text && (
                  <blockquote className="text-gray-700 mb-8 text-lg italic leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </blockquote>
                )}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-14 w-14 rounded-full bg-navy flex items-center justify-center text-white text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-navy">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CtaFooter /> 

      </section>
    </>
  )
}

export default TestimonialsPage