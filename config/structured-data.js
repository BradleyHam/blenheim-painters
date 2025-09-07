import { siteConfig, getServiceAreasText } from './site-config.js'

/**
 * Structured Data Utilities for Dynamic Schema.org Generation
 * All schemas are generated from siteConfig to make the template reusable
 */

/**
 * Get the main LocalBusiness schema for the company
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "alternateName": siteConfig.businessNameAlt,
    "url": siteConfig.website,
    "logo": `${siteConfig.website}${siteConfig.seoDefaults.ogImage}`,
    "image": `${siteConfig.website}${siteConfig.seoDefaults.ogImage}`,
    "description": `Professional painting and decorating services in ${siteConfig.townName} and ${getServiceAreasText()}. We specialize in interior, exterior, and roof painting for residential properties.`,
    "telephone": siteConfig.phoneNumber,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.region,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.coordinates.latitude,
      "longitude": siteConfig.coordinates.longitude
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.coordinates.latitude,
        "longitude": siteConfig.coordinates.longitude
      },
      "geoRadius": `${siteConfig.serviceRadius}000` // Convert km to meters for schema.org
    },
    "openingHoursSpecification": getOpeningHours(),
    "sameAs": Object.values(siteConfig.social).filter(Boolean),
    "priceRange": siteConfig.priceRange,
    ...(siteConfig.averageRating && siteConfig.reviewCount && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": siteConfig.averageRating,
        "reviewCount": siteConfig.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      }
    }),
    ...(siteConfig.gstNumber && { "taxID": siteConfig.gstNumber }),
    ...(siteConfig.yearsInBusiness && { 
      "foundingDate": new Date().getFullYear() - siteConfig.yearsInBusiness 
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": siteConfig.services.primary.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "url": `${siteConfig.website}${getServiceUrl(service)}`
        }
      }))
    }
  }
}

/**
 * Get Website schema
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.businessName,
    "url": siteConfig.website,
    "description": `Professional painters in ${siteConfig.townName} and ${getServiceAreasText()}, offering interior, exterior, and roof painting services.`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.website}search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
}

/**
 * Get Service schema for specific service pages
 */
export function getServiceSchema(serviceType) {

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": {
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
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.coordinates.latitude,
        "longitude": siteConfig.coordinates.longitude
      },
      "geoRadius": `${siteConfig.serviceRadius}000`
    },
    "url": `${siteConfig.website}${getServiceUrl(serviceType)}`,
    "description": siteConfig.serviceDescriptions[serviceType] || `Professional ${serviceType.toLowerCase()} services in ${siteConfig.townName} and surrounding areas.`
  }
}

/**
 * Get HowTo schema for service processes
 */
export function getHowToSchema(serviceType) {
  const howToData = {
    "Interior Painting": {
      name: `Our Professional Interior Painting Process in ${siteConfig.townName}`,
      description: "Four-step method we follow to prepare and paint your interior for a flawless finish.",
      image: `${siteConfig.website}interior-${siteConfig.townNameLower}.jpeg`,
      totalTime: "PT4H",
      supply: [
        { "@type": "HowToSupply", "name": "Premium interior paint" },
        { "@type": "HowToSupply", "name": "Wall fillers and primers" }
      ],
      tool: [
        { "@type": "HowToTool", "name": "Professional paint rollers and brushes" },
        { "@type": "HowToTool", "name": "Spray equipment" }
      ],
      steps: [
        {
          "@type": "HowToStep",
          "name": "Furniture and Floor Protection",
          "text": "We carefully move and cover all furniture and floors to protect your belongings during the painting process."
        },
        {
          "@type": "HowToStep", 
          "name": "Surface Preparation",
          "text": "We fill cracks, smooth surfaces, scrape off old paint, apply primer if needed, and sand everything for a perfect finish."
        },
        {
          "@type": "HowToStep",
          "name": "Paint Application", 
          "text": "We apply premium paints using your choice of brush and roll or spray techniques to achieve a flawless finish."
        },
        {
          "@type": "HowToStep",
          "name": "Cleanup and Finishing",
          "text": "We remove all protective coverings, dust and vacuum the area, and return all furniture to its original position."
        }
      ]
    },
    "Exterior Painting": {
      name: `Our Professional Exterior Painting Process in ${siteConfig.townName}`,
      description: "Comprehensive method for preparing and painting your home's exterior for lasting protection.",
      image: `${siteConfig.website}exterior-${siteConfig.townNameLower}.jpeg`,
      totalTime: "PT8H",
      supply: [
        { "@type": "HowToSupply", "name": "Weather-resistant exterior paint" },
        { "@type": "HowToSupply", "name": "Primers and surface treatments" }
      ],
      tool: [
        { "@type": "HowToTool", "name": "Pressure washing equipment" },
        { "@type": "HowToTool", "name": "Professional spray systems" }
      ],
      steps: [
        {
          "@type": "HowToStep",
          "name": "Surface Inspection and Preparation",
          "text": "We thoroughly inspect your home's exterior, pressure wash surfaces, and repair any damage before painting."
        },
        {
          "@type": "HowToStep",
          "name": "Priming and Base Preparation", 
          "text": "We apply appropriate primers and base coats to ensure optimal paint adhesion and longevity."
        },
        {
          "@type": "HowToStep",
          "name": "Paint Application",
          "text": "We apply premium exterior paints using professional techniques for even coverage and weather protection."
        },
        {
          "@type": "HowToStep",
          "name": "Quality Inspection",
          "text": "We conduct a thorough quality check and cleanup, ensuring your property looks perfect and is protected."
        }
      ]
    },
    "Roof Painting": {
      name: `Our Professional Roof Painting Process in ${siteConfig.townName}`,
      description: "Four-step method we follow to clean, prepare and coat your roof for long-lasting protection.",
      image: `${siteConfig.website}roof-painting-${siteConfig.townNameLower}.jpeg`,
      totalTime: "PT6H",
      supply: [
        { "@type": "HowToSupply", "name": "Premium roof coating" },
        { "@type": "HowToSupply", "name": "Rust conversion primer" }
      ],
      tool: [
        { "@type": "HowToTool", "name": "Airless spray gun" },
        { "@type": "HowToTool", "name": "Safety harness and scaffolding" }
      ],
      steps: [
        {
          "@type": "HowToStep",
          "name": "Safety-First Infrastructure",
          "text": "We install professional-grade scaffolding and fall-arrest systems so our technicians can work safely on every section of your roof."
        },
        {
          "@type": "HowToStep",
          "name": "Advanced Surface Preparation", 
          "text": "We pressure-wash, treat biological growth, and mechanically abrade the surface to ensure maximum coating adhesion."
        },
        {
          "@type": "HowToStep",
          "name": "Targeted Remediation",
          "text": "Rust-conversion primers and elastomeric fillers are used to fix localised deterioration before coating."
        },
        {
          "@type": "HowToStep",
          "name": "Precision Application System",
          "text": "Computer-controlled spraying equipment lays down the coating at calibrated thickness for complete coverage."
        }
      ]
    }
  }

  const data = howToData[serviceType]
  if (!data) return null

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": data.name,
    "description": data.description,
    "image": [data.image],
    "totalTime": data.totalTime,
    "supply": data.supply,
    "tool": data.tool,
    "step": data.steps
  }
}

/**
 * Get Article/BlogPosting schema for blog posts
 */
export function getArticleSchema(title, description, slug, publishDate, modifiedDate, author = siteConfig.ownerName, tags = [], coverImage = null) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting", 
    "headline": title,
    "description": description,
    "image": coverImage,
    "url": `${siteConfig.website}blog/${slug}`,
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.website}${siteConfig.seoDefaults.ogImage}`
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.region,
        "postalCode": siteConfig.address.postalCode,
        "addressCountry": siteConfig.address.country
      },
      "telephone": siteConfig.phoneNumber,
      "email": siteConfig.email,
      "url": siteConfig.website,
      "sameAs": Object.values(siteConfig.social).filter(Boolean)
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.website}blog/${slug}`
    },
    "keywords": tags.join(', ')
  }
}

/**
 * Get Breadcrumb schema
 */
export function getBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteConfig.website}${crumb.url}`
    }))
  }
}

/**
 * Get FAQPage schema
 */
export function getFAQPageSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

/**
 * Get Review schema for testimonials
 */
export function getAggregateRatingSchema(reviews) {
  const ratings = reviews.filter(r => r.rating).map(r => r.rating)
  if (ratings.length === 0) return null

  const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": ratings.length,
      "bestRating": 5,
      "worstRating": 1
    }
  }
}

/**
 * Get individual Review schema
 */
export function getReviewSchema(review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewBody": review.content,
    "reviewRating": review.rating ? {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    } : undefined,
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.region,
        "addressCountry": siteConfig.address.country
      }
    }
  }
}

/**
 * Get Project/Article schema for project pages
 */
export function getProjectSchema(project, slug) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "image": project.mainImage,
    "datePublished": project.date,
    "author": {
      "@type": "Organization",
      "name": siteConfig.businessName
    },
    "publisher": {
      "@type": "Organization", 
      "name": siteConfig.businessName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.website}${siteConfig.seoDefaults.ogImage}`
      }
    },
    "description": project.description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.website}projects/${slug}`
    },
    "about": {
      "@type": "Service",
      "serviceType": project.categories?.map(cat => cat.title).join(', ') || "Painting Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": siteConfig.businessName,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "addressRegion": siteConfig.address.region,
          "postalCode": siteConfig.address.postalCode,
          "addressCountry": siteConfig.address.country
        },
        "telephone": siteConfig.phoneNumber
      }
    }
  }

  // If the project has before/after images, add them to the schema
  if (project.images?.before?.length > 0 && project.images?.after?.length > 0) {
    projectSchema.image = [
      ...project.images.before.map(img => img.src),
      ...project.images.after.map(img => img.src)
    ]
  }

  return projectSchema
}

/**
 * Get Contact Page schema
 */
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage", 
    "name": `${siteConfig.businessName} Contact Page`,
    "description": `Get in touch with ${siteConfig.businessName} for your painting needs in ${siteConfig.townName} and ${getServiceAreasText()}.`,
    "url": `${siteConfig.website}contact`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "image": `${siteConfig.website}${siteConfig.seoDefaults.ogImage}`,
      "telephone": siteConfig.phoneNumber,
      "email": siteConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.region,
        "postalCode": siteConfig.address.postalCode,
        "addressCountry": siteConfig.address.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.coordinates.latitude,
        "longitude": siteConfig.coordinates.longitude
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": siteConfig.coordinates.latitude,
          "longitude": siteConfig.coordinates.longitude
        },
        "geoRadius": `${siteConfig.serviceRadius}000`
      },
      "openingHoursSpecification": getOpeningHours(),
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": siteConfig.phoneNumber,
        "email": siteConfig.email,
        "availableLanguage": "English"
      }
    }
  }
}

/**
 * Helper function to generate opening hours from siteConfig
 */
function getOpeningHours() {
  const dayMap = {
    monday: 'Monday',
    tuesday: 'Tuesday', 
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  }

  const openingHours = []
  
  Object.entries(siteConfig.businessHours).forEach(([day, hours]) => {
    if (hours && hours.open && hours.close) {
      openingHours.push({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": dayMap[day],
        "opens": hours.open,
        "closes": hours.close
      })
    }
  })

  return openingHours
}

/**
 * Helper function to generate service URLs
 */
function getServiceUrl(serviceName) {
  const urlMap = {
    "Interior Painting": `interior-painting-${siteConfig.townNameLower}`,
    "Exterior Painting": `exterior-painting-${siteConfig.townNameLower}`,
    "Roof Painting": `roof-painting-${siteConfig.townNameLower}`
  }
  return urlMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, '-')
}