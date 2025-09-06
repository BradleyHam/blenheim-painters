# NZ Painter Template - Setup Guide

This template has been designed for quick deployment of painter websites across New Zealand towns. Follow this guide to customize the template for your specific location and business.

## Quick Start (30-Minute Setup)

### 1. Configuration Update (10 minutes)
Edit `/config/site-config.js` with your business details:

```javascript
export const siteConfig = {
  // Update these core fields
  businessName: "Your Painting Business",
  businessNameAlt: "Your Painting Business Ltd",
  ownerName: "Your Name",
  townName: "Your Town",
  townNameLower: "yourtown",
  phoneNumber: "+64 XX XXX XXX",
  email: "your-email@domain.com",
  
  // Update address
  address: {
    street: "Your Street Address",
    city: "Your City", 
    region: "Your Region",
    postalCode: "XXXX",
    // ... update coordinates
  },
  
  // Update service areas array
  serviceAreas: [
    "Your Town",
    "Nearby Town 1", 
    "Nearby Town 2"
    // ... add your service areas
  ]
  
  // Update website URL
  website: "https://your-domain.com"
}
```

### 2. Environment Variables (5 minutes)
Copy `.env.example` to `.env.local` and update:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
EMAIL_USER=your-service-email@gmail.com
EMAIL_PASS=your-app-password  
CLIENT_EMAIL=your-business-email@domain.com
```

### 3. Customize Content Copy (5 minutes)
Edit `/config/copy.js` to update business-specific copy:

```javascript
// Update hero section
hero: {
  title: {
    line1: "Interior & Exterior Painting",
    line2: `Specialists in ${siteConfig.townName}` // Automatically uses your town
  },
  subtitle: "Your unique business tagline here"
}

// Update about section  
about: {
  tagline: `${siteConfig.townName}'s Repainting Pros`,
  description: "Your business story and experience..."
}
```

### 4. Replace Key Images (10 minutes)
Minimum required image replacements:

- `/public/ldd-logo.png` → Your business logo
- `/public/favicon.ico` → Your favicon
- `/public/hero-bg.jpg` → Your town hero image  
- `/public/dan.jpg` → Business owner photo
- Replace at least 3 project galleries in `/public/projects/`

### 5. Customize Color Scheme (2 minutes)
Edit `/config/colors.js` to change the entire site's color scheme:

```javascript
// Switch to a different theme
export const activeTheme = 'vibrant'  // or 'earth', 'default'

// Or customize the default colors
default: {
  primary: {
    DEFAULT: "#1E40AF", // Change navy blue
  },
  secondary: {
    DEFAULT: "#F59E0B", // Change gold
  }
}
```

### 6. Test and Deploy (5 minutes)
```bash
npm run dev    # Test locally
npm run build  # Build for production
```

## Detailed Setup Instructions

## Content Management System

### Centralized Copy Configuration (`/config/copy.js`)

The template now includes a centralized copy/content configuration system that makes text updates faster and more systematic. This works alongside the image configuration to provide complete control over site content.

#### Key Features:
- **Location-aware content**: Copy automatically includes your town name and business details
- **Consistent tone**: Maintains the friendly, conversational Kiwi tone throughout
- **Easy customization**: Update all site copy from one central location
- **Component integration**: All text is dynamically loaded from configuration

#### Main Content Sections:

##### Hero Section
```javascript
hero: {
  title: {
    line1: "Interior & Exterior Painting",
    line2: `Specialists in ${siteConfig.townName}` // Dynamic location
  },
  subtitle: "Quality Work from a Friendly Team (and Their Little Dog!)",
  credentials: [
    { text: "5-star on Google", icon: "stars" },
    { text: "BCITO-certified", icon: "shield" }
  ]
}
```

##### About Section
```javascript  
about: {
  tagline: `${siteConfig.townName}'s Repainting Pros`,
  title: {
    main: `${siteConfig.businessName.split(' ')[0]} ${siteConfig.businessName.split(' ')[1]},`,
    accent: "Big Results"
  },
  description: "Your business story...", // Automatically includes town name
  credentials: [
    "15+ Years of Expertise",
    "Fully Insured Service", 
    "Complimentary Consultations"
  ]
}
```

##### Service Pages
```javascript
services: {
  interior: {
    pageTitle: `Interior Painting in ${siteConfig.townName}`,
    sections: {
      protection: {
        subtitle: "First Things First",
        title: "Keeping Your Stuff Safe",
        content: "Conversational content with Kiwi expressions..."
      }
      // ... more sections
    }
  }
}
```

#### Quick Copy Updates:

1. **Business Story**: Edit `copyConfig.about.description`
2. **Service Descriptions**: Update `copyConfig.services.[interior/exterior].sections`
3. **Call-to-Actions**: Modify `copyConfig.cta` variations
4. **Conversational Tone**: Add local expressions in `copyConfig.tone.expressions`

#### Location Customization:
The copy system automatically handles location references through the site configuration. When you update `siteConfig.townName`, all copy dynamically updates to reference your location.

## Color Scheme Configuration System

### Centralized Color Management (`/config/colors.js`)

The template includes a powerful centralized color configuration system that makes it incredibly easy to change the entire site's color scheme from one location.

#### Key Features:
- **One-place updates**: Change entire site color scheme instantly
- **Multiple themes**: Pre-built color schemes (professional, vibrant, earthy)
- **Brand alignment**: Easy to match your business colors
- **Consistent application**: All components use the same color source
- **CSS variable integration**: Supports dynamic theming

#### Quick Color Changes:

##### Switch Between Pre-built Themes:
```javascript
// In /config/colors.js
export const activeTheme = 'vibrant'  // Options: 'default', 'vibrant', 'earth'
```

##### Customize Brand Colors:
```javascript
// Update the default theme colors
default: {
  primary: {
    DEFAULT: "#1E40AF", // Your primary brand color (navy)
    light: "#3B82F6",   // Lighter variant
    dark: "#1E3A8A"     // Darker variant
  },
  secondary: {
    DEFAULT: "#F59E0B", // Your accent color (gold)
    light: "#FCD34D",
    dark: "#D97706"
  }
}
```

##### Create Custom Theme:
```javascript
// Add your own color scheme
myBrand: {
  primary: {
    DEFAULT: "#8B0000", // Dark red
    light: "#DC143C",
    dark: "#660000"
  },
  secondary: {
    DEFAULT: "#FFD700", // Gold
    light: "#FFED4A", 
    dark: "#F1C40F"
  }
}

// Then activate it
export const activeTheme = 'myBrand'
```

#### Color Scheme Options:

##### Professional (Default)
- **Primary**: Navy Blue (#0F1A3A) - trustworthy, professional
- **Secondary**: Gold (#E6A817) - premium, reliable
- **Best for**: Painting contractors, professional services
- **Tone**: Trustworthy and established

##### Vibrant
- **Primary**: Bright Blue (#1E40AF) - energetic, modern
- **Secondary**: Orange (#F59E0B) - enthusiastic, approachable
- **Best for**: Home improvement, renovation companies
- **Tone**: Dynamic and friendly

##### Earth
- **Primary**: Brown (#92400E) - natural, grounded
- **Secondary**: Green (#059669) - growth, environmental
- **Best for**: Landscaping, eco-friendly services
- **Tone**: Natural and sustainable

#### Implementation Details:

The color system automatically:
1. **Updates Tailwind CSS** - All color classes (`text-navy`, `bg-gold`, etc.)
2. **Generates CSS Variables** - For blog content and custom styles
3. **Maintains Consistency** - Across all components and pages
4. **Preserves Accessibility** - Color contrast and readability

#### Color Usage in Components:

Components automatically use colors from the configuration:
```javascript
// Colors are centrally managed
className="bg-navy text-white hover:bg-navy-light"  // Uses config colors
className="text-gold border-gold"                   // Consistent theming
```

#### Advanced Customization:

##### Business-Specific Color Recommendations:
```javascript
import { getBusinessColorRecommendations } from '@/config/colors'

// Get color suggestions for your business type
const colors = getBusinessColorRecommendations('painting')
// Returns optimized colors for painting contractors
```

##### Dynamic Theme Switching:
```javascript
import { switchTheme } from '@/config/colors'

// Change themes programmatically (for seasonal campaigns, etc.)
switchTheme('earth') // Switch to earth tones for spring campaign
```

#### Color Checklist:

**Quick Setup (2 minutes)**:
- [ ] Choose active theme in `/config/colors.js`
- [ ] Test build to verify colors load correctly
- [ ] Check key pages (home, services, about) for visual consistency

**Custom Brand Colors (10 minutes)**:
- [ ] Update primary/secondary colors to match brand
- [ ] Adjust light/dark variants for proper contrast
- [ ] Test hover states and interactive elements
- [ ] Verify text readability on different backgrounds

**Advanced Theming (30 minutes)**:
- [ ] Create custom color scheme
- [ ] Set up seasonal/campaign color variations
- [ ] Configure CSS variables for custom components
- [ ] Test across all pages and components

The color system ensures that your brand colors are consistently applied across every part of the website, making professional branding effortless.

## Configuration Deep Dive

### Site Configuration (`/config/site-config.js`)

This single file controls most customization:

#### Business Information
```javascript
businessName: "Your Business Name"          // Used in titles, headers, meta tags
businessNameAlt: "Your Business Name Ltd"   // Longer/legal business name  
ownerName: "Your Name"                       // Owner/operator name for testimonials
```

#### Location Settings
```javascript
townName: "Wellington"                       // Primary service town (proper case)
townNameLower: "wellington"                  // URL-friendly version
region: "Wellington Region"                  // State/region
postalCode: "6011"                          // Primary postal code

// Geographic coordinates for maps and local SEO
coordinates: {
  latitude: -41.2865,                       // Update with your town's coordinates
  longitude: 174.7762
}
```

#### Service Areas
```javascript
serviceAreas: [
  "Wellington",           // Primary town first
  "Lower Hutt",          // Surrounding areas
  "Upper Hutt",
  "Porirua",
  "Kapiti Coast"
  // Add up to 10-15 areas for best SEO
]
```

#### SEO Configuration
```javascript
seoDefaults: {
  titleSuffix: " | Your Business - Wellington Painters",
  description: "Professional painting services in Wellington and surrounding areas...",
  keywords: "painters wellington, painting contractors, interior painting, exterior painting",
  ogImage: "/your-logo-image.webp"
}
```

### Data File Updates

#### Testimonials (`/data/testimonials.js`)
The template includes testimonials that reference the business owner and location dynamically:

```javascript
text: `${siteConfig.ownerName} did excellent work on our ${siteConfig.townName} home...`
```

Update the testimonial details but keep the dynamic references:
- Author names
- Service areas  
- Service types
- Dates

#### Services (`/data/services.js`)
Services are automatically localized using the configuration:

```javascript
description: `Transform your home's interior with our professional painting services in ${siteConfig.townName}...`
```

Update service pricing or add/remove services as needed.

#### FAQ (`/data/faq.js`)
FAQ responses automatically include your town name and service areas:

```javascript
answer: `Yes, we provide comprehensive painting services throughout ${siteConfig.townName} and surrounding areas including ${getServiceAreasText()}...`
```

Review and customize answers for your specific business policies.

## Content Management

### Blog Posts (`/content/blog/`)
The template includes 3 sample blog posts. To add new posts:

1. Create a new `.md` file in `/content/blog/`
2. Use this frontmatter structure:

```markdown
---
title: "Your Blog Post Title"
date: "2024-12-01"
excerpt: "Brief description for previews"
author: "Your Name"
tags: ["tag1", "tag2"] 
featured: true/false
image: "/blog/your-image.jpg"
category: "category-name"
---

# Your Content Here
```

### Project Showcases (`/content/projects/`)
Template includes 3 sample projects. To add new projects:

1. Create a new `.md` file in `/content/projects/`
2. Use this frontmatter structure:

```markdown
---
title: "Project Name"
description: "Brief project description"
services: ["Service 1", "Service 2"]
location: "Suburb/Area Name"
completionDate: "2024-10-15"
featured: true/false
beforeImage: "/projects/before.jpg"
afterImage: "/projects/after.jpg"
images: ["/projects/img1.jpg", "/projects/img2.jpg"]
clientTestimonial: "Optional client quote"
---

# Detailed project content here
```

## Image Management System

### Centralized Image Configuration
The template now uses a centralized image configuration system to make image replacement faster and more systematic. All image paths are managed through two configuration files:

- **`/config/images.js`** - Main site images (branding, hero, about, services)
- **`/config/content-images.js`** - Blog and project showcase images

### Image Replacement Workflow

#### 1. Critical Images (Must Replace)
Edit `/config/images.js` to update these key paths:

```javascript
branding: {
  logo: {
    path: "/your-logo.png",  // Replace with your business logo
    alt: "Your Business Name Logo"
  },
  logoCompressed: {
    path: "/your-logo-compressed.webp",
    alt: "Your Business Name Logo"
  },
  favicon: {
    path: "/favicon.ico"  // Replace with your favicon
  }
}
```

#### 2. Hero and About Images
```javascript
hero: {
  townscape: {
    path: "/your-town-view.jpg",  // Replace with your town scenic view
    alt: "Beautiful view of Your Town and surrounding area"
  }
},
about: {
  owner: {
    path: "/your-owner-photo.jpg",  // Replace with business owner photo
    alt: "Your Business Owner Name portrait"
  },
  vehicle: {
    path: "/your-company-vehicle.jpg",  // Replace with your branded vehicle
    alt: "Your Business Name company van"
  }
}
```

#### 3. Service Images
```javascript
services: {
  interior: {
    path: "/your-interior-work.jpg",
    alt: "Professional interior painting work"
  },
  exterior: {
    path: "/your-exterior-work.jpg", 
    alt: "Professional exterior painting work"
  },
  roof: {
    path: "/your-roof-work.jpg",
    alt: "Professional roof painting work"
  }
}
```

#### 4. Project Gallery Images
Update content image paths in `/config/content-images.js`:

```javascript
portfolios: {
  yourAreaExterior: {
    folder: "/your-area-exterior/",
    images: [
      "exterior-repaint-1-before.jpg",
      "exterior-repaint-1-after.jpg"
      // ... add your project images
    ],
    location: "Your Area"
  }
}
```

### Image Helper Functions

The template includes helper functions in `/lib/image-helpers.js` to assist with image management:

#### Validate Required Images
```javascript
import { validateRequiredImages } from '@/lib/image-helpers'

// Check which required images are missing
const validation = validateRequiredImages()
console.log(validation.missing) // Lists missing critical images
```

#### Get Replacement Checklist
```javascript
import { getImageReplacementChecklist } from '@/lib/image-helpers'

// Get checklist for replacing Queenstown images with your location
const checklist = getImageReplacementChecklist('queenstown', 'wellington')
```

### Quick Image Setup (10 minutes)

1. **Replace Critical Images** (5 minutes):
   ```bash
   # Replace these files in /public/
   your-logo.png → /public/ldd-logo.png
   your-favicon.ico → /public/favicon.ico  
   your-town-view.jpg → /public/queenstown.jpg
   your-owner-photo.jpg → /public/dan.jpg
   ```

2. **Update Image Config** (3 minutes):
   - Edit paths in `/config/images.js`
   - Update alt text descriptions

3. **Add Project Images** (2 minutes):
   - Create folder: `/public/your-area-exterior/`
   - Add 4-6 before/after project photos
   - Update `/config/content-images.js` with new folder path

### Image Optimization Guidelines

#### File Formats
- **WebP**: Hero images, large photos (better compression)
- **PNG**: Logos, graphics with transparency  
- **JPG**: Photographs, complex images
- **SVG**: Icons, simple graphics

#### File Sizes
- **Hero images**: Under 200KB while maintaining quality
- **Logo files**: Under 50KB for fast loading
- **Project gallery**: 100-150KB each
- **Thumbnails**: Under 30KB

#### Dimensions
- **Hero backgrounds**: 1920x1080px minimum
- **Project showcase**: 1200x800px recommended  
- **Logo**: 300x150px (plus 150x75px compressed version)
- **Social media (OG)**: 1200x630px

### Image Setup Checklist

Use this checklist to ensure all images are properly configured:

#### Critical (Must Complete)
- [ ] Business logo replaced and configured
- [ ] Favicon updated
- [ ] Town scenic view added
- [ ] Business owner photo updated  
- [ ] Company vehicle photo added
- [ ] Social media preview image created

#### High Priority  
- [ ] Service showcase images added (interior, exterior, roof)
- [ ] At least 3 project galleries created with local work
- [ ] Before/after photos added to project folders
- [ ] Image alt text updated for accessibility

#### Medium Priority
- [ ] Blog post featured images added
- [ ] Customer testimonial photos included  
- [ ] Process illustration images customized

### Troubleshooting Images

**Images Not Loading**:
- Check file paths in config files match actual file locations
- Ensure files are in `/public/` directory (not `/src/public/`)
- Verify image formats are web-compatible (.jpg, .png, .webp, .svg)
- Check for case-sensitive filename mismatches

**Build Errors Related to Images**:
- Run the image validation helper to identify missing files
- Check that all image config imports are correct
- Ensure alt text is provided for accessibility

**Performance Issues**:
- Compress large images before uploading
- Use WebP format with JPG fallbacks
- Implement lazy loading for gallery images

## Email Configuration

### Gmail SMTP Setup
1. Enable 2-factor authentication on Gmail account
2. Generate an App Password:
   - Google Account → Security → 2-Step Verification → App passwords
3. Use the app password (not your regular password) in `.env.local`

### Alternative Email Providers
The template supports any SMTP provider. Update these in `/app/api/contact/route.js`:

```javascript
const transporter = nodemailer.createTransporter({
  service: 'your-provider',  // or custom SMTP settings
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

## SEO Optimization

### Page Titles and Meta Tags
Titles are automatically generated using the configuration:
- Homepage: `{businessName} | {townName} Painters`
- Service pages: `{serviceTitle} {townName} | {businessName}`

### Local SEO
The template includes structured data for local business SEO:
- Business information (name, address, phone)
- Service area definitions  
- Geographic coordinates
- Operating hours
- Customer reviews

### URL Structure
Service pages automatically use town names:
- `/interior-painting-wellington`
- `/exterior-painting-wellington`
- `/roof-painting-wellington`

## Deployment

### Environment Setup
For production deployment, ensure these environment variables are set:
```bash
NODE_ENV=production
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-app-password
CLIENT_EMAIL=your-client-email@domain.com
```

### Recommended Hosting
- **Vercel**: Zero-config deployment (recommended)
- **Netlify**: Simple static hosting with forms
- **DigitalOcean**: VPS hosting for more control

### Domain Setup
1. Purchase domain: `your-business-town.co.nz`
2. Update `siteConfig.website` with new domain
3. Configure DNS with your hosting provider
4. Set up SSL certificate

### Pre-Launch Checklist

#### Configuration
- [ ] All business details updated in `site-config.js`
- [ ] Environment variables configured
- [ ] Contact form email tested
- [ ] Phone number and address verified

#### Content
- [ ] All location references updated (search for "Queenstown", "Little Dog")
- [ ] At least 3 blog posts published
- [ ] At least 3 project showcases added
- [ ] FAQ answers customized for your business

#### Images  
- [ ] Logo and favicon replaced
- [ ] Hero image shows your service area
- [ ] Owner/team photos updated
- [ ] Project galleries showcase your work
- [ ] All images optimized for web

#### SEO
- [ ] Meta titles and descriptions reviewed
- [ ] Local business schema markup configured
- [ ] Google My Business listing created/updated
- [ ] Service area pages accessible

#### Testing
- [ ] Contact form submission works
- [ ] All pages load without errors
- [ ] Mobile responsive design verified
- [ ] Performance scores acceptable (90+ on PageSpeed)

### Google Services Integration

#### Google My Business
1. Claim/create your Google My Business listing
2. Use the same business name, address, and phone as in `site-config.js`
3. Add photos from your project galleries
4. Update the GMB review URL in the configuration

#### Google Analytics (Optional)
Add your GA4 tracking ID to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Maintenance and Updates

### Regular Tasks
- **Monthly**: Update blog posts for SEO
- **Quarterly**: Add new project showcases  
- **Annually**: Review and update service areas, pricing

### Content Strategy
- Write blog posts targeting local keywords
- Document projects with before/after photos
- Collect and add client testimonials
- Update seasonal content (winter painting tips, etc.)

### Technical Maintenance
- Keep dependencies updated: `npm update`
- Monitor site performance with Google PageSpeed Insights
- Check for broken links quarterly
- Backup project regularly

## Troubleshooting

### Common Issues

**Contact Form Not Working**:
- Check environment variables are set correctly
- Verify Gmail app password (not regular password)
- Check firewall isn't blocking SMTP

**Images Not Loading**:
- Ensure images are in `/public/` directory
- Check file paths match exactly (case-sensitive)
- Verify image formats are web-compatible

**Location References Still Show "Queenstown"**:
- Search entire project for "Queenstown", "queenstown", "Little Dog"
- Check if blog posts need manual updates
- Verify `site-config.js` is properly imported

**Build Errors**:
- Run `npm run lint` to check for syntax errors
- Check all imports are correctly referenced
- Verify markdown frontmatter syntax

### Getting Help
- Check the Next.js documentation for framework issues
- Review the GitHub Issues for common problems
- Consider hiring a local web developer for custom modifications

## Customization Beyond Basic Setup

### Adding New Services
1. Update `services` array in `/data/services.js`
2. Create new service page in `/app/[service-slug]/page.tsx`
3. Add service to navigation menu

### Custom Color Scheme  
Update the theme colors in `/config/site-config.js`:
```javascript
theme: {
  primaryColor: "#your-color",
  secondaryColor: "#your-secondary", 
  accentColor: "#your-accent"
}
```

### Additional Locations
To serve multiple towns from one site:
1. Add all towns to `serviceAreas` array
2. Create location-specific landing pages
3. Update service pages to mention multiple locations

---

**Estimated Setup Time**: 30 minutes for basic setup, 2-4 hours for full customization with images and content.

**Support**: This template is designed to be self-service, but consider hiring a local web developer if you need extensive customizations or technical support.