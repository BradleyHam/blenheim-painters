import { getFeaturedProjects, getProjects } from "@/lib/markdown"
import { siteConfig } from "@/config/site-config"
import ProjectsContent from "./ProjectsContent"
import Script from "next/script"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function ProjectsPage() {
  const allProjects = await getProjects()
  const featuredProject = allProjects.find(p => p.featured) || null
  
  // Filter out the featured project if it exists
  const recentProjects = featuredProject 
    ? allProjects.filter(project => project.slug !== featuredProject.slug)
    : allProjects

  // Prepare structured data
  const projectListItems = [...(featuredProject ? [featuredProject] : []), ...recentProjects].map(project => ({
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.images?.[0] || `${siteConfig.website}placeholder.svg`,
    "datePublished": project.completionDate,
    "url": `${siteConfig.website}projects/${project.slug}`
  }));

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${siteConfig.businessName} - Painting Projects Portfolio`,
    "description": `Browse our collection of painting and decorating projects in ${siteConfig.townName} and surrounding areas, showcasing our professional workmanship and attention to detail.`,
    "url": `${siteConfig.website}projects`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projectListItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": item
      })),
      "numberOfItems": projectListItems.length
    },
    "about": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "image": `${siteConfig.website}${siteConfig.seoDefaults.ogImage}`,
      "telephone": siteConfig.phoneNumber,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.region,
        "postalCode": siteConfig.address.postalCode,
        "addressCountry": siteConfig.address.country
      }
    }
  };

  return (
    <>
      <Script
        id="structured-data-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      
      <ProjectsContent 
        featuredProject={featuredProject} 
        recentProjects={recentProjects} 
      />
    </>
  )
}

