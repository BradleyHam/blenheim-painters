'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeading from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/button'
import HeadingTag from '@/components/ui/HeadingTag'

export default function ProjectSection({ 
  title, 
  subtitle, 
  description, 
  projects = [], 
  linkToAll = true,
  textColor = 'text-darkText',
  className = '',
  showMoreMessage = ''
}) {
  if (!projects || projects.length === 0) return null

  return (
    <section className={`py-16 bg-gray-50 lg:py-[128px] ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
          <div className="text-start lg:text-center max-w-3xl mx-auto mb-10 lg:mb-20 flex flex-col items-start lg:items-center space-y-6">
          <HeadingTag>{subtitle}</HeadingTag>  
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold tracking-tight leading-loose text-navy leading-tight lg:leading-tight" >
           {title}
          </h2>
          <div className="h-1 w-24 bg-gold lg:mx-auto ">
          
          </div>
        
        </div>
            {/* {description && (
              <p className={`mt-6 max-w-2xl text-left mx-auto text-lg ${textColor} opacity-90`}>
                {description}
              </p>
            )} */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>

          {showMoreMessage && (
            <div className="mt-6 text-center italic text-navy/70">
              {showMoreMessage}
            </div>
          )}

          {linkToAll && (
            <div className="mt-12 text-center">
               <Link href="/projects">
            <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-white text-sm sm:text-base py-2 px-4 sm:py-2.5 sm:px-6">
              View More Projects
            </Button>
          </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 