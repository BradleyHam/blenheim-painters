/* pages/blog/index.tsx */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import readingTime from 'reading-time';
import { Badge } from '@/components/ui/badge';
import CtaFooter from '../experimental-components/CtaFooter';

export const metadata = {
  title: 'Blog | Little Dog Decorating',
  description:
    "Interior and exterior painting tips, ideas, and inspiration from Queenstown's premier painting specialists."
};

async function getBlogPosts() {
  const postsDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((filename) => {
      const md = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { data } = matter(md);

      return {
        slug: data.slug ?? filename.replace('.md', ''),
        title: data.title ?? 'Untitled',
        date: data.date ?? new Date().toISOString(),
        readTime: readingTime(md).text,
        excerpt:
          data.excerpt ??
          md.split('\n').slice(4, 12).join(' ').slice(0, 160) + '…',
        author: data.author?.name ?? 'Unknown',
        categories: data.categories ?? [],
        cover: data.cover ?? '/placeholder.svg'
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex min-h-screen flex-col bg-white">
        <div className="page-header h-[300px] lg:h-[500px] mx-5 rounded-lg relative">
        <Image 
          src="/queenstown.jpg" 
          alt="Exterior Painting" 
          fill 
          priority
          className="object-cover rounded-lg" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-navy/90 to-transparent rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-6 lg:p-12 space-y-2">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl font-semibold tracking-tight">Queenstown Painter&apos;s Journal</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            What we&apos;ve learned on the job, what works, and what makes homes
            in Queenstown truly shine.
          </p>
        </div>
      </div>

      {/* Latest */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px bg-gray-200 flex-grow" />
              <h2 className="text-3xl font-bold text-navy flex-shrink-0">
                Latest Articles
              </h2>
              <div className="h-px bg-gray-200 flex-grow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 ease-in-out group hover:shadow-lg hover:-translate-y-1"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block relative h-64 overflow-hidden"
                  >
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.categories.map((cat: string, i: number) => (
                        <Badge
                          key={i}
                          className="bg-navy hover:bg-navy-light text-white"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </Link>

                  <div className="p-6 space-y-3">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-gold" />
                        <span>{format(new Date(post.date), 'd MMM yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-gold" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="h-4 w-4 text-gold" />
                        <span>By {post.author}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 !mt-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-navy font-medium hover:text-gold pt-2"
                    >
                      Read More <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}