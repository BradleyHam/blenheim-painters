import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author?: string
  tags?: string[]
  featured?: boolean
  image?: string
  readingTime?: string
  category?: string
}

export interface Project {
  slug: string
  title: string
  description: string
  content: string
  images: string[]
  services: string[]
  location: string
  completionDate: string
  featured?: boolean
  beforeImage?: string
  afterImage?: string
  clientTestimonial?: string
}

export async function mdToHtml(md: string) {
  return (
    await remark()
      .use(gfm)
      .use(html, { sanitize: false })
      .process(md)
  ).toString();
}

// Blog functions
export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDirectory = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(blogDirectory)
  const posts = await Promise.all(
    filenames
      .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(async (filename) => {
        const slug = filename.replace(/\.(md|mdx)$/, '')
        const post = await getBlogPostBySlug(slug)
        return post
      })
      .filter(Boolean) as Promise<BlogPost>[]
  )

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const blogDirectory = path.join(contentDirectory, 'blog')
    let fullPath = path.join(blogDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      // Try .mdx extension
      fullPath = path.join(blogDirectory, `${slug}.mdx`)
      if (!fs.existsSync(fullPath)) {
        return null
      }
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown content
    const contentHtml = await mdToHtml(content)
    
    // Calculate reading time
    const readingTimeResult = readingTime(content)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || content.slice(0, 160) + '...',
      content: contentHtml,
      author: data.author,
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image,
      readingTime: readingTimeResult.text,
      category: data.category
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getBlogPostSlugs(): string[] {
  const blogDirectory = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  return fs.readdirSync(blogDirectory)
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((name) => name.replace(/\.(md|mdx)$/, ''))
}

// Project functions
export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(projectsDirectory)
  const projects = await Promise.all(
    filenames
      .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(async (filename) => {
        const slug = filename.replace(/\.(md|mdx)$/, '')
        const project = await getProjectBySlug(slug)
        return project
      })
      .filter(Boolean) as Promise<Project>[]
  )

  // Sort projects by completion date (newest first)
  return projects.sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const projectsDirectory = path.join(contentDirectory, 'projects')
    let fullPath = path.join(projectsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      // Try .mdx extension
      fullPath = path.join(projectsDirectory, `${slug}.mdx`)
      if (!fs.existsSync(fullPath)) {
        return null
      }
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown content
    const contentHtml = await mdToHtml(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      content: contentHtml,
      images: data.images || [],
      services: data.services || [],
      location: data.location || '',
      completionDate: data.completionDate || '',
      featured: data.featured || false,
      beforeImage: data.beforeImage,
      afterImage: data.afterImage,
      clientTestimonial: data.clientTestimonial
    }
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return null
  }
}

export function getProjectSlugs(): string[] {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  return fs.readdirSync(projectsDirectory)
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((name) => name.replace(/\.(md|mdx)$/, ''))
}

// Featured content functions
export async function getFeaturedPosts(count: number = 3): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts()
  return allPosts.filter(post => post.featured).slice(0, count)
}

export async function getFeaturedProjects(count: number = 3): Promise<Project[]> {
  const allProjects = await getProjects()
  return allProjects.filter(project => project.featured).slice(0, count)
}

export async function getRecentPosts(count: number = 6): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts()
  return allPosts.slice(0, count)
}

export async function getRecentProjects(count: number = 6): Promise<Project[]> {
  const allProjects = await getProjects()
  return allProjects.slice(0, count)
}

// Compatibility function for existing Sanity calls
export async function getFeaturedAndRecentProjects() {
  const featured = await getFeaturedProjects()
  const recent = await getRecentProjects()
  
  // Combine and deduplicate
  const combined = [...featured]
  recent.forEach(project => {
    if (!combined.find(p => p.slug === project.slug)) {
      combined.push(project)
    }
  })
  
  return combined.slice(0, 6)
}