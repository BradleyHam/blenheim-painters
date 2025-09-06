/* pages/blog/[slug].tsx */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CtaFooter from '@/app/experimental-components/CtaFooter';
import { notFound } from 'next/navigation';
import { mdToHtml } from '@/lib/markdown';
import BlogCtaButton from '@/components/ui/BlogCtaButton';
import RoofCostCalculator from '@/components/roof-cost-calculator';


type Frontmatter = {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  author: { name: string; title: string; image: string };
  relatedPosts: { title: string; slug: string; image: string }[];
  cover?: string;
  showCta?: boolean;
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content'));
  return files
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace(/\.(md|mdx)$/, '') }));
}

async function getPost(slug: string) {
  const dir = path.join(process.cwd(), 'content');
  const directPath = path.join(dir, `${slug}.md`);

  const file = fs.existsSync(directPath)
    ? directPath
    : fs
        .readdirSync(dir)
        .find((f) => matter(fs.readFileSync(path.join(dir, f), 'utf-8')).data.slug === slug)
        ? path.join(dir, fs
            .readdirSync(dir)
            .find((f) => matter(fs.readFileSync(path.join(dir, f), 'utf-8')).data.slug === slug)!)
        : null;

  if (!file) return null;

  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = matter(raw);
  return { frontmatter: data as Frontmatter, content };
}

// Generate structured data for SEO
function generateStructuredData(post: Frontmatter, url: string) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.cover ? post.cover : null,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.title
    },
    "publisher": {
      "@type": "Organization",
      "name": "Little Dog Decorating",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.littledogdecorating.co.nz/ldd-logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "31 Marston Road",
        "addressLocality": "Queenstown",
        "addressRegion": "Otago",
        "postalCode": "9304",
        "addressCountry": "New Zealand"
      },
      "telephone": "+64 21 632 938",
      "email": "hello@littledogdecorating.co.nz",
      "url": "https://www.littledogdecorating.co.nz",
      "sameAs": [
        "https://www.facebook.com/littledogdecorating",
        "https://www.instagram.com/littledogdecorating"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": post.tags.join(', ')
  };

  return JSON.stringify(structuredData);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getPost(slug);
  if (!data) notFound();

  const p = data.frontmatter;
  
  // Create the URL for the current page
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://little-dog-decorating.vercel.app';
  const currentUrl = `${baseUrl}/blog/${slug}`;

  // Process the content - remove the <RoofCostEstimate/> tag and render as HTML
  let processedContent = data.content;
  const hasCalculator = processedContent.includes('<RoofCostEstimate');
  
  // Remove the calculator tag from the content before converting to HTML
  processedContent = processedContent.replace(/<RoofCostEstimate[^>]*\/?>/, '');
  
  const html = await mdToHtml(processedContent);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateStructuredData(p, currentUrl) }}
      />
      
      {/* Hero */}
      <section className="relative  pt-20  min-h-[45vh] mx-5 rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/80 to-transparent z-10 rounded-xl" />
        {p.cover && (
          <Image
            src={p.cover}
            alt={p.title}
            fill
            priority
            className="object-cover rounded-xl "
          />
        )}
        <div className="container relative z-20 mx-auto px-4 py-16 md:py-24">
          <Link href="/blog" className="inline-flex items-center text-gold hover:text-gold/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex gap-3 mb-4">
            {p.categories.map((c, i) => (
              <Badge key={i} className="bg-gold text-white">
                {c}
              </Badge>
            ))}
          </div>

          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl !leading-tight mb-6 max-w-4xl">
            {p.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-200/90 mb-8">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold" />
              <span>{format(new Date(p.date), 'd MMM yyyy')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold" />
              <span>{p.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-gold" />
              <span>By {p.author.name}</span>
            </div>
          </div>

          <p className="text-white/90 text-lg md:text-xl max-w-3xl">
            {p.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Metadata bar */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span>{format(new Date(p.date), 'd MMM yyyy')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>{p.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-gold" />
                  <span>By {p.author.name}</span>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Conditionally render the calculator */}
            {hasCalculator && (
              <div className="my-12">
                <RoofCostCalculator />
              </div>
            )}

            {/* CTA Button - conditionally rendered */}
            {p.showCta && (
              <div className="my-12 p-8 bg-gold/10 rounded-xl border border-gold/20 text-center">
                <h3 className="text-2xl font-bold text-navy mb-3">Ready to get started?</h3>
                <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                  Professional exterior painting in Queenstown requires local expertise and climate-specific solutions.
                </p>
                <BlogCtaButton /> 
              </div>
            )}

            {/* Tags */}
            {p.tags?.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h4 className="text-navy font-medium mb-4 text-lg">Tagged with:</h4>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    // <Link key={i} href={`/blog/tag/${t.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Badge key={i}  className="bg-gray-100 hover:bg-navy hover:text-white text-navy transition-colors px-3 py-1.5 text-sm">{t}</Badge>
                    // </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            {/* <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-navy font-medium mb-4 text-lg">Share this article:</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Mail].map((Icon, i) => (
                  <Button key={i} variant="outline" size="icon" className="rounded-full h-10 w-10 border-gray-300 hover:border-navy hover:bg-navy hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div> */}

            {/* Author */}
            <div className="mt-16 p-8 bg-navy/5 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative w-28 h-28 flex-shrink-0">
                <Image
                  src={p.author.image || '/placeholder.svg'} 
                  alt={p.author.name}
                  width={112}
                  height={112}
                  className="rounded-full object-cover h-full w-full border-2 border-white shadow-md"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-sm text-gold uppercase tracking-wider font-medium mb-1 block">About the author</span>
                <h3 className="text-xl font-bold text-navy mb-2">{p.author.name}</h3>
                <p className="text-gray-600 mb-3">{p.author.title}</p>
                <p className="text-gray-600">Professional painter and decorator with over 15 years of experience in Queenstown's unique climate conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaFooter />
    </div>
  );
}