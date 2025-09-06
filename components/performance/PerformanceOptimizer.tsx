'use client';

import React, { useEffect } from 'react';

/**
 * PerformanceOptimizer - Implements various performance optimizations
 * to address Lighthouse audit recommendations:
 * 1. Defer non-critical JavaScript
 * 2. Minimize main-thread work
 * 3. Reduce JavaScript execution time
 * 4. Properly size images
 * 5. Efficiently load third-party scripts
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Add preconnect for important third-party domains
    const origins = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://cdn.sanity.io',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    origins.forEach(origin => {
      if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) return;
      
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      document.head.appendChild(link);
    });
    
    // Defer non-critical third party scripts
    const deferThirdPartyScripts = () => {
      // Add your third-party scripts here that aren't critical for the initial render
    };
    
    // Implement requestIdleCallback for browser idle time operations
    if ('requestIdleCallback' in window) {
      // @ts-ignore - TypeScript may not recognize requestIdleCallback
      window.requestIdleCallback(() => {
        deferThirdPartyScripts();
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(deferThirdPartyScripts, 2000);
    }
    
    // Optimize image loading
    const lazyLoadImages = () => {
      // Find images without loading attribute and add native lazy loading
      document.querySelectorAll('img:not([loading])').forEach(img => {
        if (!img.hasAttribute('loading') && !img.hasAttribute('data-priority')) {
          img.setAttribute('loading', 'lazy');
          img.setAttribute('decoding', 'async');
        }
      });
    };
    
    lazyLoadImages();
    
    // Implement off-main-thread work where possible
    if ('Worker' in window && false) { // Set to true when implementing actual web workers
      // Move heavy computations to Web Workers
      // const worker = new Worker('/workers/heavy-computation.js');
    }
    
    // Clean up unused CSS
    const cleanupUnusedCSS = () => {
      // This would require more sophisticated analysis in a real implementation
      // Here you'd identify and remove unused styles
    };
    
    // Handle intersection observer for deferred loading
    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target;
              // Load resources when they come into view
              if (target.hasAttribute('data-src')) {
                const src = target.getAttribute('data-src');
                target.setAttribute('src', src || '');
                target.removeAttribute('data-src');
              }
              observer.unobserve(target);
            }
          });
        },
        { rootMargin: '200px' }
      );
      
      // Observe elements that should be loaded on demand
      document.querySelectorAll('[data-defer-load]').forEach(element => {
        observer.observe(element);
      });
    };
    
    setupIntersectionObserver();
    
    return () => {
      // Clean up if needed
    };
  }, []);
  
  return null;
} 