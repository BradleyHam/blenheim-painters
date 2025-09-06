// Content Copy Configuration - Centralized text content for easy customization
// This file contains all the marketing copy, service descriptions, and dynamic content

import { siteConfig } from './site-config'

export const copyConfig = {
  // ===========================================
  // HERO SECTION CONTENT
  // ===========================================
  hero: {
    title: {
      line1: "Interior & Exterior Painting",
      line2: `Specialists in ${siteConfig.townName}`
    },
    subtitle: "Quality Work from a Friendly Team (and Their Little Dog!)",
    credentials: [
      {
        text: "5-star on Google",
        icon: "stars"
      },
      {
        text: "BCITO-certified", 
        icon: "shield"
      }
    ]
  },

  // ===========================================
  // ABOUT SECTION CONTENT
  // ===========================================
  about: {
    tagline: `Premium Interior & Exterior Painting in ${siteConfig.townName}`,
    title: {
      main: "Your Home,",
      accent: "Crafted by Local Experts"
    },
    description: `From lakefront properties to alpine retreats, we understand what ${siteConfig.townName} homes need to withstand our unique climate. We don't just paint surfaces — we protect your investment with premium products and meticulous preparation that ensures stunning, long-lasting results.\n\nOur team combines old-school craftsmanship with modern techniques, delivering flawless finishes that enhance your property's value and your daily enjoyment of it.`,
    credentials: [
      `Specialists in ${siteConfig.townName}'s Climate Conditions`,
      "Premium Products & 5-Year Workmanship Guarantee",
      "Fixed Quotes with No Hidden Surprises"
    ]
  },

  // ===========================================
  // PROCESS SECTION CONTENT
  // ===========================================
  process: {
    title: "Our Refined Process",
    subtitle: "We've perfected our approach to ensure your interior repainting project is seamless, efficient, and exceeds your expectations.",
    steps: [
      {
        number: 1,
        title: "Personalized Consultation",
        description: "We start with a relaxed, in-depth chat to understand your vision, assess your space, and offer expert advice on colors, finishes, and techniques tailored to your style."
      },
      {
        number: 2,
        title: "Comprehensive Proposal", 
        description: "You'll get a clear quote with premium material options, timelines, and a full breakdown of what to expect — no surprises, just clarity and confidence."
      },
      {
        number: 3,
        title: "Flawless Execution",
        description: "Our experienced team shows up on time, protects your space, applies every coat with precision, and leaves your home spotless. We treat your home like our own."
      }
    ]
  },

  // ===========================================
  // SERVICE PAGE CONTENT
  // ===========================================
  services: {
    interior: {
      pageTitle: `Interior Painting in ${siteConfig.townName}`,
      sections: {
        protection: {
          subtitle: "First Things First",
          title: "Keeping Your Stuff Safe",
          content: `Look, we know your home isn't just a bunch of walls - it's where you live! That's why before we even think about cracking open a paint tin, we make sure everything's ship-shape:

• We'll carefully shift the small stuff out of the way
• Big furniture? We'll pop it in the middle and wrap it up snug
• Anything that might take a tumble gets secured

It's all about making sure your place is as tidy when we leave as it was when we arrived. No stress, no mess - that's our promise.`
        },
        preparation: {
          subtitle: "Getting Your Walls Ready",
          title: "The Not-So-Glamorous (But Super Important) Bit",
          content: `Alright, this is where the magic starts to happen. Before we make your walls look mint, we need to sort out any issues:

• Filling in those pesky cracks? You bet.
• Smoothing out dings and dents? Absolutely.
• Scraping off old, flaky paint? Consider it done.
• Slapping on some primer if needed? No worries.
• Sanding everything down? Smooth as a baby's bum, mate.`
        },
        cleanup: {
          subtitle: "Cleaning Up",
          title: "We'll Leave Your Place Spick and Span",
          content: `We reckon a job's not done until everything's back to normal - or better! Here's what we do before we head off:

• Peel off all that protective gear
• Give everything a good dust and vac
• Put all your bits and bobs back where they belong
• One last look around to make sure you're happy as Larry

Ready to give your ${siteConfig.townName} home a fresh new look? Give us a bell and we'll sort you out with a free quote. Whether it's a quick spruce-up or a total transformation, we've got the skills to make your place look choice.`
        },
        coatingMethods: {
          title: "Choose Your Coating Method",
          options: [
            {
              label: 'Brush and Roll',
              whenToUse: "If you're still living in the house or have lots of fiddly bits to work around.",
              pros: [
                "Easy to touch up later if the kids decide to play cricket inside",
                "We don't waste much paint",
                "Less time spent covering everything in sight"
              ],
              cons: [
                "Might see a few brush marks here and there",
                "Takes a bit longer to dry evenly", 
                "Can sometimes leave darker edges (we call it \"picture framing\")"
              ]
            },
            {
              label: 'Spray Painting',
              whenToUse: "Perfect for new builds or big open spaces.",
              pros: [
                "We'll be in and out before you know it",
                "Dries nice and even",
                "Looks smooth as"
              ],
              cons: [
                "We'll need to cover more stuff up",
                "Touching up later might be a bit trickier",
                "Paint hangs about in the air a bit longer"
              ]
            },
            {
              label: 'Wallpaper',
              whenToUse: `Want to really make your ${siteConfig.townName} pad stand out? Wallpaper's your ticket to something special.`,
              pros: [
                "Create a feature wall that'll have your mates buzzing",
                "So many choices - from subtle textures to wild patterns",
                "Adds a bit of depth to your rooms",
                "Lasts yonks if you treat it right",
                "Great for hiding those not-so-perfect walls"
              ],
              whyTrustUs: [
                "We've got access to some choice wallpaper collections",
                "We know how to line up those patterns just right",
                "We'll help you pick something that suits your style and your life",
                "Fancy a mix of paint and wallpaper? We've got you covered"
              ]
            }
          ]
        }
      }
    },
    
    exterior: {
      pageTitle: `Exterior Painting in ${siteConfig.townName}`,
      sections: {
        protection: {
          subtitle: "First Up",
          title: "Protecting Your Outdoor Space",
          content: `Your home's exterior is its first line of defense against ${siteConfig.townName}'s four seasons. Before we break out the brushes, we'll make sure everything's sorted:

• We'll shift your outdoor furniture to a safe spot
• Those prized plants? We'll cover them up nice and cozy
• Anything attached to the walls gets a protective wrap

It's all about keeping your outdoor area as pristine as those lake views. No worries, no hassles - that's how we roll.`
        },
        preparation: {
          subtitle: "Prepping Your Walls",
          title: "The Crucial Bit Most Folks Forget",
          content: `Right, let's get your walls ready for their new look. ${siteConfig.townName} weather can be tough on exteriors, so we'll:

• Give everything a good clean - no grime left behind
• Scrape off any peeling paint - it's got to go
• Replace any rotted wood - can't paint over problems
• Fill up those cracks and gaps - smooth as
• Sand it all down - for that perfect finish
• Chuck on some quality primer - it's the key to long-lasting color`
        },
        houseTypes: {
          sectionTitle: `${siteConfig.townName} homes`,
          title: 'We know your cladding',
          types: [
            {
              label: 'Weatherboard',
              description: `Weatherboard homes are a ${siteConfig.townName} classic, and we've got the expertise to make them shine:`,
              techniques: [
                "Our team uses specialized primers designed to bond well with both old and new weatherboards",
                "We apply flexible, high-quality exterior paints that can withstand the natural expansion and contraction of the wood",
                "Extra attention is given to end-grain sealing and caulking joints to prevent moisture ingress",
                "For uneven surfaces, we employ techniques like 'wet-edge' painting to ensure a smooth, consistent finish",
                "We're skilled in both brush and spray application, choosing the best method for your specific weatherboards"
              ]
            },
            {
              label: 'Timber',
              description: `Timber cladding requires special care to preserve its natural beauty while protecting it from ${siteConfig.townName}'s elements:`,
              techniques: [
                "We begin with a gentle clean using specialized wood cleaners to remove dirt without damaging the timber",
                "For weathered timber, we use restoration techniques like sanding or chemical brightening to rejuvenate the wood",
                "We're experts in applying both stains and clear sealers, enhancing the wood's natural grain",
                "For cedar, we use products specifically formulated to handle its unique properties and natural oils",
                `Our team applies UV-resistant finishes to protect against ${siteConfig.townName}'s intense sunlight`,
                "We use breathable finishes that allow the timber to naturally regulate moisture, preventing trapped dampness",
                "For a modern look, we can apply solid color paints using techniques that maintain the texture of the wood"
              ]
            },
            {
              label: 'Plaster',
              description: `Rendered and plastered exteriors are popular in ${siteConfig.townName}, and we know exactly how to handle them:`,
              techniques: [
                "We start with a thorough inspection to identify any cracks or areas of concern",
                "Our team repairs small cracks using flexible fillers designed for exterior use",
                "We apply high-quality sealers before painting to prevent moisture penetration",
                "We use premium masonry paints that are specifically formulated for New Zealand conditions",
                "Our spray application techniques ensure even coverage on textured surfaces",
                "We're experienced in color matching and blending for seamless repairs"
              ]
            },
            {
              label: 'Modern Panels',
              description: `Fiber cement panels like Axon require specific expertise, and we're well-versed in their requirements:`,
              techniques: [
                "We begin with a thorough clean, ensuring all surfaces are free from construction dust and debris",
                "Our team uses specialized masking techniques to protect the crisp lines of the vertical grooves",
                "We apply high-adhesion primers designed specifically for pre-primed fiber cement panels",
                "Our painters are skilled in both brush and roller techniques to achieve a smooth, even finish on large flat surfaces",
                "We use low-sheen or satin finishes that highlight the panel's texture without emphasizing surface imperfections",
                "For the joints, we employ careful caulking and painting techniques to maintain a seamless look",
                "We can recommend and apply bold, modern colors that complement the contemporary style of modern panels",
                `Our team is experienced in applying durable finishes that stand up to ${siteConfig.townName}'s varied climate`
              ]
            }
          ]
        }
      }
    }
  },

  // ===========================================
  // CTA (Call to Action) CONTENT
  // ===========================================
  cta: {
    primary: "Get Your Free Consultation",
    secondary: "Get A Free Consultation",
    shortForm: "Get Quote"
  },

  // ===========================================
  // TESTIMONIAL SECTION HEADERS
  // ===========================================
  testimonials: {
    sectionTitle: "What Our Customers Say",
    subtitle: "Real feedback from real customers",
    trustIndicators: [
      "5-star Google rating",
      "Fully insured",
      "Local references available"
    ]
  },

  // ===========================================
  // PROJECT SHOWCASE CONTENT
  // ===========================================
  projects: {
    sections: {
      interior: {
        subtitle: "Our Interior Projects",
        title: "Recent Interior Transformations",
        description: `Explore our latest interior painting projects, showcasing our attention to detail and commitment to quality. See how we've transformed homes across ${siteConfig.townName}.`
      },
      exterior: {
        subtitle: "Our Exterior Projects", 
        title: "Recent Exterior Transformations",
        description: `Discover how we've revitalized homes across ${siteConfig.townName} with our expert exterior painting services. Browse our recent projects to see our workmanship firsthand.`
      }
    }
  },

  // ===========================================
  // CONVERSATIONAL TONE ELEMENTS
  // ===========================================
  tone: {
    // Kiwi expressions to use throughout
    expressions: [
      "choice", "mint", "sweet as", "she'll be right", "good as gold", 
      "happy as Larry", "smooth as a baby's bum", "yonks", "chur bro"
    ],
    
    // Call-to-action variations
    ctaVariations: [
      "Give us a bell",
      "Drop us a line", 
      "Get in touch",
      "Flick us a message",
      "Give us a buzz"
    ]
  }
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Get formatted content with bullet points
 * @param {string} content - Raw content with bullet points
 * @returns {object} - Formatted content for React components
 */
export function formatContentWithBullets(content) {
  const lines = content.split('\n')
  const paragraphs = []
  const bullets = []
  
  lines.forEach(line => {
    const trimmed = line.trim()
    if (trimmed.startsWith('•')) {
      bullets.push(trimmed.substring(1).trim())
    } else if (trimmed.length > 0) {
      if (bullets.length > 0) {
        paragraphs.push({ type: 'bullets', items: [...bullets] })
        bullets.length = 0
      }
      paragraphs.push({ type: 'paragraph', text: trimmed })
    }
  })
  
  if (bullets.length > 0) {
    paragraphs.push({ type: 'bullets', items: bullets })
  }
  
  return paragraphs
}

/**
 * Get location-specific copy with dynamic replacements
 * @param {string} template - Template string with placeholders
 * @param {object} replacements - Key-value pairs for replacements
 * @returns {string} - Processed copy
 */
export function getLocationSpecificCopy(template, replacements = {}) {
  let processed = template
  
  // Default replacements from site config
  const defaults = {
    townName: siteConfig.townName,
    businessName: siteConfig.businessName,
    ownerName: siteConfig.ownerName
  }
  
  const allReplacements = { ...defaults, ...replacements }
  
  Object.entries(allReplacements).forEach(([key, value]) => {
    const regex = new RegExp(`{${key}}`, 'g')
    processed = processed.replace(regex, value)
  })
  
  return processed
}

/**
 * Get service area text for dynamic content
 * @returns {string} - Formatted service areas
 */
export function getServiceAreasText() {
  const areas = siteConfig.serviceAreas
  if (areas.length <= 2) {
    return areas.join(" and ")
  }
  const lastArea = areas[areas.length - 1]
  const otherAreas = areas.slice(0, -1)
  return `${otherAreas.join(", ")} and ${lastArea}`
}

export default copyConfig