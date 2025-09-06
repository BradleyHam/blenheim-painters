# Dynamic Sitemap System

This project uses a dynamic sitemap generation system that automatically includes new blog posts and project pages.

## How it Works

The sitemap is generated dynamically using two approaches:

1. **API Route**: `/app/api/sitemap/route.js` - Generates XML sitemap at `/sitemap.xml`
2. **Next.js Sitemap**: `/app/sitemap.ts` - Native Next.js sitemap for better SEO integration

## What's Included

### Static Pages
- Homepage (`/`)
- Interior Painting (`/interior-painting-queenstown`)
- Exterior Painting (`/exterior-painting-queenstown`)
- Roof Painting (`/roof-painting-queenstown`)
- Projects listing (`/projects`)
- Blog listing (`/blog`)
- Testimonials (`/testimonials`)
- Contact (`/contact`)

### Dynamic Pages
- **Blog Posts**: Auto-generated from markdown files in `/content/` directory
- **Project Pages**: Auto-generated from Sanity CMS projects

## Automatic Updates

### When Blog Posts Are Added
1. Add new `.md` or `.mdx` file to `/content/` directory
2. Sitemap automatically includes the new post on next generation
3. Uses the `date` frontmatter field for `lastModified`
4. Uses the `slug` frontmatter field or filename for URL

### When Projects Are Added
1. Add new project in Sanity CMS
2. Sitemap automatically includes the project page
3. Uses the project's `date` or `_updatedAt` for `lastModified`

## Manual Revalidation

You can trigger sitemap revalidation using the webhook endpoint:

```bash
curl -X POST https://www.littledogdecorating.co.nz/api/revalidate-sitemap \
  -H "Authorization: Bearer YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "manual", "reason": "content updated"}'
```

Set `REVALIDATION_SECRET` in your environment variables.

## Caching

- Sitemap is cached for 12 hours (`Cache-Control: public, max-age=43200`)
- Automatically regenerates when cache expires
- Can be manually revalidated using the webhook

## SEO Benefits

1. **Fresh Content Discovery**: Search engines quickly discover new blog posts and projects
2. **Proper Priorities**: Homepage has highest priority (1.0), service pages (0.9), content pages (0.7-0.8)
3. **Accurate Dates**: Uses actual content dates for better crawling frequency
4. **XML Compliance**: Follows XML sitemap protocol standards

## Utilities

Use the helper functions in `/lib/sitemap-utils.ts`:

```typescript
import { getAllPages, getBlogPages, getProjectPages } from '@/lib/sitemap-utils'

// Get all pages for sitemap
const pages = await getAllPages()

// Get only blog pages
const blogPages = await getBlogPages()

// Get only project pages
const projectPages = await getProjectPages()
```

## Troubleshooting

### Blog Posts Not Appearing
1. Check file is `.md` or `.mdx` in `/content/` directory
2. Verify frontmatter has valid `slug` and `date` fields
3. Check file permissions and syntax

### Projects Not Appearing
1. Verify Sanity environment variables are set
2. Check project has `slug.current` field in Sanity
3. Ensure project is published in Sanity

### Sitemap Not Updating
1. Check cache expiration (12 hours)
2. Use revalidation webhook to force update
3. Verify Next.js rewrite rule in `next.config.mjs`

## Environment Variables

Required for full functionality:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
REVALIDATION_SECRET=your_secret_for_webhooks
``` 