'use client'

import Head from 'next/head'
// import { NextStudio } from 'next-sanity/studio'
// import config from '@/sanity.config'
import { useEffect } from 'react'

export default function StudioPage() {
  // Prevent the global styles from the app directory
  useEffect(() => {
    // Remove the app styles to prevent conflicts with studio styles
    const appStyles = document.getElementById('app-styles')
    if (appStyles) {
      appStyles.remove()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Sanity Studio | Little Dog Decorating</title>
      </Head>
      
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Sanity Studio</h1>
        <p>Studio access temporarily disabled during deployment. Please contact developer for access.</p>
      </div>
    </>
  )
}

// This prevents Next.js from applying any layouts from the app directory
StudioPage.getLayout = function getLayout(page: React.ReactElement) {
  return page
} 