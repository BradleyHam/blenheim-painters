import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Image 
            src="/ldd-logo.png" 
            alt="Little Dog Decorating" 
            width={120} 
            height={120}
            className="rounded-full"
          />
        </div>
        
        <h1 className="mb-4 text-6xl font-bold text-navy">404</h1>
        <h2 className="mb-6 text-2xl font-medium text-navy">Page Not Found</h2>
        <p className="mb-8 text-gray-600 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
          
          <Button asChild className="bg-gold hover:bg-gold-dark text-white">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 