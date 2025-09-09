'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Phone, Mail, MapPin } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'
import { siteConfig } from '@/config/site-config'

export default function ContactModal({ isOpen, onClose }) {
  const modalRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Debug the state of the modal
  useEffect(() => {
    console.log('ContactModal isOpen:', isOpen)
  }, [isOpen])

  // Handle opening/closing animations
  useEffect(() => {
    if (isOpen) {
      console.log('Opening modal, adding modal-open class')
      setIsAnimating(true)
      // Add a class to the body to indicate modal is open (for Header hiding)
      document.body.classList.add('modal-open')
    } else {
      console.log('Closing modal, removing modal-open class')
      // When closing, wait for animation to complete
      document.body.classList.remove('modal-open')
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300) // Match this with CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    // Handle escape key to close
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscKey)
      // Prevent background scrolling
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
      // Allow scrolling again
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  // Prevent event bubbling for clicks inside the form
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  if (!isOpen && !isAnimating) return null

  return (
    <div 
      className={`fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        ref={modalRef}
        className={`fixed inset-0 bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-auto transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        style={{ position: 'relative', zIndex: 10000 }}
        onClick={handleModalClick}
      >
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-navy">Request a Consultation</h2>
          <button 
            onClick={onClose}
            className="text-navy border-2 border-navy rounded-md px-2 py-1 hover:bg-navy hover:text-white transition-colors text-sm font-medium"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>

        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4 text-navy">Your Information</h3>
            <ContactForm />
          </div>
          
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-navy">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                We'll get back to you within 24 hours with a personalized response to your inquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div className='flex flex-col items-start justify-start'>
                  <h4 className="font-medium text-navy">Telephone</h4>
                  <p className="text-gray-700">+64{siteConfig.phoneDisplay}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div className='flex flex-col items-start justify-start'>
                  <h4 className="font-medium text-navy">Email</h4>
                  <p className="text-gray-700">{siteConfig.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div className='flex flex-col items-start justify-start'>
                  <h4 className="font-medium text-navy">Service Area</h4>
                  <p className="text-gray-700">{siteConfig.townName} and surrounding areas</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gold/5 p-5 border border-gold/20">
  <h4 className="font-semibold text-navy mb-2">Why Choose {siteConfig.businessName}?</h4>
  <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
    <li>BCITO-certified Master Painter</li>
    <li>Fully insured for peace of mind</li>
    <li>{siteConfig.yearsInBusiness}+ years serving {siteConfig.townName}</li>
    <li>Perfect 5-star Google rating</li>
    <li>Trusted for quality, detail & service</li>
  </ul>
</div>
          </div>
        </div>
      </div>
    </div>
  )
} 