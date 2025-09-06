import { siteConfig } from '@/config/site-config'

export const serviceAreas = [
  {
    name: siteConfig.townName,
    slug: siteConfig.townNameLower,
    isPrimary: true,
    population: "15,800",
    description: `Professional painting services in ${siteConfig.townName} - our home base and primary service area.`,
    coordinates: siteConfig.coordinates,
    postcodes: [siteConfig.postalCode],
    travelTime: "0 mins",
    serviceLevel: "premium"
  },
  {
    name: "Arrowtown",
    slug: "arrowtown", 
    isPrimary: true,
    population: "2,600",
    description: "Heritage town painting services with special attention to historic character preservation.",
    coordinates: { latitude: -44.9398, longitude: 168.8287 },
    postcodes: ["9302"],
    travelTime: "20 mins",
    serviceLevel: "premium"
  },
  {
    name: "Frankton",
    slug: "frankton",
    isPrimary: false,
    population: "1,900", 
    description: "Residential and commercial painting services in the growing Frankton area.",
    coordinates: { latitude: -45.0219, longitude: 168.7398 },
    postcodes: ["9300"],
    travelTime: "15 mins",
    serviceLevel: "standard"
  },
  {
    name: "Kelvin Heights",
    slug: "kelvin-heights",
    isPrimary: false,
    population: "1,200",
    description: "Premium residential painting services in this exclusive lakefront community.",
    coordinates: { latitude: -45.0091, longitude: 168.7654 },
    postcodes: ["9300"],
    travelTime: "25 mins", 
    serviceLevel: "premium"
  },
  {
    name: "Arthur's Point",
    slug: "arthurs-point",
    isPrimary: false,
    population: "800",
    description: "Specialist exterior and interior painting for homes in this scenic mountain location.",
    coordinates: { latitude: -44.9654, longitude: 168.6987 },
    postcodes: ["9300"],
    travelTime: "20 mins",
    serviceLevel: "standard"
  },
  {
    name: "Fernhill", 
    slug: "fernhill",
    isPrimary: false,
    population: "2,100",
    description: "Quality painting services for Fernhill's mix of new and established homes.",
    coordinates: { latitude: -44.9876, longitude: 168.7321 },
    postcodes: ["9300"],
    travelTime: "10 mins",
    serviceLevel: "standard"
  },
  {
    name: "Millbrook",
    slug: "millbrook",
    isPrimary: false,
    population: "600",
    description: "High-end painting and restoration services for luxury properties and resort facilities.",
    coordinates: { latitude: -44.9123, longitude: 168.8456 },
    postcodes: ["9302"], 
    travelTime: "30 mins",
    serviceLevel: "premium"
  },
  {
    name: "Lake Hayes Estate",
    slug: "lake-hayes-estate", 
    isPrimary: false,
    population: "1,500",
    description: "Modern residential painting services for this newer development area.",
    coordinates: { latitude: -44.9567, longitude: 168.8123 },
    postcodes: ["9305"],
    travelTime: "25 mins",
    serviceLevel: "standard"
  },
  {
    name: "Shotover Country",
    slug: "shotover-country",
    isPrimary: false,
    population: "900", 
    description: "Comprehensive painting services for rural and residential properties.",
    coordinates: { latitude: -44.9789, longitude: 168.6543 },
    postcodes: ["9300"],
    travelTime: "35 mins",
    serviceLevel: "standard"
  },
  {
    name: "Wakatipu Heights", 
    slug: "wakatipu-heights",
    isPrimary: false,
    population: "1,100",
    description: "Expert painting services with stunning lake and mountain views.",
    coordinates: { latitude: -44.9321, longitude: 168.7876 },
    postcodes: ["9300"],
    travelTime: "20 mins",
    serviceLevel: "standard"
  }
]

// Helper functions
export const getPrimaryAreas = () => {
  return serviceAreas.filter(area => area.isPrimary)
}

export const getAreaBySlug = (slug) => {
  return serviceAreas.find(area => area.slug === slug)
}

export const getAreasByServiceLevel = (level) => {
  return serviceAreas.filter(area => area.serviceLevel === level)
}

export const getNearbyAreas = (centerArea, maxTravelTime = 30) => {
  return serviceAreas.filter(area => 
    area.slug !== centerArea && 
    parseInt(area.travelTime) <= maxTravelTime
  )
}

// Generate service area text for SEO
export const getServiceAreaSeoText = () => {
  const primaryAreas = getPrimaryAreas().map(area => area.name)
  const otherAreas = serviceAreas.filter(area => !area.isPrimary).map(area => area.name)
  
  return `We provide painting services throughout ${primaryAreas.join(', ')} and ${otherAreas.join(', ')}.`
}