"use client"
import React, { useEffect, useState } from 'react';
import PageRapper from '../components/PageRapper'
import Staff from '../../public/images/staff-lvis.jpg'
import StaffMobile from '../../public/images/staff-mobile.jpg'
import Image from 'next/image'
import { motion } from "framer-motion";

const images = [
  {
    name: 'Blancura',
    url: '/images/blancura.jpg'
  },
  {
    name: 'Village',
    url: '/images/village.jpg'
  }
]

export default function About() {

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
    <main className='min-h-screen bg-gradient-to-r from-[#616164]/10 to-[#DAB785]/60  dark:from-slate-700 dark:to-slate-600'>
      <PageRapper>
        <div className="relative">
          {!isMobile ? 
            <Image src={Staff} alt='LVIS Staff' /> :
            <Image src={StaffMobile} alt='LVIS Staff' />
          }
          <div className='flex flex-col items-center justify-end pb-8 absolute top-0 left-0 w-full h-full bg-slate-950/60'>

          <h1 className='text-5xl md:text-9xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)]'>About us</h1>
          </div>
        </div>
          <div  className='grid grid-cols-2 gap-4 place-items-center mt-9'>
            {images.map((image, index) => {
              return (
                <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: index * 0.4 }} // Stagger effect here
                className='relative'>
                  <Image
                    src={image.url}
                    alt={image.name}
                    width={550}
                    height={350}
                    className='rounded-lg'/>
              </motion.div>
              )
            })}
          </div>
        </PageRapper>
      </main>
  )
}

// <Image key={index} src={image.url} alt={image.name} width={550} height={350} className='transition-opacity opacity-0 duration-[3s]'
// onLoadingComplete={(image) => image.classList.remove('opacity-0')} />