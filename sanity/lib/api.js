import { client } from './client'
import { urlForImage } from './image'
import { 
  allProjectsQuery, 
  featuredProjectQuery, 
  projectBySlugQuery, 
  projectPathsQuery,
  interiorProjectsQuery,
  exteriorProjectsQuery,
  roofProjectsQuery,
  recentProjectsQuery
} from './queries'

// Format project data to match your frontend format
const formatProjectForFrontend = (project) => {
  if (!project) return null
  // Format images for frontend
  const formatImages = (images) => 
    images ? images.map(img => ({
      ...img,
      // Convert Sanity image URLs to strings
      src: img.src || urlForImage(img.image).url(),
      alt: img.alt || '',
      caption: img.caption || ''
    })) : []

  return {
    ...project,
    slug: project.slug?.current || '',
    // Format main image
    mainImage: project.mainImage ? urlForImage(project.mainImage).url() : '',
    // Format before and after images
    beforeImages: formatImages(project.beforeImages),
    afterImages: formatImages(project.afterImages),
    // Format related projects
    relatedProjects: project.relatedProjects ? project.relatedProjects.map(p => ({
      ...p,
      slug: p.slug?.current || '',
      image: p.image || ''
    })) : [],
    // Create images object that matches the structure used in the frontend
    images: {
      before: formatImages(project.beforeImages),
      after: formatImages(project.afterImages)
    }
  }
}

export async function getAllProjects() {
  try {
    const data = await client.fetch(allProjectsQuery)
    return data.map(project => ({
      ...project,
      slug: project.slug?.current || '',
      mainImage: project.mainImage ? urlForImage(project.mainImage).url() : ''
    }))
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}

export async function getFeaturedProject() {
  try {
    const project = await client.fetch(featuredProjectQuery)
    return project ? {
      ...project,
      slug: project.slug?.current || '',
      mainImage: project.mainImage ? urlForImage(project.mainImage).url() : ''
    } : null
  } catch (error) {
    console.error('Failed to fetch featured project:', error)
    return null
  }
}

export async function getProjectBySlug(slug) {
  try {
    const project = await client.fetch(projectBySlugQuery, { slug })
    return formatProjectForFrontend(project)
  } catch (error) {
    console.error('Failed to fetch project by slug:', error)
    return null
  }
}

export async function getAllProjectPaths() {
  try {
    const paths = await client.fetch(projectPathsQuery)
    return paths.map(slug => ({ params: { slug } }))
  } catch (error) {
    console.error('Failed to fetch project paths:', error)
    return []
  }
}

// New functions to get projects by type
export async function getInteriorProjects() {
  try {
    const data = await client.fetch(interiorProjectsQuery)
    return data.map(project => ({
      ...project,
      slug: project.slug?.current || '',
      mainImage: project.mainImage ? urlForImage(project.mainImage).url() : ''
    }))
  } catch (error) {
    console.error('Failed to fetch interior projects:', error)
    return []
  }
}

export async function getExteriorProjects() {
  try {
    const data = await client.fetch(exteriorProjectsQuery)
    return data.map(project => ({
      ...project,
      slug: project.slug?.current || '',
      mainImage: project.mainImage ? urlForImage(project.mainImage).url() : ''
    }))
  } catch (error) {
    console.error('Failed to fetch exterior projects:', error)
    return []
  }
}

export async function getRoofProjects() {
  try {
    const data = await client.fetch(roofProjectsQuery)
    return data.map(project => ({
      ...project,
      slug: project.slug?.current || '',
      mainImage: project.mainImage ? urlForImage(project.mainImage).url() : '',
      url: `/projects/${project.slug?.current || ''}`
    }))
  } catch (error) {
    console.error('Failed to fetch roof projects:', error)
    return []
  }
}

export async function getRecentProjects() {
  try {
    const data = await client.fetch(recentProjectsQuery)
    return data.map(project => ({
      ...project,
      slug: project.slug?.current || '',
      mainImage: project.mainImage ? urlForImage(project.mainImage).url() : ''
    }))
  } catch (error) {
    console.error('Failed to fetch recent projects:', error)
    return []
  }
}

// New function to get featured project and recent projects together
export async function getFeaturedAndRecentProjects() {
  // Get the featured project
  const featured = await getFeaturedProject();
  
  // Get recent projects
  const recent = await getRecentProjects();
  
  // If there's a featured project, ensure it's not duplicated
  const filteredRecent = featured 
    ? recent.filter(project => project._id !== featured._id) 
    : recent;
  
  // Create a combined array with featured project first, followed by other recent projects
  // Limited to 3 total projects
  const combined = featured 
    ? [featured, ...filteredRecent] 
    : filteredRecent;
  
  return combined.slice(0, 3);
} 