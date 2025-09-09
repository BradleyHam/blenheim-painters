'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/layout/SectionHeading'

interface ContentSectionProps {
  subtitle: string;
  title: string;
  content: ReactNode;
  imagePath: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  bgColor?: string;
}

export default function ContentSection({
  subtitle,
  title,
  content,
  imagePath,
  imageAlt,
  imageOnLeft = false,
  bgColor = 'bg-white',
}: ContentSectionProps) {
  return (
    <section className={`px-5 sm:px-6 lg:px-8 py-16 md:py-32 ${bgColor}`}>
      <div className=" px-0 lg:px-[80px] container mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Order changes based on imageOnLeft prop */}
          <div className={`flex flex-col ${imageOnLeft ? 'md:order-2' : 'order-1'}`}>
            <SectionHeading 
              subtitle={subtitle}
              title={title}
              type={1}
            />
            
            {/* Mobile Only Image */}
            <div className="block md:hidden mb-8 mt-6 rounded-lg">
              <div className="relative aspect-[4/3] w-full h-[300px] rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={imagePath}
                  alt={imageAlt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="100vw"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none prose-p:text-gray-700 prose-li:text-gray-700">
              {content}
            </div>
          </div>
          
          {/* Desktop Image - Order changes based on imageOnLeft prop */}
          <div className={`hidden md:block ${imageOnLeft ? 'md:order-1' : 'order-2'}`}>
            <div className="relative aspect-[4/3] w-full h-[400px] rounded-lg border overflow-hidden">
              <Image 
                src={imagePath}
                alt={imageAlt}
                fill
                className="object-cover rounded-lg"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 