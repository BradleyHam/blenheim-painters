'use client'

import React, { useState } from 'react';
import { Button } from './button';
import ContactModal from './ContactModal';

interface CtaButtonProps {
  text?: string;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  text = "Get Your Free Consultation", 
  className = "" 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button 
        onClick={openModal}
        className={`bg-gold hover:bg-gold/90 text-white font-medium px-6 py-3 text-lg rounded-md ${className}`}
        type="button"
      >
        {text}
      </Button>
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CtaButton; 