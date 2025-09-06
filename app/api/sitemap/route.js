// Import the Sanity client directly to avoid dependency issues
import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  // Base URL for your website
  const baseUrl = 'https://www.littledogdecorating.co.nz';
  
  // Get current date for lastModified
  const currentDate = new Date().toISOString();
  
  // Static routes - updated with correct service page URLs
  const staticPages = [
    { url: '/', lastModified: currentDate, priority: "1.0" },
    { url: '/interior-painting-queenstown', lastModified: currentDate, priority: "0.9" },
    { url: '/exterior-painting-queenstown', lastModified: currentDate, priority: "0.9" },
    { url: '/roof-painting-queenstown', lastModified: currentDate, priority: "0.9" },
    { url: '/projects', lastModified: currentDate, priority: "0.8" },
    { url: '/blog', lastModified: currentDate, priority: "0.8" },
    { url: '/testimonials', lastModified: currentDate, priority: "0.7" },
    { url: '/contact', lastModified: currentDate, priority: "0.6" },
  ];
  
  // Get dynamic blog posts
  let blogPaths = [];
  try {
    const contentDir = path.join(process.cwd(), 'content');
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);
      
      blogPaths = files
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((filename) => {
          try {
            const filePath = path.join(contentDir, filename);
            const md = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(md);
            
            const slug = data.slug ?? filename.replace(/\.(md|mdx)$/, '');
            const postDate = data.date ? new Date(data.date).toISOString() : currentDate;
            
            return {
              url: `/blog/${slug}`,
              lastModified: postDate,
              priority: "0.7"
            };
          } catch (error) {
            console.error(`Error processing blog post ${filename}:`, error.message);
            return null;
          }
        })
        .filter(Boolean); // Remove any null entries
    }
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error.message);
  }
  
  // Get dynamic project routes
  let projectPaths = [];
  try {
    // Create Sanity client directly with environment variables
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';
    
    if (!projectId) {
      console.warn('Sanity project ID not found. Skipping dynamic project paths in sitemap.');
    } else {
      // Create a direct client instance
      const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
      });
      
      // Fetch project slugs and dates directly with GROQ
      const projects = await client.fetch(`*[_type == "project" && defined(slug.current)]{
        "slug": slug.current,
        "date": date,
        "_updatedAt": _updatedAt
      }`);
      
      // Format paths
      projectPaths = projects.map(project => ({
        url: `/projects/${project.slug}`,
        lastModified: project.date || project._updatedAt || currentDate,
        priority: "0.8"
      }));
    }
  } catch (error) {
    console.error('Failed to fetch project paths for sitemap:', error.message);
    // Continue with just static pages
  }
  
  // Combine all routes
  const allPages = [...staticPages, ...blogPaths, ...projectPaths];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=43200, s-maxage=43200' // Cache for 12 hours
    }
  });
} 