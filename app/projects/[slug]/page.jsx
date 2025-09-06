import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react"
import CtaFooter from "@/app/experimental-components/CtaFooter"
import { getProjectBySlug, getAllProjectPaths } from "@/sanity/lib/api"
import { notFound } from "next/navigation"
import ProjectDetailContent from "./ProjectDetailContent"
import Script from "next/script"

export const revalidate = 60 // revalidate this page every 60 seconds

// Generate static params for all projects
export async function generateStaticParams() {
  const paths = await getAllProjectPaths()
  return paths
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectBySlug(params.slug)
  
  // If the project doesn't exist, return 404
  if (!project) {
    notFound()
  }

  // Create structured data for the project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "image": project.mainImage,
    "datePublished": project.date,
    "author": {
      "@type": "Organization",
      "name": "Little Dog Decorating"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Little Dog Decorating",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.littledogdecorating.co.nz/little-dog-decorating-logo--queenstown-painter.webp"
      }
    },
    "description": project.description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.littledogdecorating.co.nz/projects/${params.slug}`
    },
    "about": {
      "@type": "Service",
      "serviceType": project.categories?.map(cat => cat.title).join(', ') || "Painting Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Little Dog Decorating",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "31 Marston Road",
          "addressLocality": "Queenstown",
          "addressRegion": "Otago",
          "postalCode": "9304",
          "addressCountry": "New Zealand"
        },
        "telephone": "+64 21 632 938"
      }
    }
  };

  // If the project has before/after images, add them to the schema
  if (project.images?.before?.length > 0 && project.images?.after?.length > 0) {
    projectSchema.image = [
      ...project.images.before.map(img => img.src),
      ...project.images.after.map(img => img.src)
    ];
  }

  return (
    <>
      <Script
        id="structured-data-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      
      <ProjectDetailContent project={project} />
    </>
  )
} 