'use client';

import React, { useRef, useEffect, useState } from 'react';

interface OptimizedPageWrapperProps {
  children: React.ReactNode;
  priority?: boolean;
  className?: string;
}

/**
 * OptimizedPageWrapper - Wraps page content with performance optimizations
 * - Implements progressive hydration
 * - Reduces unnecessary renders
 * - Optimizes resource loading order
 */
export default function OptimizedPageWrapper({
  children,
  priority = false,
  className = '',
}: OptimizedPageWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(priority);
  
  useEffect(() => {
    if (priority) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.01,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, observerOptions);
    
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [priority]);
  
  // Optimize image loading on page
  useEffect(() => {
    if (!isVisible || !wrapperRef.current) return;
    
    // Find all images that should be lazy loaded
    const imagesToLazyLoad = wrapperRef.current.querySelectorAll('img:not([loading])');
    imagesToLazyLoad.forEach(img => {
      if (!img.hasAttribute('data-priority')) {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
      }
    });
    
    // Find all elements with data-src attribute (for custom lazy loading)
    const lazyElements = wrapperRef.current.querySelectorAll('[data-src]');
    lazyElements.forEach(el => {
      const src = el.getAttribute('data-src');
      if (src) {
        el.setAttribute('src', src);
        el.removeAttribute('data-src');
      }
    });
  }, [isVisible]);
  
  // Implement CSS containment for better paint performance
  const containmentStyle: React.CSSProperties = {
    contain: 'content',
  };
  
  return (
    <div 
      ref={wrapperRef}
      className={`optimized-page-wrapper ${className}`}
      style={containmentStyle}
    >
      {(priority || isVisible) && children}
    </div>
  );
} 