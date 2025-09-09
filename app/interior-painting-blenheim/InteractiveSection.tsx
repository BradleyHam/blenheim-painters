'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface CoatingOption {
  label: string;
  image: string;
  content: React.ReactNode;
}

interface Props {
  applyCoatingOptions: CoatingOption[];
}

export default function InteractiveSection({ applyCoatingOptions }: Props) {
  const [selectedCoating, setSelectedCoating] = useState(applyCoatingOptions[0].label);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const selectedOption = applyCoatingOptions.find(o => o.label === selectedCoating);

  return (
    <div className="w-full ">
      {/* Desktop version - Enhanced Tabs for Better User Experience */}
      <div className="hidden lg:block">
        {/* Tab Interface with More Obvious Interactive Elements */}
        <div className="relative mb-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Select an option to see details</p>
          <div className="inline-flex bg-gray-100 p-1.5 rounded-lg shadow-inner">
            {applyCoatingOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setSelectedCoating(option.label)}
                className={`relative py-3 px-6 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none shadow-sm ${
                  selectedCoating === option.label
                    ? 'bg-white text-navy shadow-md translate-y-[-1px]'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="uppercase tracking-wide">{option.label}</span>
                  {selectedCoating === option.label && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </div>
                {selectedCoating === option.label && isClient && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    layoutId="desktopTabUnderline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area with Enhanced Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCoating}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            {/* Image Column with Enhanced Visual Treatment */}
            <motion.div
              className="overflow-hidden rounded-lg shadow-md bg-gray-50 group"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="relative aspect-[4/3] w-full h-[400px]">
                {selectedOption && (
                  <>
                    <Image
                      src={selectedOption.image}
                      alt={selectedOption.label}
                      fill
                      priority={applyCoatingOptions.indexOf(selectedOption) === 0}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 bg-navy/80 text-white text-xs font-semibold py-1.5 px-3 rounded-full backdrop-blur-sm">
                      {selectedOption.label}
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Text Content Column */}
            <motion.div
              className="prose prose-lg max-w-none prose-p:text-gray-700 prose-li:text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {selectedOption?.content}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Version - Enhanced for Better UX */}
      <div className="lg:hidden">
        <p className="text-sm text-center text-gray-500 mb-3">Tap an option to see details</p>
        <div className="bg-gray-100 rounded-lg p-1.5 mb-8 shadow-inner">
          <div className="flex justify-center space-x-2">
            {applyCoatingOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setSelectedCoating(option.label)}
                className={`relative flex-shrink-0 py-2 px-3 rounded-md text-xs font-medium transition-all duration-300 focus:outline-none ${
                  selectedCoating === option.label
                    ? 'bg-white text-navy shadow-md translate-y-[-1px]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="uppercase tracking-wide">{option.label}</span>
                {selectedCoating === option.label && isClient && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    layoutId="mobileTabUnderline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCoating}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-lg shadow-md bg-gray-50 relative">
              <div className="relative aspect-[4/3] w-full h-[300px]">
                {selectedOption && (
                  <>
                    <Image
                      src={selectedOption.image}
                      alt={selectedOption.label}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-navy/80 text-white text-xs font-semibold py-1 px-2.5 rounded-full backdrop-blur-sm">
                      {selectedOption.label}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="prose prose-base max-w-none prose-p:text-gray-700 prose-li:text-gray-700">
              {selectedOption?.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}