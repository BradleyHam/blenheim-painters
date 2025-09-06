'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './hero.module.css'
import Header from '../../components/layout/Header'
import CtaButton from '../../components/ui/CtaButton'
import { imageConfig } from '@/config/images'
import { contentImageConfig } from '@/config/content-images'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${styles.relativeContainer} z-10 rounded-xl pt-16 overflow-hidden`} ref={containerRef}>
      {/* Background Image Container */}
      <div className={`${styles.imageContainer} overflow-hidden`}>
        {/* Image with Parallax Effect */}
        <div className={`${styles.imageWrapper} ${styles.image1}`}>
          <Image
            src={contentImageConfig.serviceCategories.interior.hero}
            alt="Interior design showcase"
            fill
            className={`${styles.fadeImage} transition-opacity duration-700 transform -translate-y-40 lg:translate-y-0 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            priority
            quality={85}
            sizes="100vw"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      
        {/* Hero Content */}
        <div className='relative text-white flex flex-col  sm:space-y-5 lg:space-y-8 items-start justify-end h-full px-4 sm:px-8 pb-20 sm:pb-24 lg:px-16 lg:pb-[60px] pt-20 sm:pt-24 z-20'>
          {/* Credentials Bar */}
          <div className="backdrop-blur-md bg-black/10 rounded-full -mx-4 sm:-mx-0 px-5 py-3 md:py-2.5 w-auto mb-6 md:mb-0 transition-all duration-700 ease-in-out transform translate-y-0 opacity-100 shadow-lg">
            <div className="flex flex-row items-center justify-start gap-6 md:gap-8">
              {/* Google Rating */}
              <div className="flex items-center">
                {/* Stars */}
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 md:w-5 md:h-5 ${isLoaded ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-700`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className={`ml-2 text-sm md:text-base font-medium transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-70'}`}>
                  5-star on Google
                </span>
              </div>
              
              {/* BCITO Certification */}
              <div className="flex items-center">
                <svg 
                  className={`w-4 h-4 md:w-5 md:h-5 ${isLoaded ? 'text-gold' : 'text-gray-300'} transition-colors duration-700`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className={`ml-2 text-sm md:text-base font-medium transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-70'}`}>
                  BCITO-certified
                </span>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-1000 ease-out">
            <h1 className={`font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-700 ease-out leading-[1] lg:leading-[1.1] tracking-tight ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 pb-2">Interior & Exterior Painting</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 pb-3">Specialists in Queenstown</span>
            </h1>
            <h2 className={`text-lg sm:text-xl md:text-2xl transition-all duration-700 delay-100 ease-out mt-3 tracking-wide ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="block text-white/90 font-light italic">Quality Work from a Friendly Team (and Their Little Dog!)</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ease-out w-full sm:w-auto mt-4 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="">
              <CtaButton />
            </div>
          </div>
        </div>

        {/* Refined overlay with more subtle gradient for better depth and sophistication */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#333] from-30% lg:from-10% via-[#333]/70 to-[#333]/30 backdrop-blur-[0px] rounded-xl' />
        
        {/* Additional decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent"></div>
      </div>
    </div>
  )
}

export default Hero
