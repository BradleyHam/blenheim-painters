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
import { siteConfig, getSiteTitle, getServiceAreasText } from '@/config/site-config'
import { getLocalBusinessSchema } from '@/config/structured-data'

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
  metadataBase: new URL(siteConfig.website),
  title: getSiteTitle(),
  description: siteConfig.seoDefaults.description,
  keywords: siteConfig.seoDefaults.keywords.split(', '),
  authors: [{ name: siteConfig.businessName, url: siteConfig.website }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  openGraph: {
    title: getSiteTitle(),
    description: siteConfig.seoDefaults.description,
    url: siteConfig.website, 
    siteName: siteConfig.businessName,
    images: [
      {
        url: siteConfig.seoDefaults.ogImage, 
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} - Premium Painting Services`,
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: siteConfig.website,
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
      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
       
        
        {/* Remove preload for missing font file */}
        
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema())
          }}
        />
        
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
