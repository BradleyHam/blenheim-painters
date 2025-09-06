import { getAllProjects, getFeaturedProject } from "@/sanity/lib/api"
import ProjectsContent from "./ProjectsContent"
import Script from "next/script"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function ProjectsPage() {
  const featuredProject = await getFeaturedProject()
  const projects = await getAllProjects()
  
  // Filter out the featured project if it exists
  const recentProjects = featuredProject 
    ? projects.filter(project => project._id !== featuredProject._id)
    : projects

  // Prepare structured data
  const projectListItems = [...(featuredProject ? [featuredProject] : []), ...recentProjects].map(project => ({
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.mainImage || "https://www.littledogdecorating.co.nz/placeholder.svg",
    "datePublished": project.date,
    "url": `https://www.littledogdecorating.co.nz/projects/${project.slug}`
  }));

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Little Dog Decorating - Painting Projects Portfolio",
    "description": "Browse our collection of painting and decorating projects in Queenstown and Arrowtown, showcasing our professional workmanship and attention to detail.",
    "url": "https://www.littledogdecorating.co.nz/projects",
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
      "name": "Little Dog Decorating",
      "image": "https://www.littledogdecorating.co.nz/little-dog-decorating-logo--queenstown-painter.webp",
      "telephone": "+64 21 632 938",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "31 Marston Road",
        "addressLocality": "Queenstown",
        "addressRegion": "Otago",
        "postalCode": "9304",
        "addressCountry": "New Zealand"
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

