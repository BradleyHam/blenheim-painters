import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site-config'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              {/* <Image
                src={`/painters-${siteConfig.townNameLower}-logo.png`}
                alt={`${siteConfig.businessName} Logo`}
                width={100}
                height={100}
                className=""
              />
       */}
            </Link>
            <p className="text-gray-300 leading-relaxed">
              {siteConfig.townName}'s trusted repainting specialists, transforming homes across the region with
              unparalleled craftsmanship.
            </p>
            <div className="flex gap-4">
              {siteConfig.social.facebook && (
                <Link href={siteConfig.social.facebook} className="text-gray-300 hover:text-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              )}
              {siteConfig.social.instagram && (
                <Link href={siteConfig.social.instagram} className="text-gray-300 hover:text-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                  Exterior Painting
                </Link>
              </li>
           
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-gold transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{siteConfig.phoneNumber}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{siteConfig.townName}, New Zealand</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Monday-Friday: 8am-6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <Link href="" className="text-gray-300 hover:text-gold transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="" className="text-gray-300 hover:text-gold transition-colors text-sm">
              Terms of Service
            </Link>
            <span className="hidden md:inline-block h-4 border-l border-gray-500 mx-2"></span>
            <a
              href="https://rankhigher.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center gap-1"
            >
              <span>Website by</span>
              <span className="font-semibold">Rank Higher</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}