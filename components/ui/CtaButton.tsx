import React from 'react';
import Link from 'next/link';
import { Button } from './button';

interface CtaButtonProps {
  text?: string;
  href?: string;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  text = "Get Your Free Consultation", 
  href = "/contact",
  className = "" 
}) => {
  return (
    <Link href={href}>
      <Button className={`bg-gold hover:bg-gold/90 text-white font-medium px-6 py-3 text-lg rounded-md ${className}`}>
        {text}
      </Button>
    </Link>
  );
};

export default CtaButton; 