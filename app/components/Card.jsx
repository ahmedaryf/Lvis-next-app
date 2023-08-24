import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({title, image, text, link, icon1, icon2, icon3, iconText1, iconText2, iconText3}) {
  return (
    <div className='shadow-2xl rounded-md bg-white dark:bg-slate-800'>
      <Image src={image} alt='image' className=' rounded-t-md' />
      <div className=' dark:text-gray-300 p-4 rounded-b-md text-gray-500 md:min-h-[460px] flex flex-col'>
        <h5 className='text-4xl [text-shadow:_4px_1px_4px_rgb(0_0_0_/_50%)] text-center mb-4 title-css'>{title}</h5>
        <div className='flex justify-between md:justify-around text-3xl md:text-4xl mb-3 mt-5'>
          <div className='flex flex-col items-center'>
            <h4>{icon1}</h4>
            <h5 className='text-sm'>{iconText1}</h5>
          </div>
          <div className='flex flex-col items-center'>
            <h4>{icon2}</h4>
            <h5 className='text-sm'>{iconText2}</h5>
          </div>
          <div>
            <h4 className='flex flex-col items-center'>{icon3}</h4>
            <h5 className='text-sm'>{iconText3}</h5>
          </div>
        </div>
        <p className='mb-4 text-gray-500 dark:text-gray-300'>{text}</p>
        <Link href={link} className="text-center bg-orange-800 text-white w-full px-3 py-1 mt-auto rounded">More Information</Link>
      </div>
    </div>
  )
}
