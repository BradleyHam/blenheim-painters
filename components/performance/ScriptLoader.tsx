'use client';

import React, { useEffect, useState } from 'react';

/**
 * ScriptLoader - Defers non-critical scripts until after the main content has loaded
 * and the browser is idle. This helps reduce main thread work and improve FCP/LCP.
 */
interface ScriptLoaderProps {
  scripts: {
    id: string;
    src?: string;
    innerHTML?: string;
    async?: boolean;
    defer?: boolean;
    strategy?: 'idle' | 'afterInteractive' | 'afterLoad';
  }[];
}

export default function ScriptLoader({ scripts }: ScriptLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // For afterLoad scripts
      const loadScripts = scripts.filter(script => script.strategy === 'afterLoad');
      loadScripts.forEach(createAndAppendScript);
      
      // For idle scripts
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          const idleScripts = scripts.filter(script => script.strategy === 'idle');
          idleScripts.forEach(createAndAppendScript);
        });
      } else {
        setTimeout(() => {
          const idleScripts = scripts.filter(script => script.strategy === 'idle');
          idleScripts.forEach(createAndAppendScript);
        }, 2000);
      }
      
      setIsLoaded(true);
    };

    // For afterInteractive scripts
    const interactiveScripts = scripts.filter(script => script.strategy === 'afterInteractive' || !script.strategy);
    if (document.readyState === 'complete') {
      interactiveScripts.forEach(createAndAppendScript);
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      
      // If document already interactive, load interactive scripts immediately
      if (document.readyState === 'interactive') {
        interactiveScripts.forEach(createAndAppendScript);
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          interactiveScripts.forEach(createAndAppendScript);
        });
      }
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [scripts]);

  const createAndAppendScript = (scriptInfo: ScriptLoaderProps['scripts'][0]) => {
    const script = document.createElement('script');
    script.id = scriptInfo.id;
    
    if (scriptInfo.src) {
      script.src = scriptInfo.src;
    }
    
    if (scriptInfo.innerHTML) {
      script.innerHTML = scriptInfo.innerHTML;
    }
    
    script.async = scriptInfo.async || false;
    script.defer = scriptInfo.defer !== false;
    
    document.body.appendChild(script);
  };

  return null;
} 