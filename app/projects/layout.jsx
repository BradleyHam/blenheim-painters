import React from "react"
import { Metadata } from "next"



export const metadata = {
  title: 'Painting Projects Portfolio | Little Dog Decorating',
  description: 'View our portfolio of completed interior and exterior painting projects in Queenstown and Arrowtown. See the quality craftsmanship of Little Dog Decorating.',
  keywords: [
    'painting projects Queenstown',
    'painting portfolio NZ',
    'house painting examples',
    'interior design painting',
    'exterior painting gallery',
    'Little Dog Decorating projects',
  ],
  openGraph: {
    title: 'Our Painting Projects | Little Dog Decorating',
    description: 'Explore our portfolio of luxury residential painting projects in Queenstown.',
  },
  twitter: {
    title: 'Our Painting Projects | Little Dog Decorating',
    description: 'See examples of our high-quality painting work in Queenstown & Arrowtown.',
  },
}

export default function ProjectsLayout({ children }) {
  return (
    <>

      {children}

    </>
  )
}

