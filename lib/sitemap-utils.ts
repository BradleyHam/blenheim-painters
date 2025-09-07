import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createClient } from 'next-sanity'
import { siteConfig } from '@/config/site-config'

export interface SitemapEntry {
  url: string
  lastModified: string
  priority: string
  changeFreq: string
}

export async function getAllPages(): Promise<SitemapEntry[]> {
  const currentDate = new Date().toISOString()
  
  // Static pages using dynamic URLs from siteConfig
  const staticPages: SitemapEntry[] = [
    { url: '/', lastModified: currentDate, priority: '1.0', changeFreq: 'weekly' },
    { url: `/interior-painting-${siteConfig.townNameLower}`, lastModified: currentDate, priority: '0.9', changeFreq: 'weekly' },
    { url: `/exterior-painting-${siteConfig.townNameLower}`, lastModified: currentDate, priority: '0.9', changeFreq: 'weekly' },
    { url: `/roof-painting-${siteConfig.townNameLower}`, lastModified: currentDate, priority: '0.9', changeFreq: 'weekly' },
    { url: '/projects', lastModified: currentDate, priority: '0.8', changeFreq: 'weekly' },
    { url: '/blog', lastModified: currentDate, priority: '0.8', changeFreq: 'weekly' },
    { url: '/testimonials', lastModified: currentDate, priority: '0.7', changeFreq: 'weekly' },
    { url: '/contact', lastModified: currentDate, priority: '0.6', changeFreq: 'weekly' },
  ]

  // Get blog pages
  const blogPages = await getBlogPages()
  
  // Get project pages  
  const projectPages = await getProjectPages()

  return [...staticPages, ...blogPages, ...projectPages]
}

export async function getBlogPages(): Promise<SitemapEntry[]> {
  const pages: SitemapEntry[] = []
  
  try {
    const contentDir = path.join(process.cwd(), 'content')
    if (!fs.existsSync(contentDir)) {
      return pages
    }

    const files = fs.readdirSync(contentDir)
    
    for (const filename of files) {
      if (!filename.endsWith('.md') && !filename.endsWith('.mdx')) {
        continue
      }

      try {
        const filePath = path.join(contentDir, filename)
        const md = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(md)
        
        const slug = data.slug ?? filename.replace(/\.(md|mdx)$/, '')
        const postDate = data.date ? new Date(data.date).toISOString() : new Date().toISOString()
        
        pages.push({
          url: `/blog/${slug}`,
          lastModified: postDate,
          priority: '0.7',
          changeFreq: 'weekly'
        })
      } catch (error) {
        console.error(`Error processing blog post ${filename}:`, error)
      }
    }
  } catch (error) {
    console.error('Failed to get blog pages:', error)
  }

  return pages
}

export async function getProjectPages(): Promise<SitemapEntry[]> {
  const pages: SitemapEntry[] = []
  
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
    
    if (!projectId) {
      console.warn('Sanity project ID not found')
      return pages
    }

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
    
    for (const project of projects) {
      const lastModified = project.date || project._updatedAt || new Date().toISOString()
      
      pages.push({
        url: `/projects/${project.slug}`,
        lastModified: new Date(lastModified).toISOString(),
        priority: '0.8',
        changeFreq: 'weekly'
      })
    }
  } catch (error) {
    console.error('Failed to get project pages:', error)
  }

  return pages
}

export function generateSitemapXml(pages: SitemapEntry[]): string {
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${siteConfig.website}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`
}

export async function validatePage(url: string): Promise<boolean> {
  // You can add page validation logic here
  // For example, check if the page actually exists
  try {
    // This is just a basic validation - you might want to add more sophisticated checks
    return url.startsWith('/') && url.length > 1
  } catch (error) {
    console.error(`Error validating page ${url}:`, error)
    return false
  }
}

// Function to trigger sitemap regeneration
export async function regenerateSitemap(): Promise<void> {
  try {
    // In a real-world scenario, you might want to trigger ISR or webhook here
    console.log('Sitemap will be regenerated on next request due to caching')
  } catch (error) {
    console.error('Error triggering sitemap regeneration:', error)
  }
} 