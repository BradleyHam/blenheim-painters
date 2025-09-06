'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index = 0 }) {
  if (!project) return null
  
  // Check if this is a featured project
  const isFeatured = project.featured === true;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-lg overflow-hidden shadow-md border ${isFeatured ? 'border-gold shadow-lg' : 'border-gray-100'} transition-all hover:shadow-lg group flex flex-col h-full`}
    >
      {/* Project Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={project.mainImage || "/placeholder.jpg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
        />
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-gold to-gold/80 text-white py-1.5 px-3 flex items-center justify-center">
            <Star className="h-4 w-4 mr-1.5 fill-white" /> 
            <span className="text-sm font-medium">Featured Project</span>
          </div>
        )}
        
        {/* Category Badges */}
        {project.categories && project.categories.length > 0 && (
          <div className={`absolute ${isFeatured ? 'top-10' : 'top-4'} left-4 flex gap-2 flex-wrap max-w-[calc(100%-2rem)]`}>
            {project.categories.map((category, idx) => (
              <Badge 
                key={idx} 
                className={category.colorClass || "bg-navy hover:bg-navy-light text-white"}
              >
                {category.title}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Project Type Badge */}
        <div className={`absolute ${isFeatured ? 'top-10' : 'top-4'} right-4`}>
          <Badge className={`${
            project.projectType === 'interior' 
              ? 'bg-gold/90 hover:bg-gold text-white' 
              : project.projectType === 'exterior'
                ? 'bg-navy/90 hover:bg-navy text-white'
                : 'bg-gradient-to-r from-navy to-gold text-white'
          }`}>
            {project.projectType === 'interior' 
              ? 'Interior' 
              : project.projectType === 'exterior' 
                ? 'Exterior' 
                : 'Interior & Exterior'}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className={`p-6 flex flex-col flex-grow ${isFeatured ? 'bg-white/50' : ''}`}>
        <div className="flex-grow">
          <h3 className={`text-xl font-bold ${isFeatured ? 'text-gold' : 'text-navy'} mb-2 group-hover:text-gold transition-colors`}>
            {project.title}
          </h3>
          
          {/* Project Metadata */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
            {project.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gold" />
                <span>{project.date}</span>
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold" />
                <span>{project.location}</span>
              </div>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* View Project Link */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/projects/${project.slug}`}
            className={`inline-flex items-center ${isFeatured ? 'text-gold' : 'text-navy'} font-medium hover:text-gold transition-colors`}
          >
            View Project <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 