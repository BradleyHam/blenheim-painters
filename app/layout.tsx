import type React from "react"
import "./globals.css"
import { Figtree } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Toaster } from 'sonner'
import GlobalCta from '@/components/ui/GlobalCta'
import { cn } from "@/lib/utils"
import PerformanceOptimizerLoader from '@/components/performance/PerformanceOptimizerLoader'

const figtree = Figtree({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-figtree'
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.littledogdecorating.co.nz'), // Replace with your actual domain
  title: 'Little Dog Decorating | Premium Painters in Queenstown & Arrowtown',
  description: 'Queenstown\'s premier painting specialists serving Queenstown, Arrowtown, and surrounding areas. Expert interior and exterior painting with 15+ years experience.',
  keywords: [
    'Queenstown painter',
    'Arrowtown painter',
    'luxury painting services',
    'interior painting NZ',
    'exterior painting Queenstown',
    'residential painting',
    'professional decorating',
    'Little Dog Decorating',
    'painting contractor Queenstown',
    'house painters NZ',
    'luxury home painting'
  ],
  authors: [{ name: 'Little Dog Decorating', url: 'https://www.littledogdecorating.co.nz' }],
  creator: 'Little Dog Decorating',
  publisher: 'Little Dog Decorating',
  openGraph: {
    title: 'Little Dog Decorating | Premium Painter Queenstown & Arrowtown',
    description:
      'Luxury residential painting services in Queenstown & Arrowtown. Quality workmanship and premium finishes.',
    url: 'https://www.littledogdecorating.co.nz', 
    siteName: 'Little Dog Decorating',
    images: [
      {
        url: '/interior-queenstown.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Little Dog Decorating - Premium Painting Services',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.littledogdecorating.co.nz',
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3djpqzPB7BN9gzLPyrr8Oxmi7oHwaJYfPvlHvn-eh24',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A2342', // Match your navy color  
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className={cn(figtree.variable)} suppressHydrationWarning>
      <head>
        {/* Resource Hints - Preconnect to reduce connection time */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        
        {/* Remove preload for missing font file */}
        
        <script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=G-YJ82QQKJ32`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YJ82QQKJ32', { 'send_page_view': false });
              window.addEventListener('load', function() {
                gtag('event', 'page_view');
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (c, s, q, u, a, r, e) {
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings = { hjid: a };
                r = s.getElementsByTagName('head')[0];
                e = s.createElement('script');
                e.async = true;
                e.src = q + c._hjSettings.hjid + u;
                r.appendChild(e);
              })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6413538);
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Little Dog Decorating',
            'image': 'https://www.littledogdecorating.co.nz/interior-queenstown.jpeg',
            'url': 'https://www.littledogdecorating.co.nz',
            'telephone': '+64 21 632 938', 
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': ' 31 Marston Road', 
              'addressLocality': 'Queenstown',
              'addressRegion': 'Otago',
              'postalCode': '9304', 
              'addressCountry': ' New Zealand'
            },
           'geo': {
              '@type': 'GeoCoordinates',
              'latitude': -45.0053199,
              'longitude': 168.7705183
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              'opens': '08:00',
              'closes': '17:00'
            },
            'sameAs': [
              'https://www.facebook.com/littledogdecorating', // Add your actual social links
              'https://www.instagram.com/littledogdecorating'
            ],
            'priceRange': '$$',
            'description': 'Queenstown\'s premier painting specialists serving Queenstown, Arrowtown, and surrounding areas. Expert interior and exterior painting with 15+ years experience.'
          })
        }}/>
      </head>
      <body className="font-figtree">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          <main>{children}</main>
          <Footer />
          <GlobalCta />
          <Toaster position="top-right" richColors />
          <PerformanceOptimizerLoader />
        </ThemeProvider>
      </body>
    </html>
  )
}
