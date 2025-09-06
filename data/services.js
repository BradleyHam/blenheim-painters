import { siteConfig, getLocationSpecificDescription } from '@/config/site-config'

export const paintingServices = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    slug: `interior-painting-${siteConfig.townNameLower}`,
    description: `Transform your home's interior with our professional painting services in ${siteConfig.townName}. We use premium paints and expert techniques.`,
    longDescription: getLocationSpecificDescription("interior painting"),
    icon: "🎨",
    features: [
      "Premium quality paints",
      "Color consultation",
      "Surface preparation",
      "Furniture protection",
      "Clean finish guarantee"
    ],
    priceRange: "$2,000 - $8,000",
    duration: "2-5 days"
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting", 
    slug: `exterior-painting-${siteConfig.townNameLower}`,
    description: `Protect and beautify your home's exterior with weather-resistant paints perfect for ${siteConfig.townName}'s climate.`,
    longDescription: getLocationSpecificDescription("exterior painting"),
    icon: "🏠",
    features: [
      "Weather-resistant coatings",
      "Comprehensive surface prep",
      "High-quality brushes & rollers", 
      "Multi-coat application",
      "Long-lasting protection"
    ],
    priceRange: "$8,000 - $25,000",
    duration: "3-7 days"
  },
  {
    id: "roof-painting",
    title: "Roof Painting",
    slug: `roof-painting-${siteConfig.townNameLower}`,
    description: `Extend your roof's life and improve your home's appearance with our specialized roof painting services in ${siteConfig.townName}.`,
    longDescription: getLocationSpecificDescription("roof painting"),
    icon: "🏘️",
    features: [
      "Roof condition assessment",
      "Specialized roof coatings",
      "Weather sealing",
      "Gutter painting included",
      "10-year warranty"
    ],
    priceRange: "$5,000 - $15,000", 
    duration: "2-4 days"
  },
  {
    id: "decorating",
    title: "Decorating Services",
    slug: `decorating-${siteConfig.townNameLower}`,
    description: `Complete decorating services including wallpaper, feature walls, and custom finishes in ${siteConfig.townName}.`,
    longDescription: getLocationSpecificDescription("decorating"),
    icon: "✨", 
    features: [
      "Wallpaper installation",
      "Feature wall design",
      "Custom paint finishes",
      "Trim and molding",
      "Design consultation"
    ],
    priceRange: "$1,500 - $10,000",
    duration: "1-4 days"
  },
  {
    id: "cedar-restoration",
    title: "Cedar Restoration",
    slug: `cedar-restoration-${siteConfig.townNameLower}`,
    description: `Restore and protect your cedar exterior with our specialized restoration services in ${siteConfig.townName}.`,
    longDescription: getLocationSpecificDescription("cedar restoration"),
    icon: "🌲",
    features: [
      "Cedar assessment",
      "Cleaning & preparation",
      "Staining or painting",
      "Weather protection",
      "Maintenance planning"
    ],
    priceRange: "$5,000 - $20,000",
    duration: "3-6 days"
  },
  {
    id: "commercial-painting", 
    title: "Commercial Painting",
    slug: `commercial-painting-${siteConfig.townNameLower}`,
    description: `Professional commercial painting services for businesses in ${siteConfig.townName} and surrounding areas.`,
    longDescription: getLocationSpecificDescription("commercial painting"),
    icon: "🏢",
    features: [
      "Flexible scheduling",
      "Minimal business disruption", 
      "Commercial-grade materials",
      "Safety compliance",
      "Maintenance programs"
    ],
    priceRange: "Quote on consultation",
    duration: "Varies by project"
  }
]

export const serviceProcess = [
  {
    step: 1,
    title: "Free Consultation",
    description: `We'll visit your ${siteConfig.townName} property to assess your needs and provide a detailed quote.`,
    icon: "📋"
  },
  {
    step: 2, 
    title: "Preparation",
    description: "Thorough surface preparation including cleaning, sanding, and masking to ensure perfect results.",
    icon: "🔧"
  },
  {
    step: 3,
    title: "Professional Painting",
    description: "Expert application using premium materials and proven techniques for lasting results.",
    icon: "🎨"
  },
  {
    step: 4,
    title: "Quality Check & Cleanup", 
    description: "Final inspection and complete cleanup, leaving your property spotless and beautiful.",
    icon: "✅"
  }
]