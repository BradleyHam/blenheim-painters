// Site Configuration for Blenheim Painters
export const siteConfig = {
  // Business Information
  businessName: "Blenheim Painters",
  businessNameAlt: "Professional Painters Blenheim - Marlborough", 
  ownerName: "Bradley Hamilton",
  ownerNameCasual: "Brad",
  
  // Location Details
  townName: "Blenheim",
  townNameLower: "blenheim",
  region: "Marlborough",
  postalCode: "7201",
  country: "New Zealand",
  
  // Contact Information
  phoneNumber: "+6436698829", // Your CallHippo number
  phoneDisplay: "+6436698829",
  email: "info@rankhigher.co.nz",
  
  // Address
  address: {
    street: "Serving all of Marlborough",
    city: "Blenheim",
    region: "Marlborough",
    postalCode: "7201",
    country: "New Zealand",
    full: "Blenheim, Marlborough 7201, New Zealand"
  },
  
  // Service Areas - Blenheim and Marlborough region
  serviceAreas: [
    "Blenheim Central",
    "Springlands",
    "Redwoodtown",
    "Witherlea",
    "Riversdale",
    "Mayfield",
    "Renwick",
    "Seddon",
    "Ward",
    "Picton",
    "Havelock",
    "Rapaura",
    "Fairhall",
    "Blenheim Airport",
    "Cloudy Bay"
  ],
  
  // Geographic coordinates for maps and local SEO
  coordinates: {
    latitude: -41.5144,
    longitude: 173.9613
  },
  
  // URLs and Online Presence
  website: "https://www.blenheimpainters.co.nz/",
  googleMapsUrl: "https://maps.google.com/?q=Blenheim+Marlborough+New+Zealand",
  gmbReviewUrl: "#", // Update when GMB created
  
  // Social Media
  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null
  },
  
  // Business Registration & Details
  gstNumber: "TBC",
  abnNumber: null,
  
  // Business Hours for structured data
  businessHours: {
    monday: { open: "07:00", close: "17:30" },
    tuesday: { open: "07:00", close: "17:30" },
    wednesday: { open: "07:00", close: "17:30" },
    thursday: { open: "07:00", close: "17:30" },
    friday: { open: "07:00", close: "17:00" },
    saturday: { open: "08:00", close: "14:00" },
    sunday: null // Closed
  },
  
  // Pricing and ratings for structured data
  priceRange: "$$",
  averageRating: 4.9,
  reviewCount: 38,
  
  // SEO and Meta
  seoDefaults: {
    titleSuffix: " | Blenheim Painters - Marlborough's Trusted Painting Service",
    description: `Professional painters in Blenheim and Marlborough. Specializing in vineyard properties, residential, and commercial painting. Free quotes, fully insured.`,
    keywords: "painters blenheim, blenheim painters, marlborough painters, house painters blenheim, painting contractors marlborough, vineyard painting, interior painting blenheim, exterior painting blenheim",
    ogImage: "/blenheim-painters-logo.webp"
  },
  
  // Business Details
  services: {
    primary: ["Interior Painting", "Exterior Painting", "Commercial Painting"],
    secondary: ["Roof Painting", "Vineyard Building Painting", "Deck & Fence Staining", "Industrial Painting", "New Build Painting"]
  },
  
  // Theme/Branding
  theme: {
    primaryColor: "#059669", // Green (vineyard theme)
    secondaryColor: "#1e40af", // Blue
    accentColor: "#fbbf24" // Yellow
  },
  
  // Service radius in km
  serviceRadius: 60,
  
  // Service-specific descriptions for structured data
  serviceDescriptions: {
    "Interior Painting": "Professional interior painting services for Blenheim homes and businesses. Quality finishes with premium paints.",
    "Exterior Painting": "Weather-resistant exterior painting for Marlborough's sunny, dry climate. Protect and beautify your property.",
    "Commercial Painting": "Commercial and industrial painting services for Blenheim businesses, wineries, and vineyard facilities."
  },
  
  // Years in business
  yearsInBusiness: 7,
  
  // Certifications
  certifications: [
    "Fully Insured",
    "Site Safe Certified",
    "Dulux Accredited"
  ],
  
  // Email Configuration
  emailConfig: {
    clientEmail: "info@rankhigher.co.nz",
    serviceEmail: "info@rankhigher.co.nz",
    emailPassword: "USE_ENV_VAR"
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