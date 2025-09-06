import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ServiceDetailCard({ image, alt, title, features }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-100 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-semibold mb-3 text-navy">{title}</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 