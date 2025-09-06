'use client'

import { useState } from 'react'
import ContactModal from '@/components/ui/ContactModal'

export default function BlogCtaButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Opening modal from BlogCtaButton')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log('Closing modal from BlogCtaButton')
    setIsModalOpen(false)
  }

  return (
    <>
      <button 
        onClick={openModal}
        className="bg-gold hover:bg-gold-dark text-white py-4 text-base mt-2 px-[32px] rounded font-bold transition-colors"
        type="button"
      >
        Get Your Free Consultation
      </button>

      {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  )
} 