'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import CtaButton from '@/components/ui/CtaButton'
export default function CtaFooter() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    // Only execute this on the client
    function handleResize() {
      const width = window.innerWidth
      // Check if we're on a large screen (lg breakpoint is 1024px)
      setIsLargeScreen(width >= 1024)
    }
    
    window.addEventListener('resize', handleResize)
    // Initial check
    handleResize()
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ borderTop: '2px solid rgba(212, 175, 55, 0.4)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gold/10" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(212, 175, 55, 0.4) 0, rgba(212, 175, 55, 0.4) 1px, transparent 0, transparent 10px)',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="px-4 container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div 
            id="cta-footer-container"
            className="relative bg-navy rounded-2xl overflow-hidden border border-gold/20 shadow-2xl transition-all p-6 py-12 lg:p-[48px]"
          
          >

            {/* Brushstroke SVG */}
            <Image src="/brushstroke.svg" alt="Brushstroke" width={1111} height={1111} className="absolute top-4 max-w-[1111px]  opacity-70 transfrom translate-x-[100px] lg:translate-x-1/3" />
            

            {/* Top border accent */}
            {/* <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" /> */}

       

            {/* Text + Button */}
            <div className="relative z-10 flex flex-col items-start gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Transform <br /> Your Queenstown Home?
              </h2>
              <p className="text-gray-200 text-xl lg:leading-relaxed " style={{ maxWidth: '600px' }}>
                Schedule your complimentary consultation today and discover how we can bring your vision to life with our expert painting services.
              </p>
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
