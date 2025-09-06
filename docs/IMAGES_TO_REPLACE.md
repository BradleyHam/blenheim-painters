# Images to Replace - Painter Template

This document lists all images that need to be replaced when customizing the template for a new town/business. Images are organized by category with descriptions and recommended dimensions.

## Hero and Main Sections

### Primary Hero Images
- **File**: `/public/hero-bg.jpg`
  - **Current**: Queenstown landscape
  - **Replace with**: Local town/area hero landscape image
  - **Dimensions**: 1920x1080px minimum
  - **Usage**: Main homepage hero background

- **File**: `/public/queenstown.jpg`
  - **Current**: Queenstown scenic view
  - **Replace with**: Main town scenic view
  - **Dimensions**: 1200x800px
  - **Usage**: About section and general marketing

### Business Identity Images

#### Logo and Branding
- **File**: `/public/ldd-logo.png`
  - **Current**: Little Dog Decorating logo
  - **Replace with**: New business logo (PNG with transparent background)
  - **Dimensions**: 300x150px recommended
  - **Usage**: Header, footer, favicon

- **File**: `/public/ldd-logo-compressed.webp`
  - **Current**: Compressed logo for web
  - **Replace with**: Optimized logo for fast loading
  - **Dimensions**: 300x150px
  - **Usage**: Header navigation, mobile

- **File**: `/public/favicon.ico`
  - **Current**: Little Dog icon
  - **Replace with**: New business favicon
  - **Dimensions**: 32x32px ICO format
  - **Usage**: Browser tab icon

- **File**: `/public/little-dog-decorating-logo--queenstown-painter.webp`
  - **Current**: SEO-optimized logo with location
  - **Replace with**: [Business Name] - [Town] Painter logo
  - **Dimensions**: 400x200px
  - **Usage**: SEO, social sharing

#### Business Photos
- **File**: `/public/dan.jpg`
  - **Current**: Business owner Dan
  - **Replace with**: New business owner photo
  - **Dimensions**: 400x400px
  - **Usage**: About section, testimonials

- **File**: `/public/about-image.jpg`
  - **Current**: Team/business photo
  - **Replace with**: New team or business image
  - **Dimensions**: 600x400px
  - **Usage**: About section

- **File**: `/public/little-dog-decorating-company-vehicle.jpg`
  - **Current**: Company van with Queenstown branding
  - **Replace with**: New company vehicle (if applicable)
  - **Dimensions**: 800x600px
  - **Usage**: About section, contact page

## Project Portfolio Images

### Before/After Galleries
**Location**: `/public/projects/[project-name]/`

Current project folders that need complete replacement:
- `/public/arrowtown-exterior/` - Arrowtown exterior project
- `/public/wakatipu-heights-repaint/` - Interior project 
- `/public/milbrook-cedar/` - Cedar restoration project
- `/public/deck-repaint/` - Deck refinishing project
- `/public/ap-repaint/` - Interior wallpaper project

**For each project folder**:
- Replace all images with new local projects
- Maintain naming convention: `[location]-[service]-[before/after/detail].jpg`
- Recommended dimensions: 1200x800px for main images, 800x600px for details
- Include both WebP and JPG formats for optimization

### Service-Specific Images

#### Interior Painting
**Directory**: `/public/interiors/`
- **Current images**: Interior projects in Queenstown/Arrowtown
- **Replace with**: Local interior projects
- **Naming**: `interior-[location]-[room-type].jpg`
- **Dimensions**: 1200x900px

#### Exterior Painting  
**Directory**: `/public/exteriors/`
- **Current images**: Exterior projects with local landmarks
- **Replace with**: Local exterior projects
- **Naming**: `exterior-[location]-[building-type].jpg`
- **Dimensions**: 1200x800px

#### Roof Painting
**Directory**: `/public/roof-painting/`
- **Files to replace**:
  - `roof-in-queenstown.jpg` → `roof-in-[townname].jpg`
  - `roof-painted-in-queenstown.jpg` → `roof-painted-in-[townname].jpg`
  - `roof-painting-in-queenstown.jpg` → `roof-painting-in-[townname].jpg`
- **Keep generic images**: `cartoon-roof.png`, `spraying-roof.png` (these are generic)

## Blog and Content Images

### Blog Post Images
**Directory**: `/public/blog/`
- Create this directory and add:
  - `coastal-painting.jpg` - For coastal homes article
  - `winter-painting.jpg` - For winter painting tips
  - `color-trends-2025.jpg` - For color trends article
- **Dimensions**: 1200x630px (optimal for social sharing)

### Testimonial Images
- **Files**: `/public/testimonial-1.jpg`, `/public/testimonial-2.jpg`, `/public/testimonial-3.jpg`
- **Current**: Generic placeholder photos
- **Replace with**: Real client photos (with permission) or better stock photos
- **Dimensions**: 300x300px
- **Usage**: Testimonials section

## Service Process Images

### Step-by-Step Process
**Directory**: `/public/services/`

#### Interior Process
**Subdirectory**: `/public/services/interior/`
- Keep generic process images (these don't need town-specific replacement):
  - `prep.png`, `protection.png`, `rolling.png`, `spray.png`, `cleaning.png`
- Replace location-specific images:
  - `room-fully-masked.jpg` → Use local project photo
  - `tv-masking.webp` → Use local project detail

#### Exterior Process  
**Subdirectory**: `/public/services/exterior/`
- Keep generic: `masking.png`, `prep.png`, `protection.png`, `sweeping.png`
- Replace specific: `exterior-repaint-queenstown.webp` → `exterior-repaint-[townname].webp`

## Placeholder and Generic Images

### Keep As-Is (No replacement needed)
- `/public/placeholder.jpg` - Generic placeholder
- `/public/placeholder.svg` - SVG placeholder  
- `/public/placeholder-user.jpg` - Generic user avatar
- `/public/placeholder-logo.png` - Generic logo placeholder
- `/public/brushstroke.svg` - Decorative element
- Service process illustrations (prep, protection, etc.)

### Maps and Location
- **File**: `/public/map.jpg`
  - **Current**: Queenstown area map
  - **Replace with**: New service area map
  - **Dimensions**: 800x600px
  - **Usage**: Contact/service area page

## Certification and Credentials

### Professional Certifications
- **File**: `/public/master-painter.png`
  - **Current**: Master Painter certification
  - **Action**: Update if different certifications, or keep if same
  - **Dimensions**: 300x200px

- **File**: `/public/bcito-cert.png`
  - **Current**: BCITO certification
  - **Action**: Update if different certifications, or keep if same
  - **Dimensions**: 300x200px

## Image Optimization Guidelines

### File Formats
- **JPG**: For photographs, especially complex images
- **PNG**: For logos, graphics with transparency
- **WebP**: Optimized versions for faster loading (provide fallbacks)
- **SVG**: For simple icons and graphics

### Compression Standards
- **Hero images**: 80-85% quality
- **Portfolio images**: 85-90% quality  
- **Thumbnails**: 75-80% quality
- **File size targets**: <500KB for large images, <100KB for thumbnails

### SEO Optimization
- **Alt text**: Include location and service keywords
- **Filename**: Use descriptive names with hyphens
- **Example**: `interior-painting-wellington-living-room.jpg`

## Content Rights and Sources

### Required Image Rights
- **Own photography**: Best option - original project photos
- **Client permissions**: Written permission for client home photos
- **Stock photography**: Ensure commercial license for business use
- **Free alternatives**: Unsplash, Pexels (verify commercial use)

### Recommended Photo Sources
1. **Professional photographer**: Hire locally for hero shots and key images
2. **Client project photos**: Document work with client permission
3. **Stock photography**: [Service area] + "painting" + "homes" searches
4. **Local tourism boards**: Often have free town/landscape images

## Implementation Checklist

### Phase 1: Critical Images (Launch Blockers)
- [ ] Logo and favicon
- [ ] Hero background image
- [ ] Business owner photo
- [ ] At least 3 project before/after sets

### Phase 2: Portfolio Enhancement
- [ ] Replace all project galleries
- [ ] Update service process photos
- [ ] Add blog post images

### Phase 3: Polish and Optimization  
- [ ] Optimize all images for web
- [ ] Create WebP versions
- [ ] Update alt text and filenames
- [ ] Test loading speeds

## Image Naming Convention

### Recommended Pattern
`[service]-[location]-[detail]-[type].extension`

**Examples**:
- `exterior-painting-wellington-villa-before.jpg`
- `interior-painting-auckland-kitchen-after.jpg`
- `roof-painting-christchurch-process-1.jpg`

### Benefits
- SEO-friendly filenames
- Easy to organize and find
- Consistent structure across template instances
- Clear purpose and content identification

---

**Note**: When replacing images, maintain the same directory structure and similar filenames to avoid broken links. Update the markdown content files if you change any image paths or filenames.