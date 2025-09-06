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

### 3. Replace Key Images (10 minutes)
Minimum required image replacements:

- `/public/ldd-logo.png` → Your business logo
- `/public/favicon.ico` → Your favicon
- `/public/hero-bg.jpg` → Your town hero image  
- `/public/dan.jpg` → Business owner photo
- Replace at least 3 project galleries in `/public/projects/`

### 4. Test and Deploy (5 minutes)
```bash
npm run dev    # Test locally
npm run build  # Build for production
```

## Detailed Setup Instructions

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

## Image Management

### Critical Images (Must Replace)
1. **Logo**: `/public/ldd-logo.png` (300x150px recommended)
2. **Favicon**: `/public/favicon.ico` (32x32px)
3. **Hero Background**: `/public/hero-bg.jpg` (1920x1080px minimum)
4. **Owner Photo**: `/public/dan.jpg` (400x400px)

### Project Images
Replace project galleries in these directories:
- `/public/arrowtown-exterior/` → `/public/[your-area]-exterior/`
- `/public/wakatipu-heights-repaint/` → `/public/[your-area]-repaint/`
- `/public/milbrook-cedar/` → `/public/[your-area]-cedar/`

Maintain same directory structure and naming patterns.

### Image Optimization
For best performance:
- Use WebP format when possible (with JPG fallbacks)
- Compress images to <500KB for large images
- Include descriptive alt text
- Use location-specific filenames for SEO

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