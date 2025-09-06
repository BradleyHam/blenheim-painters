"use client"

import TailwindTest from '../components/TailwindTest'
import CtaFooter from '../experimental-components/CtaFooter'

export default function TestPage() {
  return (
    <div className="container mx-auto pb-20">
      <h1 className="text-3xl font-bold my-8">Tailwind Responsive Testing Page</h1>
      
      <div className="mb-20">
        <TailwindTest />
      </div>
      
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-4">Original CtaFooter Component</h2>
        <CtaFooter />
      </div>
      
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-4">Alternate Solutions</h2>
        
        {/* Solution 1: Using CSS custom properties */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">Solution 1: CSS Custom Properties</h3>
          <div 
            className="max-w-5xl mx-auto"
            style={{
              "--container-padding": "2rem",
              "@media (min-width: 1024px)": {
                "--container-padding": "3.5rem"
              }
            }}
          >
            <style jsx>{`
              @media (min-width: 1024px) {
                .responsive-container {
                  padding: 3.5rem !important;
                }
              }
            `}</style>
            <div className="relative bg-navy rounded-2xl overflow-hidden border border-gold/20 shadow-2xl transition-all responsive-container" style={{ padding: '2rem' }}>
              <h3 className="text-xl text-white font-bold">CSS Custom Property + Media Query</h3>
              <p className="text-white/80">Using CSS-in-JS with custom properties and media queries</p>
            </div>
          </div>
        </div>
        
        {/* Solution 2: Hard-coded inline style with media query */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">Solution 2: Direct Media Query in Style Tag</h3>
          <div className="max-w-5xl mx-auto">
            <style jsx>{`
              .direct-media-container {
                padding: 2rem;
              }
              @media (min-width: 1024px) {
                .direct-media-container {
                  padding: 3.5rem;
                }
              }
            `}</style>
            <div className="relative bg-navy rounded-2xl overflow-hidden border border-gold/20 shadow-2xl transition-all direct-media-container">
              <h3 className="text-xl text-white font-bold">Direct Media Query in Style Tag</h3>
              <p className="text-white/80">Using a direct media query in a style tag</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-4">Viewing Instructions</h2>
        <div className="p-4 bg-yellow-100 rounded-lg">
          <p>1. View this page on a screen smaller than 1024px width to see the smaller padding (2rem/p-8)</p>
          <p>2. Resize to 1024px or larger to see if the larger padding (3.5rem/p-14) gets applied</p>
          <p>3. Compare the different solutions to see which ones correctly apply the responsive padding</p>
        </div>
      </div>
    </div>
  )
} 