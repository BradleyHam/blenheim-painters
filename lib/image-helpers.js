// Image Helper Functions and Validation
// These functions help validate and manage images across the template

import { imageConfig, getRequiredImages } from '@/config/images'
import { contentImageConfig } from '@/config/content-images'
import { existsSync } from 'fs'
import { join } from 'path'

/**
 * Validates that all required images exist in the public directory
 * @returns {Object} - Validation results with missing images
 */
export function validateRequiredImages() {
  const requiredImages = getRequiredImages()
  const publicPath = join(process.cwd(), 'public')
  const results = {
    valid: true,
    missing: [],
    found: [],
    total: requiredImages.length
  }

  requiredImages.forEach(img => {
    const imagePath = join(publicPath, img.path)
    
    if (existsSync(imagePath)) {
      results.found.push({
        key: img.key,
        path: img.path,
        description: img.description
      })
    } else {
      results.missing.push({
        key: img.key,
        path: img.path,
        description: img.description,
        priority: 'CRITICAL'
      })
      results.valid = false
    }
  })

  return results
}

/**
 * Get image replacement checklist for new location setup
 * @param {string} oldLocation - Current location in filenames (e.g., 'queenstown')
 * @param {string} newLocation - New location to replace with
 * @returns {Array} - Array of image replacement instructions
 */
export function getImageReplacementChecklist(oldLocation = 'queenstown', newLocation) {
  const checklist = []

  // Critical branding images (must be replaced)
  checklist.push({
    category: 'Branding (CRITICAL)',
    priority: 'CRITICAL',
    items: [
      {
        current: imageConfig.branding.logo.path,
        description: 'Business logo - replace with new business logo',
        dimensions: imageConfig.branding.logo.dimensions,
        usage: imageConfig.branding.logo.usage
      },
      {
        current: imageConfig.branding.logoCompressed.path,
        description: 'Compressed logo - create compressed version of new logo',
        dimensions: imageConfig.branding.logoCompressed.dimensions,
        usage: imageConfig.branding.logoCompressed.usage
      },
      {
        current: imageConfig.branding.ogImage.path,
        description: 'Social media logo - update for new business',
        dimensions: imageConfig.branding.ogImage.dimensions,
        usage: imageConfig.branding.ogImage.usage
      }
    ]
  })

  // Hero and about images (must be replaced)
  checklist.push({
    category: 'Hero & About (CRITICAL)',
    priority: 'CRITICAL',
    items: [
      {
        current: imageConfig.hero.townscape.path,
        suggested: imageConfig.hero.townscape.path.replace(oldLocation, newLocation),
        description: 'Local town scenic view',
        dimensions: imageConfig.hero.townscape.dimensions,
        usage: imageConfig.hero.townscape.usage
      },
      {
        current: imageConfig.about.owner.path,
        description: 'Business owner photo - replace with new owner',
        dimensions: imageConfig.about.owner.dimensions,
        usage: imageConfig.about.owner.usage
      }
    ]
  })

  // Project portfolio images (should be replaced)
  checklist.push({
    category: 'Project Portfolio (HIGH PRIORITY)',
    priority: 'HIGH',
    items: [
      {
        current: 'All project images in /arrowtown-exterior/',
        suggested: `/exterior-${newLocation}/`,
        description: 'Replace with local projects from new location',
        usage: 'Portfolio showcases and before/after galleries'
      },
      {
        current: 'All project images in /wakatipu-heights-repaint/',
        suggested: `/interior-${newLocation}/`,
        description: 'Replace with local interior projects',
        usage: 'Interior project showcases'
      }
    ]
  })

  return checklist
}

/**
 * Get all images that reference a specific location
 * @param {string} location - Location to search for (e.g., 'queenstown')
 * @returns {Array} - Array of images that reference the location
 */
export function findLocationSpecificImages(location) {
  const locationImages = []
  
  // Check all image config paths
  function searchImageConfig(obj, prefix = '') {
    Object.entries(obj).forEach(([key, value]) => {
      if (value && typeof value === 'object') {
        if (value.path && typeof value.path === 'string') {
          if (value.path.toLowerCase().includes(location.toLowerCase())) {
            locationImages.push({
              config: `${prefix}${key}`,
              path: value.path,
              description: value.description || value.alt || '',
              category: prefix.replace('.', '')
            })
          }
        } else {
          searchImageConfig(value, `${prefix}${key}.`)
        }
      }
    })
  }

  searchImageConfig(imageConfig)
  searchImageConfig(contentImageConfig, 'content.')

  return locationImages
}

/**
 * Generate image optimization recommendations
 * @returns {Array} - Array of optimization suggestions
 */
export function getImageOptimizationRecommendations() {
  return [
    {
      category: 'File Formats',
      recommendations: [
        'Use WebP format for hero images (better compression)',
        'Use PNG for logos and graphics with transparency',
        'Use JPG for photographs and complex images',
        'Convert large images to WebP with JPG fallback'
      ]
    },
    {
      category: 'File Sizes',
      recommendations: [
        'Hero images: Optimize to under 200KB while maintaining quality',
        'Logo files: Keep under 50KB for fast loading',
        'Project gallery images: Optimize to 100-150KB each',
        'Thumbnail images: Keep under 30KB'
      ]
    },
    {
      category: 'Dimensions',
      recommendations: [
        'Hero backgrounds: 1920x1080px minimum for desktop',
        'Project showcase images: 1200x800px recommended',
        'Logo: Create versions at 300x150px and 150x75px',
        'Social media (OG) images: 1200x630px'
      ]
    }
  ]
}

/**
 * Create a setup checklist for new locations
 * @param {string} newLocation - New location name
 * @param {string} businessName - New business name
 * @returns {Object} - Complete setup checklist
 */
export function createSetupChecklist(newLocation, businessName) {
  const checklist = {
    critical: [],
    high: [],
    medium: [],
    optional: []
  }

  // Critical tasks
  checklist.critical.push(
    `Replace logo files with ${businessName} branding`,
    `Update owner photo in ${imageConfig.about.owner.path}`,
    `Add town scenic photo for ${newLocation}`,
    'Update favicon and social media images',
    'Replace vehicle photo with company-branded vehicle'
  )

  // High priority tasks
  checklist.high.push(
    `Collect 8-10 project photos from ${newLocation} area`,
    'Take before/after photos of recent projects',
    'Create project gallery folders for local work',
    'Replace service page hero images with local examples'
  )

  // Medium priority tasks
  checklist.medium.push(
    'Add customer testimonial photos',
    'Create location-specific blog post images',
    'Update process illustration images if needed'
  )

  // Optional tasks
  checklist.optional.push(
    'Create custom illustrations for services',
    'Add seasonal/weather-specific images',
    'Create branded social media templates'
  )

  return checklist
}

export default {
  validateRequiredImages,
  getImageReplacementChecklist,
  findLocationSpecificImages,
  getImageOptimizationRecommendations,
  createSetupChecklist
}