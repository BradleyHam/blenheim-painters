import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CtaButton from "../ui/CtaButton"

export default function Process() {
  return (
    <section className="py-16 md:py-32 bg-navy text-white">
      <div className="container px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Our Refined Process
              </h2>
              <div className="h-1 w-24 bg-gold mb-8"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              We've perfected our approach to ensure your interior repainting project is seamless, efficient, and
              exceeds your expectations.
            </p>

            <div className="space-y-10 mt-10 relative">
              {/* Custom dashed line with SVG for precise control */}
              <svg 
                className="absolute left-7 top-0 h-full -translate-x-1/2" 
                width="2" 
                height="100%" 
                aria-hidden="true"
              >
                <line 
                  x1="1" 
                  y1="0" 
                  x2="1" 
                  y2="100%" 
                  stroke="#D4AF37" 
                  strokeWidth="2" 
                  strokeDasharray="8 6" 
                />
              </svg>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="h-14 w-14 rounded-full bg-gold text-navy flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personalized Consultation</h3>
                  <p className="text-gray-300 leading-relaxed">
                  We start with a relaxed, in-depth chat to understand your vision, assess your space, and offer expert advice on colors, finishes, and techniques tailored to your style.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="h-14 w-14 rounded-full bg-gold text-navy flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Proposal</h3>
                  <p className="text-gray-300 leading-relaxed">
                  You&apos;ll get a clear quote with premium material options, timelines, and a full breakdown of what to expect — no surprises, just clarity and confidence.

                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="h-14 w-14 rounded-full bg-gold text-navy flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Flawless Execution</h3>
                  <p className="text-gray-300 leading-relaxed">
                  Our experienced team shows up on time, protects your space, applies every coat with precision, and leaves your home spotless. We treat your home like our own.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
                <CtaButton />
            </div>
          </div>

          <div className="relative h-[350px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/painter-color-consultation-illustration.png"
              alt="Little Dog Decorating painting process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}