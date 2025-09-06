'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '100vw',
  quality = 75,
  fill = false,
  style,
  ...props
}: OptimizedImageProps & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load when within 200px of viewport
        threshold: 0.01,
      }
    );
    
    const currentRef = document.getElementById(`img-wrapper-${src.replace(/[^a-zA-Z0-9]/g, '')}`);
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [src, priority]);
  
  return (
    <div 
      id={`img-wrapper-${src.replace(/[^a-zA-Z0-9]/g, '')}`}
      className={`relative ${className}`} 
      style={{ 
        ...style,
        aspectRatio: fill ? undefined : `${width} / ${height}`,
      }}
    >
      {(priority || isIntersecting) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          sizes={sizes}
          priority={priority}
          fill={fill}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          {...props}
        />
      )}
    </div>
  );
} 