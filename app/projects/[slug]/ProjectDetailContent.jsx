'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react"
import CtaFooter from "@/app/experimental-components/CtaFooter"
import { useState, useEffect } from "react"
// PortableText component removed - using raw HTML content from markdown now
import Cta from "../../../components/ui/CtaButton"

export default function ProjectDetailContent({ project }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after component mounts
    setIsLoading(false)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative mx-5 rounded-lg h-[500px] flex items-end p-6 lg:p-12">
        <div className="absolute inset-0 z-0 rounded-lg">
          {isLoading ? (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-navy/50 z-10 rounded-lg"></div>
              <Image
                src={project?.mainImage || "/project-detail-hero.jpg"}
                alt={project?.title || "Project Detail"}
                fill
                className="object-cover object-center rounded-lg"
                priority
              />
            </>
          )}
        </div>

        <div className="relative z-20">
          <div className="">
            <Link
              href="/projects"
              className="inline-flex items-center text-white/80 hover:text-white mb-2 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>

            {isLoading ? (
              <>
                <div className="flex gap-3 mb-4">
                  {[1, 2].map((_, index) => (
                    <div key={index} className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
                  ))}
                </div>
                <div className="h-16 w-3/4 bg-gray-200 animate-pulse rounded mb-6"></div>
                <div className="flex flex-wrap items-center gap-6">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="h-4 w-28 bg-gray-200 animate-pulse rounded"></div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-3 mb-4">
                  {project?.categories?.map((category, index) => (
                    <Badge
                      key={index}
                      className={category.colorClass || (index === 0 ? "bg-navy hover:bg-navy-light text-white" : "bg-gold hover:bg-gold-dark text-white")}
                    >
                      {category.title}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-white font-bold tracking-wide text-3xl sm:text-4xl  leading-tighter mb-6">
                  {project?.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span>Completed: {project?.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>Duration: {project?.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span>Location: {project?.location}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Wrapper - min-height prevents footer from jumping */}
      <div className="min-h-[2000px]">
        {/* Project Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">Project Gallery</h2>
              
              {/* Before Images - only show if there are before images */}
              {isLoading || (project?.images?.before && project.images.before.length > 0) ? (
                <div className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="h-px bg-gray-200 flex-grow"></div>
                    <h3 className="text-xl font-bold text-navy px-4 flex items-center">
                      <span className="w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
                      BEFORE
                    </h3>
                    <div className="h-px bg-gray-200 flex-grow"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {isLoading ? (
                      // Skeleton for before images
                      Array(3).fill(0).map((_, index) => (
                        <div key={index} className="relative group">
                          <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-md border border-gray-200 bg-gray-200 animate-pulse"></div>
                          <div className="mt-3 h-4 bg-gray-200 animate-pulse rounded w-2/3"></div>
                        </div>
                      ))
                    ) : (
                      (project?.images?.before || []).map((image, index) => (
                        <div key={index} className="relative group">
                          <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-br-md">BEFORE</div>
                          </div>
                          <p className="mt-3 text-sm text-gray-600">{image.caption}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ) : null}
              
              {/* After Images */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="h-px bg-gold/40 flex-grow"></div>
                  <h3 className="text-xl font-bold text-navy px-4 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-gold mr-2"></span>
                    AFTER
                  </h3>
                  <div className="h-px bg-gold/40 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {isLoading ? (
                    // Skeleton for after images
                    Array(3).fill(0).map((_, index) => (
                      <div key={index} className="relative group">
                        <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-md border border-gold/20 bg-gray-200 animate-pulse"></div>
                        <div className="mt-3 h-4 bg-gray-200 animate-pulse rounded w-2/3"></div>
                      </div>
                    ))
                  ) : (
                    (project?.images?.after || []).map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-md border border-gold/20">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-0 left-0 bg-gold text-white text-xs px-2 py-1 rounded-br-md">AFTER</div>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">{image.caption}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Project Details</h2>

                  {isLoading ? (
                    // Skeleton for project details
                    <div className="space-y-8">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index}>
                          <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4 mb-3"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                            <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                            <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="mt-12 p-8 bg-navy text-white rounded-lg shadow-lg relative">
                        <div className="space-y-2 mb-6">
                          <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded"></div>
                          <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded"></div>
                          <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded w-2/3"></div>
                        </div>
                        <div className="text-right">
                          <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded w-1/4 ml-auto mb-1"></div>
                          <div className="h-3 bg-gray-200 bg-opacity-20 animate-pulse rounded w-1/6 ml-auto"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {project?.challenge && (
                        <div>
                          <h3 className="text-xl font-bold text-navy mb-3">The Challenge</h3>
                          <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                        </div>
                      )}

                      {project?.solution && (
                        <div>
                          <h3 className="text-xl font-bold text-navy mb-3">Our Solution</h3>
                          {typeof project.solution === 'string' ? (
                            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                          ) : (
                            <PortableText value={project.solution} />
                          )}
                        </div>
                      )}

                      {project?.results && (
                        <div>
                          <h3 className="text-xl font-bold text-navy mb-3">The Results</h3>
                          {typeof project.results === 'string' ? (
                            <p className="text-gray-700 leading-relaxed">{project.results}</p>
                          ) : (
                            <div className="text-gray-700 leading-relaxed">
                              <PortableText value={project.results} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {isLoading ? (
                    // Testimonial skeleton
                    <div className="mt-12 p-8 bg-navy text-white rounded-lg shadow-lg relative">
                      <div className="space-y-2 mb-6">
                        <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded"></div>
                        <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded"></div>
                        <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded w-2/3"></div>
                      </div>
                      <div className="text-right">
                        <div className="h-4 bg-gray-200 bg-opacity-20 animate-pulse rounded w-1/4 ml-auto mb-1"></div>
                        <div className="h-3 bg-gray-200 bg-opacity-20 animate-pulse rounded w-1/6 ml-auto"></div>
                      </div>
                    </div>
                  ) : project?.testimonial ? (
                    <div className="mt-12 p-8 bg-navy text-white rounded-lg shadow-lg relative">
                      <div className="absolute -top-5 -left-5 text-gold opacity-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                        </svg>
                      </div>

                      <blockquote className="relative z-10 text-white text-lg italic leading-relaxed mb-6">
                        {project.testimonial.quote}
                      </blockquote>

                      <div className="text-right">
                        <p className="font-semibold text-gold">{project.testimonial.author}</p>
                        <p className="text-sm text-gray-300">{project.testimonial.location}</p>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                    {isLoading ? (
                      // Skeleton for sidebar
                      <>
                        <div className="h-6 bg-gray-200 animate-pulse rounded w-1/2 mb-6"></div>
                        <div className="space-y-4 mb-8">
                          {Array(4).fill(0).map((_, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse flex-shrink-0 mt-0.5"></div>
                              <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="h-6 bg-gray-200 animate-pulse rounded w-1/2 mb-6"></div>
                        <div className="space-y-4 mb-8">
                          {Array(3).fill(0).map((_, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse flex-shrink-0 mt-0.5"></div>
                              <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100">
                          <div className="h-6 bg-gray-200 animate-pulse rounded w-1/2 mb-6"></div>
                          <div className="flex flex-wrap gap-2">
                            {Array(5).fill(0).map((_, index) => (
                              <div key={index} className="h-6 w-16 bg-gray-200 animate-pulse rounded"></div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <div className="h-10 w-full bg-gray-200 animate-pulse rounded"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        {project?.highlights && project.highlights.length > 0 && (
                          <>
                            <h3 className="text-xl font-bold text-navy mb-6">Project Highlights</h3>
                            <ul className="space-y-4 mb-8">
                              {project.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-gold"></div>
                                  </div>
                                  <span className="text-gray-700">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {project?.materials && project.materials.length > 0 && (
                          <>
                            <h3 className="text-xl font-bold text-navy mb-6">Materials Used</h3>
                            <ul className=" mb-8">
                              {project.materials.map((material, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-gold"></div>
                                  </div>
                                  <div className="text-gray-700">
                                    <PortableText value={material} />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {project?.tags && project.tags.length > 0 && (
                          <div className="pt-4 border-t border-gray-100">
                            <h3 className="text-xl font-bold text-navy mb-6">Project Tags</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, index) => (
                                <Link key={index} href={`/projects/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                                  <Badge className="bg-gray-100 hover:bg-gray-200 text-navy px-3 py-1.5 text-sm">{tag}</Badge>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <Cta />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {!isLoading && project?.relatedProjects && project.relatedProjects.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Related Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {project.relatedProjects.map((relatedProject, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg group"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                          {relatedProject.title}
                        </h3>
                        <Link
                          href={`/projects/${relatedProject.slug}`}
                          className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors"
                        >
                          View Project <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Show skeleton for related projects if still loading */}
        {isLoading && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Related Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Array(3).fill(0).map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
                    >
                      <div className="relative h-64 overflow-hidden bg-gray-200 animate-pulse"></div>
                      <div className="p-6">
                        <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <CtaFooter />
    </div>
  )
} 