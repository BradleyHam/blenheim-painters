'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import PerformanceOptimizer on client side only
const PerformanceOptimizer = dynamic(
  () => import('./PerformanceOptimizer'),
  { ssr: false }
);

/**
 * Client component wrapper for the PerformanceOptimizer
 * This solves the issue of using dynamic imports with ssr: false in server components
 */
export default function PerformanceOptimizerLoader() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    // Force CSS reloading if needed
    const loadCSS = () => {
      try {
        // Try to inject Tailwind styles directly if they're missing
        if (!document.querySelector('style[data-tailwind-injected="true"]')) {
          const styleElement = document.createElement('style')
          styleElement.setAttribute('data-tailwind-injected', 'true')
          
          // Add minimal critical CSS to ensure basic styles work
          styleElement.textContent = `
            body { font-family: system-ui, sans-serif; }
            .bg-navy { background-color: #0F1A3A; }
            .bg-gold { background-color: #E6A817; }
            .text-white { color: white; }
            .text-navy { color: #0F1A3A; }
            .bg-gray-50 { background-color: #f9fafb; }
          `
          document.head.appendChild(styleElement)
        }
      } catch (error) {
        console.error('Error injecting CSS', error)
      }
    }
    
    loadCSS()
  }, [])
  
  if (!isMounted) return null;
  
  return <PerformanceOptimizer />;
} 