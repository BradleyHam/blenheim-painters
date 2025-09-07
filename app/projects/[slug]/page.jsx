import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react"
import CtaFooter from "@/app/experimental-components/CtaFooter"
import { getProjectBySlug, getProjectSlugs } from "@/lib/markdown"
import { siteConfig } from "@/config/site-config"
import { notFound } from "next/navigation"
import ProjectDetailContent from "./ProjectDetailContent"
import Script from "next/script"
import { getProjectSchema } from "@/config/structured-data"

export const revalidate = 60 // revalidate this page every 60 seconds

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectBySlug(params.slug)
  
  // If the project doesn't exist, return 404
  if (!project) {
    notFound()
  }

  // Generate dynamic structured data from config
  const projectSchema = getProjectSchema(project, params.slug)

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