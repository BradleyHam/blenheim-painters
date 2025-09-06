'use client'

import { PortableText as SanityPortableText } from '@portabletext/react'

// Define custom components for the portable text
const components = {
  list: {
    // For numbered lists
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
    // For bullet lists
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    // Default list item styling
    bullet: ({ children }) => <li className="text-gray-700">{children}</li>,
    number: ({ children }) => <li className="text-gray-700">{children}</li>,
  },
  block: {
    // Paragraph styling
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-bold text-navy mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-navy mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-navy mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold text-navy mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-4 italic text-gray-700 mb-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-navy underline hover:text-gold transition-colors"
        >
          {children}
        </a>
      )
    },
  },
}

export default function PortableText({ value }) {
  return <SanityPortableText value={value} components={components} />
} 