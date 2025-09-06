/**
 * Utility functions for optimizing script loading and reducing main thread work
 */

// Type declarations for global methods that might not be in TypeScript's standard library
interface Window {
  requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
}

/**
 * Loads a script after the main content has loaded
 * @param src - Script URL to load
 * @param id - Unique ID for the script
 * @param attributes - Additional script attributes
 */
export function loadScriptAfterInteractive(src: string, id: string, attributes: Record<string, string> = {}) {
  if (typeof window === 'undefined') return;
  
  // Create script element
  const scriptElement = document.createElement('script');
  scriptElement.src = src;
  scriptElement.id = id;
  
  // Add attributes
  Object.entries(attributes).forEach(([key, value]) => {
    scriptElement.setAttribute(key, value);
  });
  
  // Insert before first script or append to body
  const insertPoint = document.getElementsByTagName('script')[0] || document.body;
  insertPoint.parentNode?.insertBefore(scriptElement, insertPoint);
}

/**
 * Loads a script during browser idle time to minimize main thread work
 * @param src - Script URL to load
 * @param id - Unique ID for the script
 * @param attributes - Additional script attributes
 */
export function loadScriptOnIdle(src: string, id: string, attributes: Record<string, string> = {}) {
  if (typeof window === 'undefined') return;
  
  const load = () => {
    if (document.getElementById(id)) return;
    
    const scriptElement = document.createElement('script');
    scriptElement.src = src;
    scriptElement.id = id;
    
    Object.entries(attributes).forEach(([key, value]) => {
      scriptElement.setAttribute(key, value);
    });
    
    const insertPoint = document.getElementsByTagName('script')[0] || document.body;
    insertPoint.parentNode?.insertBefore(scriptElement, insertPoint);
  };
  
  if ('requestIdleCallback' in window) {
    (window as Window).requestIdleCallback(() => load());
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    window.addEventListener('load', () => {
      setTimeout(load, 2000);
    });
  }
}

/**
 * Adds preconnect links to speed up external resource loading
 * @param origins - Array of origins to preconnect to
 */
export function addPreconnects(origins: string[]) {
  if (typeof document === 'undefined') return;
  
  origins.forEach(origin => {
    if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) return;
    
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    link.crossOrigin = 'anonymous';
    
    document.head.appendChild(link);
  });
}

/**
 * Defers non-critical CSS loading
 * @param href - CSS file URL
 * @param id - Unique ID for the stylesheet
 */
export function loadCSSDeferred(href: string, id: string) {
  if (typeof window === 'undefined') return;
  
  const loadCSS = () => {
    if (document.getElementById(id)) return;
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.id = id;
    
    document.head.appendChild(link);
  };
  
  if (document.readyState === 'complete') {
    loadCSS();
  } else {
    window.addEventListener('load', loadCSS);
  }
} 