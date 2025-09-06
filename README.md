# 🎨 NZ Painter Template

A fully-featured, customizable Next.js template designed specifically for painting companies across New Zealand. Transform this template into a professional website for any NZ town in under 30 minutes.

## ✨ Features

- **🚀 Quick Setup**: Configure for any NZ town in 30 minutes
- **📱 Fully Responsive**: Mobile-first design that looks great everywhere
- **🔍 SEO Optimized**: Built-in local SEO with structured data
- **📝 Markdown CMS**: Easy content management without databases
- **⚡ Fast Performance**: Optimized for speed and Core Web Vitals
- **🎯 Local-First**: Designed specifically for NZ service businesses
- **📧 Contact Forms**: Working contact forms with email integration
- **📊 Analytics Ready**: Easy integration with Google Analytics

## 🏗️ Built With

- **Next.js 15** - React framework for production
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Gray Matter** - Markdown frontmatter parser
- **Remark** - Markdown processor

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone [your-repo-url] my-painter-website
cd my-painter-website
npm install
```

### 2. Configure for Your Town (10 minutes)
Edit `config/site-config.js`:

```javascript
export const siteConfig = {
  businessName: "Your Painting Business",
  townName: "Wellington",
  townNameLower: "wellington", 
  phoneNumber: "+64 XX XXX XXX",
  email: "your-email@domain.com",
  serviceAreas: ["Wellington", "Lower Hutt", "Upper Hutt"],
  website: "https://your-domain.com"
  // ... update other fields
}
```

### 3. Setup Environment Variables (5 minutes)
```bash
cp .env.example .env.local
# Edit .env.local with your email settings
```

### 4. Replace Key Images (10 minutes)
- Logo: `/public/ldd-logo.png`
- Hero: `/public/hero-bg.jpg` 
- Owner photo: `/public/dan.jpg`
- Project galleries in `/public/projects/`

### 5. Deploy
```bash
npm run build
npm start
```

## 📖 Detailed Setup Guide

👉 **See [SETUP.md](./SETUP.md)** for comprehensive setup instructions.

👉 **See [docs/IMAGES_TO_REPLACE.md](./docs/IMAGES_TO_REPLACE.md)** for image requirements.

## 🎯 What's Included

### Pages
- 🏠 **Homepage** - Hero, services overview, testimonials
- 🎨 **Service Pages** - Interior, exterior, and roof painting  
- 📁 **Projects** - Portfolio showcase with markdown content
- ✍️ **Blog** - SEO-optimized blog system
- 📞 **Contact** - Contact form with email integration
- ⭐ **Testimonials** - Customer reviews and ratings

### Components
- 📱 **Responsive Navigation** - Mobile-friendly header
- 🎛️ **Interactive Elements** - Accordions, modals, forms
- 📊 **SEO Components** - Structured data, meta tags
- 🖼️ **Image Optimization** - Next.js Image component
- 📝 **Markdown Rendering** - Rich content from markdown

### Content Management
- 📝 **Blog Posts** - Write in markdown, automatic rendering
- 🏗️ **Project Showcases** - Before/after galleries  
- 💬 **Testimonials** - Customer reviews with ratings
- ❓ **FAQ System** - Searchable questions and answers
- 📋 **Service Descriptions** - Detailed service offerings

## 🎨 Customization

### Colors and Branding
Update theme colors in `config/site-config.js`:
```javascript
theme: {
  primaryColor: "#2563eb",
  secondaryColor: "#7c3aed", 
  accentColor: "#f59e0b"
}
```

### Adding Services
1. Add to `data/services.js`
2. Create service page in `app/[service-slug]/`
3. Update navigation

### Content Updates
- **Blog**: Add `.md` files to `content/blog/`
- **Projects**: Add `.md` files to `content/projects/`
- **Testimonials**: Update `data/testimonials.js`
- **FAQ**: Update `data/faq.js`

## 📧 Email Setup

The template includes working contact forms. Set up email delivery:

### Gmail (Recommended)
1. Enable 2FA on Gmail
2. Generate App Password
3. Add to `.env.local`:
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLIENT_EMAIL=your-business-email@gmail.com
```

## 🔍 SEO Features

- ✅ **Local Business Schema** - Rich snippets for Google
- ✅ **OpenGraph Tags** - Social media previews
- ✅ **Service Area Pages** - Town-specific landing pages
- ✅ **Blog SEO** - Optimized blog posts for local keywords
- ✅ **Sitemap Generation** - Automatic sitemap.xml
- ✅ **Mobile Optimization** - Perfect mobile experience

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

### Other Options
- **Netlify** - Great for static hosting
- **DigitalOcean** - Full control with VPS
- **Railway** - Simple deployment platform

## 📊 Performance

This template is optimized for:
- ⚡ **Core Web Vitals** - 90+ scores on PageSpeed Insights
- 🖼️ **Image Optimization** - WebP, lazy loading, responsive images
- 📦 **Bundle Size** - Optimized JavaScript bundles
- 🔄 **Caching** - Efficient caching strategies

## 🛠️ Development

### Run Locally
```bash
npm run dev          # Development server
npm run build        # Production build  
npm run start        # Production server
npm run lint         # ESLint checking
```

### Project Structure
```
📁 config/           # Site configuration
📁 content/          # Markdown content
  📁 blog/          # Blog posts
  📁 projects/      # Project showcases
📁 data/            # Structured data (testimonials, FAQ)
📁 app/             # Next.js app directory
📁 components/      # React components
📁 lib/             # Utility functions
📁 public/          # Static assets
```

## 🤝 Contributing

This is a template designed for painting companies. If you make improvements:

1. Fork the repository
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Started
1. Read [SETUP.md](./SETUP.md) for detailed instructions
2. Check [docs/IMAGES_TO_REPLACE.md](./docs/IMAGES_TO_REPLACE.md) for image requirements
3. Review the example content in `content/` directories

### Common Issues
- **Email not working**: Check `.env.local` and Gmail app password setup
- **Images not loading**: Ensure images are in correct `/public/` directories
- **Build errors**: Run `npm run lint` to check for syntax errors

### Professional Help
If you need custom development or have complex requirements, consider hiring a local web developer familiar with Next.js.

## 🌟 Made for NZ Painters

This template was specifically designed for painting companies in New Zealand, with:

- 🇳🇿 **NZ-specific content** - Local terminology and practices
- 🏘️ **Town-based setup** - Easy customization for any NZ town
- 🌦️ **Climate considerations** - Content addressing NZ weather
- 💼 **Local business focus** - Features relevant to service businesses
- 📱 **Mobile-first** - Optimized for mobile users

Transform your painting business with a professional website that converts visitors into customers!

---

**Estimated setup time**: 30 minutes for basic customization, 2-4 hours for full customization with original content and images.