'use client'
import React from 'react'
import ButtonCta from './ButtonCta'
import {COLORS} from '@/Utils/variables'
import { LuPaintbrush } from 'react-icons/lu'
import Image from 'next/image'
import { useModal } from './ModalClientManager';


function FooterBanner() {
  const { handleOpenModal } = useModal();

  return (
    <div className="bg-white px-side-spacing py-16">
      <div className="footer-banner px-side-spacing py-24 lg:py-40 flex flex-col space-y-4 items-start relative bg-light-bg rounded-lg">
      <div className="z-20 flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between w-full items-start ">
      <div className='flex flex-col space-y-4 text-white font-sans' style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <h4 className='text-xs uppercase tracking-widest  text-white font-medium'>Increase the value to your property</h4>
        <h2 className='text-base lg:text-lg font-semibold text-left'>Get a free consultation from one of our experts</h2>
      </div>
    
      <ButtonCta text='Book a consultation' type={2} onClick={handleOpenModal} />
     </div>
 
 

      </div>
    </div>
  )
}

export default FooterBanner

//