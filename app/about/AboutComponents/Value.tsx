import Image from 'next/image'
import { ReactElement } from 'react';

interface ValueProps {
    value: string;
    description: string;
    icon: ReactElement; // This indicates that 'icon' is a JSX element
  }
  
export default function Value ({value, description, icon}: ValueProps) {
    return (
        <div className='w-full rounded   bg-white shadow-lg p-5 flex flex-col space-y-2 lg:min-h-[300px]'> 
             <div className='text-accent-two'>{icon}</div>
            <h3 className='text-headings text-base font-semibold tracking-tighter'>{value}</h3>
            <p className='opacity-80 font-poppins'>{description}</p>
        </div>
    )
} 