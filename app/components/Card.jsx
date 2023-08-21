import Image from 'next/image'
import React from 'react'

export default function Card({title, image, text, link}) {
  return (
    <div className='shadow-2xl rounded-md bg-white dark:bg-slate-800'>
      <Image src={image} alt='image' className=' rounded-t-md' />
      <div className=' dark:text-gray-300 p-4 rounded-b-md text-gray-500 md:min-h-[400px] flex flex-col'>
        <h5 className='text-4xl [text-shadow:_4px_1px_4px_rgb(0_0_0_/_50%)] text-center mb-4'>{title}</h5>
        <p className='mb-4'>{text}</p>
        <button className='bg-orange-800 text-white w-full px-3 py-1 mt-auto rounded'>More Information</button>
      </div>
    </div>
  )
}
