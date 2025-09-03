import React from 'react';
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import SectionHeading from '../SiteComponents/SectionHeading';
import ButtonSeeMore from '../SiteComponents/ButtonSeeMore';
import Link from 'next/link';

// create a short function that returns a component for each stat:   <p><span>25+</span>Experience Combined</p>

const Stat: React.FC<{ number: number, title: string }> = ({ number, title }) => {    
    return (
        <p className='text-primary'><span className='text-base font-bold text-primary'>{number}+</span><span className='ml-2 text-sm'>{title}</span> </p>
    );

}

const ShortAbout: React.FC = () => {
    return (
        <section className="relative flex items-center px-side-spacing py-section-spacing overflow-hidden">
            {/* Skewed background element */}
            <div className="absolute inset-0 z-10 bg-light-bg/10 transform origin-bottom-right"></div>
            
            {/* Brush stroke background */}
            <div className="absolute left-12 lg:left-[300px] h-[600px] w-[1200px] -right-12 top-12 lg:-bottom-26 lg:w-[1400px] lg:h-[600px] opacity-30 z-10">
           
            </div>
         
            <div className=" relative z-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-10  ">
                    <div className="bg-white p-3 shadow-lg h-[300px]  lg:h-[500px]">
                    <div className=" bg-gray-200  h-full  w-full relative shadow-xl">
                        <Image 
                            src='/images/painter.webp' 
                            alt='Lakeside Painting team of expert painters in Blenheim, New Zealand, ready to transform your home or business' 
                            layout='fill' 
                            objectFit='cover'
                        /> 
                    </div>
                    </div>
                   
                        <div className=" flex flex-col justify-center">
                            <SectionHeading type={2} subtitle='About Us' title='A local team you can trust to treat your home with care'/>
                            <div className='stats flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 items-start mb-6' >
                                <Stat number={15} title='Years Experience'/>
                                <Stat number={100} title='Houses Transformed'/>
                            </div>
                        <p className='text-primary/75 text-sm mb-6'>
                        At Lakeside Painting, we&apos;re a Blenheim-based team offering high-quality interior and exterior painting services. I learned the trade from my father and have over 15 years of hands-on experience, while my partner brings an unmatched eye for detail and a commitment to cleanliness that ensures every project is left spotless and beautiful.

Together, we deliver a friendly, professional service you can rely on
                        </p>

                    
                         {typeof window !== 'undefined' && window.location.pathname === '/' && (
                           <ButtonSeeMore label='Read Our Story' linkTo='/about' />
                         )}
                     
                         </div>
                         </div>
             
                </div>
       
        </section>
    );
};

export default ShortAbout;