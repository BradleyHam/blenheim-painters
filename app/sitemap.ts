import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { siteConfig } from '@/config/site-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.website.replace(/\/$/, '') // Remove trailing slash
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
      url: `${baseUrl}/interior-painting-${siteConfig.townNameLower}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exterior-painting-${siteConfig.townNameLower}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roof-painting-${siteConfig.townNameLower}`,
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
    const blogDir = path.join(process.cwd(), 'content/blog')
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir)
      
      blogPages = files
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((filename) => {
          try {
            const filePath = path.join(blogDir, filename)
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
    const projectsDir = path.join(process.cwd(), 'content/projects')
    if (fs.existsSync(projectsDir)) {
      const files = fs.readdirSync(projectsDir)
      
      projectPages = files
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((filename) => {
          try {
            const filePath = path.join(projectsDir, filename)
            const md = fs.readFileSync(filePath, 'utf-8')
            const { data } = matter(md)
            
            const slug = data.slug ?? filename.replace(/\.(md|mdx)$/, '')
            const projectDate = data.completionDate ? new Date(data.completionDate) : currentDate
            
            return {
              url: `${baseUrl}/projects/${slug}`,
              lastModified: projectDate,
              changeFrequency: 'weekly' as const,
              priority: 0.8,
            }
          } catch (error) {
            console.error(`Error processing project ${filename}:`, error)
            return null
          }
        })
        .filter((page): page is NonNullable<typeof page> => page !== null)
    }
  } catch (error) {
    console.error('Failed to fetch project pages for sitemap:', error)
  }

  return [...staticPages, ...blogPages, ...projectPages]
} 