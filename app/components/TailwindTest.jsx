'use client'

import { useEffect, useState } from 'react'

export default function TailwindTest() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Only execute this on the client
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // Set initial size
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Tailwind Responsive Test</h1>
      <p className="mb-4">Window width: {windowSize.width}px (lg breakpoint is 1024px)</p>
      
      <div className="space-y-6">
        {/* Test 1: Basic padding responsive class */}
        <div className="border border-gray-300 rounded">
          <div className="bg-blue-100 p-4 lg:p-12">
            <h2 className="font-medium">Test 1: p-4 lg:p-12</h2>
            <p>This should have 1rem (p-4) padding on mobile and 3rem (p-12) padding on lg screens (1024px+)</p>
          </div>
        </div>
        
        {/* Test 2: Custom arbitrary values */}
        <div className="border border-gray-300 rounded">
          <div className="bg-green-100 p-[16px] lg:p-[48px]">
            <h2 className="font-medium">Test 2: p-[16px] lg:p-[48px]</h2>
            <p>This uses arbitrary values with square brackets</p>
          </div>
        </div>
        
        {/* Test 3: Inline styles with className padding */}
        <div className="border border-gray-300 rounded">
          <div 
            className="bg-yellow-100 p-4 lg:p-12"
            style={{ color: 'black' }} // Adding a basic inline style
          >
            <h2 className="font-medium">Test 3: p-4 lg:p-12 with inline style</h2>
            <p>Testing if inline styles affect responsive padding</p>
          </div>
        </div>
        
        {/* Test 4: Individual padding directions */}
        <div className="border border-gray-300 rounded">
          <div className="bg-purple-100 px-4 py-8 lg:px-10 lg:py-14">
            <h2 className="font-medium">Test 4: px-4 py-8 lg:px-10 lg:py-14</h2>
            <p>Testing directional padding</p>
          </div>
        </div>
      </div>
    </div>
  )
} 