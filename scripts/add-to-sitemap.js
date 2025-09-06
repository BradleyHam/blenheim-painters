#!/usr/bin/env node

/**
 * Utility script to add new static pages to the sitemap
 * Usage: node scripts/add-to-sitemap.js /new-page-url 0.8
 */

const fs = require('fs');
const path = require('path');

function addStaticPageToSitemap(url, priority = '0.8') {
  const sitemapRoutePath = path.join(__dirname, '../app/api/sitemap/route.js');
  const sitemapTsPath = path.join(__dirname, '../app/sitemap.ts');
  
  if (!fs.existsSync(sitemapRoutePath)) {
    console.error('Sitemap route file not found:', sitemapRoutePath);
    return;
  }

  // Read the current sitemap route file
  let content = fs.readFileSync(sitemapRoutePath, 'utf8');
  
  // Prepare the new entry
  const newEntry = `    { url: '${url}', lastModified: currentDate, priority: "${priority}" },`;
  
  // Find the end of the staticPages array and insert before the closing bracket
  const staticPagesEndRegex = /(.*staticPages = \[[\s\S]*?)(  \];)/;
  const match = content.match(staticPagesEndRegex);
  
  if (match) {
    // Check if URL already exists
    if (content.includes(`url: '${url}'`)) {
      console.log(`URL ${url} already exists in sitemap`);
      return;
    }
    
    const beforeClosing = match[1];
    const closing = match[2];
    
    const updatedContent = content.replace(
      staticPagesEndRegex,
      `${beforeClosing}${newEntry}\n${closing}`
    );
    
    fs.writeFileSync(sitemapRoutePath, updatedContent);
    console.log(`Added ${url} to sitemap route with priority ${priority}`);
  } else {
    console.error('Could not find staticPages array in sitemap route');
  }

  // Also update the TypeScript sitemap file
  if (fs.existsSync(sitemapTsPath)) {
    let tsContent = fs.readFileSync(sitemapTsPath, 'utf8');
    
    if (!tsContent.includes(`url: \`\${baseUrl}${url}\``)) {
      const tsNewEntry = `    {
      url: \`\${baseUrl}${url}\`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: ${priority},
    },`;
      
      const tsStaticPagesEndRegex = /(.*staticPages = \[[\s\S]*?)(  \])/;
      const tsMatch = tsContent.match(tsStaticPagesEndRegex);
      
      if (tsMatch) {
        const tsBeforeClosing = tsMatch[1];
        const tsClosing = tsMatch[2];
        
        const tsUpdatedContent = tsContent.replace(
          tsStaticPagesEndRegex,
          `${tsBeforeClosing}${tsNewEntry}\n${tsClosing}`
        );
        
        fs.writeFileSync(sitemapTsPath, tsUpdatedContent);
        console.log(`Added ${url} to TypeScript sitemap with priority ${priority}`);
      }
    } else {
      console.log(`URL ${url} already exists in TypeScript sitemap`);
    }
  }
}

function listSitemapPages() {
  const sitemapRoutePath = path.join(__dirname, '../app/api/sitemap/route.js');
  
  if (!fs.existsSync(sitemapRoutePath)) {
    console.error('Sitemap route file not found');
    return;
  }

  const content = fs.readFileSync(sitemapRoutePath, 'utf8');
  const urlRegex = /url: '([^']+)'/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  
  console.log('Current static pages in sitemap:');
  urls.forEach(url => console.log(`  ${url}`));
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Sitemap Management Script');
  console.log('');
  console.log('Usage:');
  console.log('  node scripts/add-to-sitemap.js <url> [priority]');
  console.log('  node scripts/add-to-sitemap.js --list');
  console.log('');
  console.log('Examples:');
  console.log('  node scripts/add-to-sitemap.js /new-service-page 0.8');
  console.log('  node scripts/add-to-sitemap.js /about 0.7');
  console.log('  node scripts/add-to-sitemap.js --list');
  process.exit(0);
}

if (args[0] === '--list' || args[0] === '-l') {
  listSitemapPages();
} else {
  const url = args[0];
  const priority = args[1] || '0.8';
  
  if (!url.startsWith('/')) {
    console.error('URL must start with /');
    process.exit(1);
  }
  
  addStaticPageToSitemap(url, priority);
} 