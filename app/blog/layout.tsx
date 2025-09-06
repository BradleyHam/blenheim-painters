import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Painting Insights Blog | Little Dog Decorating | Queenstown",
  description:
    "Expert painting advice, color trends, and interior design inspiration from Queenstown's premier painting specialists. Discover tips for your next home transformation.",
  keywords:
    "painting blog, interior design tips, color trends, Queenstown painters, painting techniques, eco-friendly paint, cabinet refinishing, Little Dog Decorating",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}