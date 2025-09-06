import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CTAButton = ({ 
  children, 
  onClick, 
  className = '' 
}: CTAButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className={`bg-cta text-white px-6 py-4 rounded-lg transition-all duration-200 font-bold shadow-[0_8px_0_theme(colors.cta.DEFAULT/0.3)] hover:brightness-105 active:shadow-none active:translate-y-2 active:brightness-95 border-b-[1px] border-b-white/40 shadow-inner-[0_2px_0_rgba(255,255,255,0.1)] ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton; 