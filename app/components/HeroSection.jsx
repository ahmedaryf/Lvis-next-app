import React, { useEffect, useState } from 'react';
import picture from '../../public/images/hanifaru-pt.jpg'
import hanifarubay from '../../public/images/hanifaru.jpg'
import Image from 'next/image';

export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Update the isMobile state based on window width
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
  return (
    <div className="w-screen overflow-hidden md:h-[100vh] relative ">
    {isMobile ? (
      <Image src={picture} alt='Image' className='w-screen h-auto'/>
    ) : (
      <Image src={hanifarubay} alt='Image' className='w-screen h-auto origin-bottom'/>
    )}

<div className="bg-black/30 py-2 w-full h-full absolute top-0">
  <div className=' flex flex-col justify-end items-center h-full pb-6'>
    <h2 className="text-5xl md:text-9xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)] ">
        LVIS Hotels
      </h2>
      <h1 className="text-center text-white md:text-2xl">
        Accommodation for visitors of Hanifaru bay
      </h1>
  </div>
</div>
</div>
  )
}
