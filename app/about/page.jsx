"use client"
import React from 'react'
import PageRapper from '../components/PageRapper'
import Ocean from '../../public/images/ocean-night1.jpg'
import Mosque from '../../public/images/mosque-new.jpg'
import Image from 'next/image'
import { motion } from "framer-motion";

const images = [
  {
    name: 'Mosque',
    url: '/images/mosque-new.jpg'
  },
  {
    name: 'Ocean',
    url: '/images/ocean-night1.jpg'
  }
]

export default function page() {
  return (
    <PageRapper>
      <div className='min-h-screen bg-gradient-to-r from-cyan-300 to-blue-500 dark:from-cyan-800 dark:to-blue-900'>
      <div className="h-32"></div>
        <h1 className='pt-6 text-5xl text-center'>About</h1>
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
      </div>
    </PageRapper>
  )
}

// <Image key={index} src={image.url} alt={image.name} width={550} height={350} className='transition-opacity opacity-0 duration-[3s]'
// onLoadingComplete={(image) => image.classList.remove('opacity-0')} />