// Content Images Configuration - Blog posts and project showcase images
// These images are used in markdown content and dynamic content areas

export const contentImageConfig = {
  // ===========================================
  // BLOG POST FEATURED IMAGES
  // ===========================================
  blog: {
    // Sample blog posts in the template
    "best-paint-coastal-homes": {
      featured: "/blog/coastal-painting.jpg",
      description: "Coastal home painting tips",
      alt: "House near coast showing effects of salt air on paint"
    },
    "winter-painting-tips": {
      featured: "/blog/winter-painting.jpg", 
      description: "Winter painting techniques",
      alt: "Painter working in cold weather conditions"
    },
    "color-trends-2025": {
      featured: "/blog/color-trends-2025.jpg",
      description: "Latest interior color trends",
      alt: "Modern interior showcasing 2025 color palette trends"
    },

    // Existing blog posts (update as needed)
    "beat-winter-condensation": "/condensation.webp",
    "best-time-to-paint-house-nz": "/blog/best-time-painting.jpg",
    "cedar-weatherboard-restoration": "/blog/cedar-restoration.jpg",
    "choosing-the-right-paint-finish": "/blog/paint-finishes.jpg",
    "exterior-house-painting-guide": "/blog/exterior-guide.jpg", 
    "queenstown-winter-painting-checklist": "/blog/winter-checklist.jpg",
    "roof-painting-cost-estimate": "/blog/roof-costs.jpg",
    "roof-painting-guide": "/blog/roof-guide.jpg",
    "winter-interior-painting": "/blog/winter-interior.jpg"
  },

  // ===========================================
  // PROJECT SHOWCASE IMAGES
  // ===========================================  
  projects: {
    // Victorian Villa Restoration Project
    "victorian-villa-restoration": {
      featured: "/projects/victorian-villa-after.jpg",
      before: "/projects/victorian-villa-before.jpg",
      after: "/projects/victorian-villa-after.jpg",
      gallery: [
        "/projects/victorian-villa-process-1.jpg",
        "/projects/victorian-villa-process-2.jpg",
        "/projects/victorian-villa-detail-trim.jpg",
        "/projects/victorian-villa-color-selection.jpg"
      ],
      description: "Complete heritage villa restoration",
      alt: "Victorian villa exterior restoration showing period-accurate colors"
    },

    // Modern Home Exterior Project
    "modern-home-exterior": {
      featured: "/projects/modern-home-after.jpg", 
      before: "/projects/modern-home-before.jpg",
      after: "/projects/modern-home-after.jpg",
      gallery: [
        "/projects/modern-home-prep.jpg",
        "/projects/modern-home-color-test.jpg",
        "/projects/modern-home-detail-work.jpg",
        "/projects/modern-home-deck-staining.jpg"
      ],
      description: "Contemporary home color transformation",
      alt: "Modern home with bold architectural color scheme"
    },

    // Commercial Office Refresh
    "commercial-office-refresh": {
      featured: "/projects/commercial-office-after.jpg",
      before: "/projects/commercial-office-before.jpg", 
      after: "/projects/commercial-office-after.jpg",
      gallery: [
        "/projects/commercial-office-meeting-room.jpg",
        "/projects/commercial-office-open-plan.jpg",
        "/projects/commercial-office-branding.jpg", 
        "/projects/commercial-office-breakout-area.jpg"
      ],
      description: "Professional office space transformation",
      alt: "Modern office interior with professional color scheme"
    }
  },

  // ===========================================
  // PROJECT PORTFOLIO GALLERIES (Existing)
  // ===========================================
  portfolios: {
    // Arrowtown Exterior Projects
    arrowtownExterior: {
      folder: "/arrowtown-exterior/",
      images: [
        "exterior-repaint-1-before.jpg",
        "exterior-repaint-1-after.jpg", 
        "exterior-repaint-2-before.jpg",
        "exterior-repaint-2-after.jpg",
        "exterior-repaint-3-before.jpg", 
        "exterior-repaint-3-after.jpg",
        "exterior-repaint-4-before.jpg",
        "exterior-repaint-4-after.jpg"
      ],
      description: "Exterior weatherboard home transformations",
      location: "Arrowtown"
    },

    // Wakatipu Heights Interior
    wakatipuHeightsRepaint: {
      folder: "/wakatipu-heights-repaint/",
      images: [
        "living-room-repaint-queenstown.jpg",
        "kitchen-repaint-queenstown.jpg",
        "bedroom-repaint-queenstown.jpg", 
        "dining-room-repaint-queenstown.jpg",
        "bathoom-repaint-queenstown.jpg"
      ],
      description: "Complete interior home refresh",
      location: "Wakatipu Heights"
    },

    // Cedar Restoration Project
    millbrookCedar: {
      folder: "/milbrook-cedar/",
      images: [
        "front.webp",
        "pergola.webp", 
        "sunroom.webp",
        "alcove.webp"
      ],
      description: "Cedar weatherboard restoration",
      location: "Millbrook"
    },

    // Deck Restoration
    deckRepaint: {
      folder: "/deck-repaint/", 
      images: [
        "deck-repaint-queenstown.webp",
        "deck-sanded-fernhill.webp",
        "deck-repainted-fernhill.webp",
        "flaking-paint-on-deck-fernhill.webp"
      ],
      description: "Deck restoration and staining",
      location: "Fernhill"
    },

    // Arthur's Point Interior
    arthursPointRepaint: {
      folder: "/ap-repaint/",
      images: [
        "feature-wall.webp",
        "feature-wall-2.webp",
        "wallpaper.webp", 
        "wallpaper-2.webp",
        "bedroom-wallpaper.webp"
      ],
      description: "Feature walls and wallpaper installation",
      location: "Arthur's Point" 
    }
  },

  // ===========================================
  // SERVICE CATEGORY IMAGES
  // ===========================================
  serviceCategories: {
    interior: {
      hero: "/Interior-repaint-in-queenstown-with-views-of-lake-wakatipu.jpg",
      gallery: [
        "/interiors/interior-painting-in-queenstown.jpg",
        "/interiors/bedroom-repaint-in-arrowtown.jpg", 
        "/interiors/interior-repaint-in-lake-hayes.jpg",
        "/interiors/kitchen-repaint-at-millbrook-resort.jpg"
      ]
    },

    exterior: {
      hero: "/ldd-exterior.jpg",
      gallery: [
        "/exteriors/exterior-painting-in-queenstown.jpg",
        "/exteriors/exterior-render-repaint-queenstown.jpg",
        "/exteriors/render-walls-exterior-repaint-queenstown.jpg",
        "/exteriors/trim-painting-in-kelvin-heights.jpg"
      ]
    },

    roof: {
      hero: "/roof-painting.jpg", 
      gallery: [
        "/roof-painting/roof-in-queenstown.jpg",
        "/roof-painting/webp/roof-painted-in-queenstown.webp",
        "/roof-painting/webp/roof-painting-in-queenstown.webp",
        "/roof-painting/webp/spraying-roof.webp"
      ]
    }
  },

  // ===========================================
  // TESTIMONIAL CUSTOMER PHOTOS
  // ===========================================
  customers: {
    mikeAndLinda: "/testimonial-1.jpg",
    stephanie: "/testimonial-2.jpg", 
    roger: "/testimonial-3.jpg",
    daniel: "/placeholder-user.jpg",
    michele: "/placeholder-user.jpg",
    marianne: "/placeholder-user.jpg"
  }
}

// ===========================================
// HELPER FUNCTIONS FOR CONTENT IMAGES
// ===========================================

/**
 * Get blog post featured image
 * @param {string} slug - Blog post slug
 * @returns {string} - Image path or fallback
 */
export function getBlogImage(slug) {
  return contentImageConfig.blog[slug]?.featured || 
         contentImageConfig.blog[slug] || 
         "/blog/default-blog-image.jpg"
}

/**
 * Get project showcase images
 * @param {string} slug - Project slug  
 * @returns {object} - Object with before, after, gallery images
 */
export function getProjectImages(slug) {
  const project = contentImageConfig.projects[slug]
  if (!project) {
    return {
      featured: "/placeholder.jpg",
      before: "/placeholder.jpg", 
      after: "/placeholder.jpg",
      gallery: []
    }
  }
  
  return {
    featured: project.featured,
    before: project.before,
    after: project.after, 
    gallery: project.gallery || []
  }
}

/**
 * Get portfolio gallery images
 * @param {string} portfolioKey - Portfolio key (e.g., 'arrowtownExterior')
 * @returns {Array} - Array of full image paths
 */
export function getPortfolioImages(portfolioKey) {
  const portfolio = contentImageConfig.portfolios[portfolioKey]
  if (!portfolio) return []
  
  return portfolio.images.map(img => `${portfolio.folder}${img}`)
}

/**
 * Get service category images
 * @param {string} service - Service type ('interior', 'exterior', 'roof')
 * @returns {object} - Object with hero and gallery images
 */
export function getServiceImages(service) {
  return contentImageConfig.serviceCategories[service] || {
    hero: "/placeholder.jpg",
    gallery: []
  }
}

/**
 * Get all content images that need replacement for new location
 * @param {string} currentLocation - Current location in images (e.g., 'queenstown')
 * @param {string} newLocation - New location to replace with
 * @returns {Array} - Array of image replacement instructions
 */
export function getLocationImageReplacements(currentLocation = 'queenstown', newLocation) {
  const replacements = []
  
  // Check blog images
  Object.entries(contentImageConfig.blog).forEach(([slug, imageData]) => {
    if (typeof imageData === 'string' && imageData.includes(currentLocation)) {
      replacements.push({
        type: 'blog',
        slug,
        current: imageData,
        suggested: imageData.replace(currentLocation, newLocation),
        priority: 'medium'
      })
    }
  })
  
  // Check portfolio locations
  Object.entries(contentImageConfig.portfolios).forEach(([key, portfolio]) => {
    if (portfolio.location?.toLowerCase().includes(currentLocation)) {
      replacements.push({
        type: 'portfolio',
        key,
        location: portfolio.location,
        folder: portfolio.folder,
        imageCount: portfolio.images.length,
        priority: 'high'
      })
    }
  })
  
  return replacements
}

export default contentImageConfig