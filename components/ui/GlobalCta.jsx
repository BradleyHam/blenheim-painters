'use client'

import { useState, useEffect } from 'react'
import { MessageSquare } from 'lucide-react'
import ContactModal from '@/components/ui/ContactModal'

export default function GlobalCta() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpenElsewhere, setIsModalOpenElsewhere] = useState(false)

  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Check if modal is open anywhere else
    const checkModalState = () => {
      setIsModalOpenElsewhere(document.body.classList.contains('modal-open') && !isModalOpen)
    }

    // Set up observers and listeners
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    checkModalState()
    
    // Observe body class changes for modal open state
    const observer = new MutationObserver(checkModalState)
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'] 
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [isModalOpen])

  // Hide the button when another modal is open
  if (isModalOpenElsewhere) return null

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`fixed bottom-6 right-6 bg-gold text-white p-4 rounded-full shadow-lg z-40 transition-all duration-300 hover:bg-gold-dark ${
          isVisible && !isModalOpenElsewhere ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Contact us"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
} 