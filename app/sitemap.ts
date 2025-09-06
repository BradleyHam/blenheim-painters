import { MetadataRoute } from 'next'
import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.littledogdecorating.co.nz'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/interior-painting-queenstown`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exterior-painting-queenstown`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roof-painting-queenstown`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // Get blog posts
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const contentDir = path.join(process.cwd(), 'content')
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir)
      
      blogPages = files
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((filename) => {
          try {
            const filePath = path.join(contentDir, filename)
            const md = fs.readFileSync(filePath, 'utf-8')
            const { data } = matter(md)
            
            const slug = data.slug ?? filename.replace(/\.(md|mdx)$/, '')
            const postDate = data.date ? new Date(data.date) : currentDate
            
            return {
              url: `${baseUrl}/blog/${slug}`,
              lastModified: postDate,
              changeFrequency: 'weekly' as const,
              priority: 0.7,
            }
          } catch (error) {
            console.error(`Error processing blog post ${filename}:`, error)
            return null
          }
        })
        .filter((page): page is NonNullable<typeof page> => page !== null)
    }
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error)
  }

  // Get project pages
  let projectPages: MetadataRoute.Sitemap = []
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
    
    if (projectId) {
      const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
      })
      
      const projects = await client.fetch(`*[_type == "project" && defined(slug.current)]{
        "slug": slug.current,
        "date": date,
        "_updatedAt": _updatedAt
      }`)
      
      projectPages = projects.map((project: any) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: project.date ? new Date(project.date) : new Date(project._updatedAt) || currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    }
  } catch (error) {
    console.error('Failed to fetch project pages for sitemap:', error)
  }

  return [...staticPages, ...blogPages, ...projectPages]
} 