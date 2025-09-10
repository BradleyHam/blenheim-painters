'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Image from "next/image"
import { useEffect, useState } from "react"
import ContactModal from "@/components/ui/ContactModal"
import { useRouter } from "next/navigation"
import { siteConfig } from "@/config/site-config"
import { imageConfig, getImageWithAlt } from "@/config/images"

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      // Set initial values
      setIsLargeScreen(window.innerWidth >= 1024)
      setIsMediumScreen(window.innerWidth >= 1024) // Change from 768px to 1024px (lg breakpoint)
      
      // Add event listener for resize
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024)
        setIsMediumScreen(window.innerWidth >= 1024) // Change from 768px to 1024px (lg breakpoint)
      }
      
      // Check for modal-open class on body to hide header
      const handleModalState = () => {
        setIsModalOpen(document.body.classList.contains('modal-open'))
      }
      
      // Initial check
      handleModalState()
      
      // Setup a mutation observer to watch for class changes on body
      const observer = new MutationObserver(handleModalState)
      observer.observe(document.body, { 
        attributes: true, 
        attributeFilter: ['class'] 
      })
      
      window.addEventListener('resize', handleResize)
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize)
        observer.disconnect()
      }
    }
  }, [])

  // Handle CTA modal
  const openModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Opening modal from Header component')
    setIsModalOpen(true)
    setIsSheetOpen(false)
  }

  const closeModal = () => {
    console.log('Closing modal from Header component')
    setIsModalOpen(false)
  }

  // Handle link click to close mobile menu
  const handleLinkClick = () => {
    setIsSheetOpen(false)
  }

  return (
    <>
      <div className="header-container">
        {/* Contact info sub-header - visible on all screens */}
        <div className="bg-navy py-2 text-white text-xs w-full">
          <div className="container flex items-center justify-end gap-4 md:gap-6">
            <a href={`tel:${siteConfig.phoneNumber}`} className="flex items-center gap-1 md:gap-2 hover:text-gold transition-colors">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
              <span className="sm:hidden">{siteConfig.phoneDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 md:gap-2 hover:text-gold transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">{siteConfig.email}</span>
              <span className="sm:hidden">{siteConfig.email}</span>
            </a>
          </div>
        </div>
        
        <div 
          className="w-full border-b border-gray-200 bg-white"
          style={{ 
            height: "80px", 
            minHeight: "80px", 
            maxHeight: "80px",
          }}
        >
          <div 
            className="container flex items-center justify-between h-full"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <div className="relative flex items-center" style={{ 
              height: "80px", 
              width: isLargeScreen ? "120px" : "100px"
            }}>
              <Link href="/" className="z-20 bg-white rounded-full">
                <Image 
                  src={imageConfig.branding.logo.path} 
                  alt={imageConfig.branding.logo.alt} 
                  width={isLargeScreen ? 120 : 100}
                  height={isLargeScreen ? 120 : 100}
                  className="z-[110] scale-[0.9]"
                  style={{ display: 'block' }}
                  priority
                />
              </Link>
            </div>
            <nav className="hidden lg:flex items-center gap-8 ml-32">
              <Link href="/" className="text-sm font-medium text-navy hover:text-gold">
                Home
              </Link>
              <Link href={`/interior-painting-${siteConfig.townNameLower}`} className="text-sm font-medium text-navy hover:text-gold">
                Interiors
              </Link>
              <Link href={`/exterior-painting-${siteConfig.townNameLower}`} className="text-sm font-medium text-navy hover:text-gold">
                Exteriors
              </Link>
              <Link href={`/roof-painting-${siteConfig.townNameLower}`} className="text-sm font-medium text-navy hover:text-gold">
                Roofs
              </Link>
              <Link href="/testimonials" className="text-sm font-medium text-navy hover:text-gold">
                Testimonials
              </Link>
              <Link href="/contact" className="text-sm font-medium text-navy hover:text-gold">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <button 
                  onClick={openModal}
                  className="bg-gold-dark hover:bg-gold text-white py-4 text-base mt-2 px-[32px] rounded font-bold"
                  type="button"
                >
                  Get Your Free Consultation
                </button>
              </div>
              {/* Hamburger Menu - Hidden on lg screens and above */}
              <div style={{ display: isMediumScreen ? 'none' : 'block' }}>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-navy">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="p-0 w-[320px] sm:w-[380px] bg-white [&>button]:hidden overflow-auto">
                    <div className="flex flex-col h-full">
                      {/* Logo and close button */}
                      <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <div className="w-24">
                          <Image 
                            src={imageConfig.branding.logo.path} 
                            alt={siteConfig.businessName} 
                            width={90}
                            height={90}
                            className="w-auto h-auto"
                          />
                        </div>
                        <SheetClose className="rounded-full p-2 hover:bg-gray-100">
                          <X className="h-5 w-5 text-navy" />
                        </SheetClose>
                      </div>
                      
                      {/* Navigation links - using same items as desktop menu */}
                      <nav className="flex flex-col py-6">
                        <Link href="/" className="px-6 py-3 text-navy hover:bg-gray-50 hover:text-gold transition-colors" onClick={handleLinkClick}>
                          Home
                        </Link>
                        <Link href={`/interior-painting-${siteConfig.townNameLower}`} className="px-6 py-3 text-navy hover:bg-gray-50 hover:text-gold transition-colors" onClick={handleLinkClick}>
                          Interiors
                        </Link>
                        <Link href={`/exterior-painting-${siteConfig.townNameLower}`} className="px-6 py-3 text-navy hover:bg-gray-50 hover:text-gold transition-colors" onClick={handleLinkClick}>
                          Exteriors
                        </Link>
                        <Link href={`/roof-painting-${siteConfig.townNameLower}`} className="px-6 py-3 text-navy hover:bg-gray-50 hover:text-gold transition-colors" onClick={handleLinkClick}>
                          Roofs
                        </Link>
                        <Link href="/testimonials" className="px-6 py-3 text-navy hover:bg-gray-50 hover:text-gold transition-colors" onClick={handleLinkClick}>
                          Testimonials
                        </Link>
                        <Link href="/contact" className="px-6 py-3 text-navy hover:bg-gray-50 hover:text-gold transition-colors" onClick={handleLinkClick}>
                          Contact
                        </Link>
                      </nav>
                      
                      {/* CTA and contact info */}
                      <div className="mt-auto flex flex-col p-6 pt-0 border-t border-gray-100 pb-10">
                        <button 
                          onClick={openModal}
                          className="bg-gold-dark hover:bg-gold text-white py-3 px-6 rounded font-bold w-full mb-6 transition-colors"
                          type="button"
                        >
                          Get A Free Consultation
                        </button>
                        
                        <div className="border-t border-gray-100 pt-6">
                    
                          <div className="space-y-3">
                            <a href={`tel:${siteConfig.phoneNumber}`} className="flex items-center text-navy hover:text-gold transition-colors text-sm">
                              <Phone className="h-3.5 w-3.5 mr-3 text-navy/70" />
                              {siteConfig.phoneDisplay}
                            </a>
                            
                            <a href={`mailto:${siteConfig.email}`} className="flex items-center text-navy hover:text-gold transition-colors text-sm">
                              <Mail className="h-3.5 w-3.5 mr-3 text-navy/70" />
                              {siteConfig.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal outside of the header container so it doesn't disappear */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}