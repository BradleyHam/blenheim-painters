// Site Configuration - Update these values for each new town/business
export const siteConfig = {
  // Business Information
  businessName: "Business Name",
  businessNameAlt: "Business Name", // Alternative/longer business name
  ownerName: "Owner Name",
  
  // Location Details
  townName: "Wanaka",
  townNameLower: "wanaka",
  region: "Otago",
  postalCode: "9304",
  country: "New Zealand",
  
  // Contact Information
  phoneNumber: "0226132936",
  phoneDisplay: "0226132936", // How phone shows in UI
  email: "info@rankhigher.co.nz",
  
  // Address
  address: {
    street: "street address",
    city: "city",
    region: "region",
    postalCode: "postcode",
    country: "New Zealand",
    full: "full address"
  },
  
  // Service Areas - Update for each town
  serviceAreas: [
    "Queenstown",
    "Arrowtown",
    "Frankton",
    "Kelvin Heights",
    "Arthur's Point",
    "Fernhill",
    "Millbrook",
    "Lake Hayes Estate",
    "Shotover Country",
    "Wakatipu Heights",
    "Lower Shotover"
  ],
  
  // Geographic coordinates for maps and local SEO
  coordinates: {
    latitude: -44.9847,
    longitude: 168.7488
  },
  
  // URLs and Online Presence
  website: "https://www.littledogdecorating.co.nz/",
  googleMapsUrl: "https://maps.google.com/?q=31+Marston+Road+Queenstown+9304+New+Zealand",
  gmbReviewUrl: "https://g.page/r/YOUR_GMB_PLACE_ID/review", // Replace with actual GMB review link
  
  // Social Media
  social: {
    facebook: "https://facebook.com/littledogdecorating",
    instagram: "https://instagram.com/littledogdecorating",
    linkedin: null,
    youtube: null
  },
  
  // Business Registration & Details
  gstNumber: "GST123456789", // Update with actual GST number
  abnNumber: null, // For Australian businesses
  
  // Business Hours for structured data
  businessHours: {
    monday: { open: "08:00", close: "17:00" },
    tuesday: { open: "08:00", close: "17:00" },
    wednesday: { open: "08:00", close: "17:00" },
    thursday: { open: "08:00", close: "17:00" },
    friday: { open: "08:00", close: "17:00" },
    saturday: { open: "09:00", close: "15:00" },
    sunday: null // Closed
  },
  
  // Pricing and ratings for structured data
  priceRange: "$$", // $, $$, $$$, $$$$
  averageRating: 4.9,
  reviewCount: 47,
  
  // SEO and Meta
  seoDefaults: {
    titleSuffix: " | Little Dog Decorating - Queenstown Painters",
    description: `Professional painting and decorating services in Queenstown and Arrowtown. We specialize in interior, exterior, and roof painting for residential properties.`,
    keywords: "painters queenstown, painting contractors, interior painting, exterior painting, roof painting, decorating services, arrowtown painters",
    ogImage: "/little-dog-decorating-logo--queenstown-painter.webp"
  },
  
  // Business Details
  services: {
    primary: ["Interior Painting", "Exterior Painting", "Roof Painting"],
    secondary: ["Decorating", "Cedar Restoration", "Deck Staining", "Surface Preparation", "Color Consultation"]
  },
  
  // Theme/Branding (if easily configurable)
  theme: {
    primaryColor: "#2563eb", // Blue
    secondaryColor: "#7c3aed", // Purple
    accentColor: "#f59e0b" // Amber
  },
  
  // Service radius in km
  serviceRadius: 50,
  
  // Service-specific descriptions for structured data
  serviceDescriptions: {
    "Interior Painting": "Transform your home interior with premium painting services using high-quality materials and expert techniques.",
    "Exterior Painting": "Protect and beautify your home's exterior with weather-resistant paints and professional application methods.", 
    "Roof Painting": "Extend your roof's life and improve your home's appearance with specialized roof painting and coating services."
  },
  
  // Years in business
  yearsInBusiness: 8,
  
  // Certifications
  certifications: [
    "Master Painters Association",
    "BCITO Certified"
  ],
  
  // Email Configuration (for contact forms)
  emailConfig: {
    clientEmail: "emailaddress@gmail.com",
    serviceEmail: "envisionwebforge@gmail.com", // The email service sender
    emailPassword: "ifdttctlzpyrjzzi" // Will move to env var
  }
}

// Helper functions for dynamic content
export const getSiteTitle = (pageTitle = "") => {
  return pageTitle 
    ? `${pageTitle}${siteConfig.seoDefaults.titleSuffix}`
    : `${siteConfig.businessName}${siteConfig.seoDefaults.titleSuffix}`;
}

export const getServiceAreasText = () => {
  const areas = siteConfig.serviceAreas;
  if (areas.length <= 2) {
    return areas.join(" and ");
  }
  const lastArea = areas[areas.length - 1];
  const otherAreas = areas.slice(0, -1);
  return `${otherAreas.join(", ")} and ${lastArea}`;
}

export const getLocationSpecificDescription = (service = "") => {
  const baseDesc = `Professional ${service} services in ${siteConfig.townName} and surrounding areas including ${getServiceAreasText()}.`;
  return baseDesc;
}

export default siteConfig;