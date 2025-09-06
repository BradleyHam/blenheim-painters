// Image Configuration - Update image paths for each new town/business
// This centralizes ALL image references to make site customization faster and more systematic

import { siteConfig } from './site-config'

export const imageConfig = {
  // ===========================================
  // BRANDING & IDENTITY (Critical - Must Replace)
  // ===========================================
  branding: {
    logo: {
      path: `/painters-${siteConfig.townNameLower}-logo.png`,
      description: "Main business logo",
      dimensions: "300x150px",
      usage: "Header, footer, about section",
      required: true,
      alt: "Business Logo"
    },
    favicon: {
      path: "/favicon.ico",
      description: "Browser tab icon",
      dimensions: "32x32px",
      usage: "Browser favicon",
      required: true,
      alt: "Site Icon"
    },
    ogImage: {
      path: "/interior-repaint.jpg",
      description: "Social media sharing image",
      dimensions: "400x200px",
      usage: "Facebook, Twitter, LinkedIn previews",
      required: true,
      alt: "Business Social Media Logo"
    }
  },

  // ===========================================
  // HERO SECTION (Critical - Must Replace)
  // ===========================================
  hero: {
    background: {
      path: "/hero-bg.jpg", 
      description: "Main homepage hero background",
      dimensions: "1920x1080px minimum",
      usage: "Homepage hero section background",
      required: true,
      alt: "Local landscape showcasing service area"
    },
    townscape: {
      path: "/queenstown.jpg",
      description: "Local town scenic view",
      dimensions: "1200x800px",
      usage: "About section, general marketing",
      required: true,
      alt: "Beautiful view of town and surrounding area"
    }
  },

  // ===========================================
  // ABOUT SECTION (Critical - Must Replace)
  // ===========================================
  about: {
    owner: {
      path: "/painter.png",
      description: "Business owner photo",
      dimensions: "400x400px",
      usage: "About section, testimonials, personal touch",
      required: true,
      alt: "Business owner portrait"
    },
    team: {
      path: "/painter.png",
      description: "Team or business photo",
      dimensions: "600x400px", 
      usage: "About section",
      required: false,
      alt: "Business team photo"
    },
    vehicle: {
      path: "/lakeside-van.jpeg",
      description: "Company vehicle with branding",
      dimensions: "800x600px",
      usage: "About section, contact page",
      required: false,
      alt: "Company van showing professional branding"
    }
  },

  // ===========================================
  // SERVICE PAGE HEROES
  // ===========================================
  services: {
    interior: {
      path: "/interior-painting.jpg",
      description: "Interior painting showcase",
      dimensions: "1200x800px",
      usage: "Interior service page hero",
      required: false,
      alt: "Professional interior painting work"
    },
    exterior: {
      path: "/ldd-exterior.jpg",
      description: "Exterior painting showcase", 
      dimensions: "1200x800px",
      usage: "Exterior service page hero",
      required: false,
      alt: "Professional exterior painting work"
    },
    roof: {
      path: "/roof-painting.jpg",
      description: "Roof painting showcase",
      dimensions: "1200x800px", 
      usage: "Roof painting service page hero",
      required: false,
      alt: "Professional roof painting work"
    },
    commercial: {
      path: "/commercial.jpg",
      description: "Commercial painting project",
      dimensions: "1200x800px",
      usage: "Commercial service sections",
      required: false,
      alt: "Commercial building painting project"
    }
  },

  // ===========================================
  // MAIN PROJECT PORTFOLIOS (High Priority)
  // ===========================================
  projects: {
    // Featured Exterior Project
    exteriorFeatured: {
      before: "/arrowtown-exterior/exterior-repaint-1-before.jpg",
      after: "/arrowtown-exterior/exterior-repaint-1-after.jpg", 
      details: [
        "/arrowtown-exterior/exterior-repaint-2-after.jpg",
        "/arrowtown-exterior/exterior-repaint-3-after.jpg"
      ],
      description: "Complete exterior transformation",
      location: "Local suburb name",
      alt: "Before and after exterior painting transformation"
    },

    // Featured Interior Project  
    interiorFeatured: {
      gallery: [
        "/wakatipu-heights-repaint/living-room-repaint-queenstown.jpg",
        "/wakatipu-heights-repaint/kitchen-repaint-queenstown.jpg",
        "/wakatipu-heights-repaint/bedroom-repaint-queenstown.jpg"
      ],
      description: "Complete interior refresh",
      location: "Local suburb name", 
      alt: "Professional interior painting showcase"
    },

    // Featured Cedar/Restoration Project
    cedarFeatured: {
      gallery: [
        "/milbrook-cedar/front.webp",
        "/milbrook-cedar/pergola.webp",
        "/milbrook-cedar/sunroom.webp"
      ],
      description: "Cedar restoration project", 
      location: "Local suburb name",
      alt: "Cedar weatherboard restoration work"
    }
  },

  // ===========================================
  // TESTIMONIAL IMAGES
  // ===========================================
  testimonials: {
    customer1: "/testimonial-1.jpg",
    customer2: "/testimonial-2.jpg", 
    customer3: "/testimonial-3.jpg",
    placeholder: "/placeholder-user.jpg"
  },

  // ===========================================
  // PROCESS & SERVICE IMAGES (Generic - Can Keep)
  // ===========================================
  process: {
    // Interior Process
    interiorPrep: "/services/interior/prep.png",
    interiorProtection: "/services/interior/protection.png", 
    interiorRolling: "/services/interior/rolling.png",
    interiorSpray: "/services/interior/spray.png",
    interiorCleaning: "/services/interior/cleaning.png",

    // Exterior Process
    exteriorMasking: "/services/exterior/masking.png",
    exteriorPrep: "/services/exterior/prep.png",
    exteriorProtection: "/services/exterior/protection.png",
    exteriorSweeping: "/services/exterior/sweeping.png",
    
    // Material Types (Generic)
    weatherboard: "/services/exterior/weatherboard.jpg",
    cedar: "/services/exterior/cedar.jpg",
    plaster: "/services/exterior/plaster.jpg",
    axonPanel: "/services/exterior/axon-panel.jpg"
  },

  // ===========================================
  // CERTIFICATIONS & CREDENTIALS (Update as needed)
  // ===========================================
  credentials: {
    masterPainter: "/master-painter.png",
    bcitoCert: "/bcito-cert.png",
    // Add other certifications as needed
  },

  // ===========================================
  // PLACEHOLDERS & FALLBACKS (Generic - Keep)
  // ===========================================
  placeholders: {
    general: "/placeholder.jpg",
    svg: "/placeholder.svg", 
    user: "/placeholder-user.jpg",
    logo: "/placeholder-logo.png"
  },

  // ===========================================
  // DECORATIVE ELEMENTS (Generic - Keep)
  // ===========================================
  decorative: {
    brushstroke: "/brushstroke.svg",
    dogIcon: "/dog-icon.png",
    painterIllustration: "/painter-color-consultation-illustration.png"
  }
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Get image path with fallback to placeholder
 * @param {string} imagePath - Path to the image
 * @param {string} fallback - Fallback image path
 * @returns {string} - Image path or fallback
 */
export function getImagePath(imagePath, fallback = imageConfig.placeholders.general) {
  return imagePath || fallback
}

/**
 * Get image with alt text from config
 * @param {object} imageObj - Image object from config
 * @returns {object} - Object with src and alt properties
 */
export function getImageWithAlt(imageObj) {
  if (typeof imageObj === 'string') {
    return { src: imageObj, alt: '' }
  }
  
  return {
    src: imageObj.path || imageConfig.placeholders.general,
    alt: imageObj.alt || imageObj.description || '',
    dimensions: imageObj.dimensions || null,
    required: imageObj.required || false
  }
}

/**
 * Get all required images for validation
 * @returns {Array} - Array of required image objects
 */
export function getRequiredImages() {
  const required = []
  
  function extractRequired(obj, prefix = '') {
    Object.entries(obj).forEach(([key, value]) => {
      if (value && typeof value === 'object') {
        if (value.required === true) {
          required.push({
            key: `${prefix}${key}`,
            ...value
          })
        } else if (!value.path && !value.required) {
          // Recursively check nested objects
          extractRequired(value, `${prefix}${key}.`)
        }
      }
    })
  }
  
  extractRequired(imageConfig)
  return required
}

/**
 * Get image replacement checklist for documentation
 * @returns {Array} - Array of image replacement instructions
 */
export function getImageReplacementChecklist() {
  const required = getRequiredImages()
  return required.map(img => ({
    file: img.path,
    description: img.description,
    dimensions: img.dimensions,
    usage: img.usage,
    priority: img.required ? 'CRITICAL' : 'Optional'
  }))
}

export default imageConfig