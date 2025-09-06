import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ServiceCard({ 
  image, 
  alt, 
  title, 
  description, 
  linkHref, 
  linkText = "Explore Services",
  imagePosition = "object-top",
  imageOffset = 0
}) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl">
      <div className="absolute inset-0 bg-navy/20 z-10 transition-all duration-300 hover:bg-navy/10"></div>
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className={`w-full object-cover ${imagePosition} transition-all duration-500 hover:scale-105`}
          style={{ transform: `translateY(${imageOffset}px)` }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#333]/90 via-[#333]/80 to-transparent p-4 lg:p-8 z-20 flex flex-col items-start space-y-2">
        <h3 className="lg:text-2xl text-2xl font-bold text-white">{title}</h3>
        {/* <p className="text-gray-200">{description}</p> */}
        <Link
          href={linkHref}
          className="inline-flex items-center text-gold font-medium hover:text-gold-light"
        >
          {linkText} <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
} 