'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import CtaFooter from "@/app/experimental-components/CtaFooter"
import { useState, useEffect } from "react"


export default function ProjectsContent({ featuredProject, recentProjects }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after component mounts
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 0);
    
    // Cleanup function to prevent memory leaks
    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Section */}
        <div className="page-header h-[300px] lg:h-[500px] mx-5 rounded-lg relative">
          <div className={`absolute inset-0 bg-gray-200 rounded-lg ${isLoading ? 'animate-pulse' : 'hidden'}`}></div>
          <Image 
            src="/queenstown.jpg" 
            alt="Interior Painting" 
            fill 
            priority
            className={`object-cover rounded-lg transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#333]/90 to-transparent rounded-lg"></div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight absolute bottom-0 left-0 p-6 lg:p-12 lg:pb-10  ">Our Projects</h1>
        </div>
      </section>

      {/* Main Content Wrapper with min-height to prevent layout shift */}
      <div className="min-h-[1500px]">
        {/* Featured Project Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy flex-shrink-0">Featured Project</h2>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* Featured Project Image */}
                <div className="relative h-[350px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                  {isLoading ? (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                  ) : featuredProject ? (
                    <Image 
                      src={featuredProject.mainImage || "/featured-project.jpg"} 
                      alt={featuredProject?.title || "Featured project"} 
                      fill 
                      className="object-cover" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-400">No featured project available</p>
                    </div>
                  )}
                </div>

                {/* Featured Project Content */}
                <div className="space-y-6">
                  {isLoading ? (
                    <>
                      <div className="flex gap-3">
                        {[1, 2].map((_, index) => (
                          <div key={index} className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
                        ))}
                      </div>
                      <div className="h-10 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                      <div className="flex items-center gap-6">
                        {[1, 2].map((_, index) => (
                          <div key={index} className="h-4 w-28 bg-gray-200 animate-pulse rounded"></div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((_, index) => (
                          <div key={index} className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                        ))}
                      </div>
                      <div className="pt-2">
                        <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-3"></div>
                        <ul className="space-y-2">
                          {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse"></div>
                              <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                            </div>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4">
                        <div className="h-10 w-40 bg-gray-200 animate-pulse rounded"></div>
                      </div>
                    </>
                  ) : featuredProject ? (
                    <>
                      <div className="flex gap-3">
                        {featuredProject.categories?.map((category, index) => (
                          <Badge 
                            key={index} 
                            className={category.colorClass || "bg-navy hover:bg-navy-light text-white"}
                          >
                            {category.title}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-3xl font-bold text-navy">{featuredProject.title}</h3>

                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-gold" />
                          <span>Completed: {featuredProject.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-gold" />
                          <span>Duration: {featuredProject.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {featuredProject.description}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-lg font-semibold text-navy mb-3">Project Highlights:</h4>
                        <ul className="space-y-2">
                          {featuredProject.highlights?.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-gold"></div>
                              </div>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link href={`/projects/${featuredProject.slug}`}>
                          <Button className="bg-navy hover:bg-navy-light text-white">
                            View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">No featured project available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-12">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy flex-shrink-0">Recent Projects</h2>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  // Skeleton loading for projects
                  Array(3).fill(0).map((_, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                      <div className="relative h-64 bg-gray-200 animate-pulse"></div>
                      <div className="p-6 space-y-4">
                        <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
                        <div className="flex items-center gap-4">
                          <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                          <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
                        </div>
                        <div className="h-4 w-28 bg-gray-200 animate-pulse rounded"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  recentProjects.map((project) => (
                    <div key={project._id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg group flex flex-col h-full">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.mainImage || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          {project.categories?.map((category, index) => (
                            <Badge 
                              key={index} 
                              className={category.colorClass || "bg-navy hover:bg-navy-light text-white"}
                            >
                              {category.title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4 text-gold" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {project.description}
                          </p>
                        </div>
                        <div className="mt-auto pt-4">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors"
                          >
                            View Project <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaFooter />     
    </div>
  )
} 