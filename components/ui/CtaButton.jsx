'use client'

import { useState } from 'react'
import ContactModal from '@/components/ui/ContactModal'

export default function CtaButton({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Opening modal from CtaButton')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log('Closing modal from CtaButton')
    setIsModalOpen(false)
  }

  return (
    <>
      <button 
        onClick={openModal}
        className="bg-gold-dark hover:bg-gold text-white py-4 text-base mt-2 px-[32px] rounded font-bold"
        type="button"
      >
        {children || 'Get Your Free Consultation'}
      </button>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
} 