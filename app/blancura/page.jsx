import Image from 'next/image'
import React from 'react'
import coverPhoto from '../../public/images/blancura-cover-photo.jpg'
import PageRapper from '../components/PageRapper'
import Delux from '../../public/images/IMG_2476-optimised.jpg'
import Budget from '../../public/images/budget.jpg'

export default function page() {
  return (
    <PageRapper>
    <div className=' h-64 md:h-[90vh] overflow-hidden relative w-screen bg-slate-100'>
      <Image className='w-full h-auto absolute md:bottom-0' src={coverPhoto} alt='LVIS Blancura'/>
      <div className='bg-slate-900/30 absolute top-0 left-0 w-screen h-full'></div>
      <div className='absolute left-[50%] top-[85%] md:top-[80%] translate-x-[-50%] translate-y-[-50%] w-screen'>
        <h1 className="text-5xl md:text-9xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)]">LVIS Blancura</h1>
      </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6'>
      <div className='bg-slate-50 dark:bg-slate-800 p-4 text-slate-600 dark:text-slate-100 '>
        <Image src={Delux} alt='Delux rooms' className='w-full h-auto'/>
          <h2 className='text-4xl md:text-6xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)] mb-6 mt-4'>Deluxe Room</h2>
          <p>The Deluxe Rooms at LVIS Blancura Hotel offer a modern and contemporary design, ensuring a comfortable stay for guests. With their sleek aesthetics and well-thought-out features, these rooms provide a relaxing and inviting atmosphere.</p>

          <p>design of the Deluxe Rooms embraces a modern style, characterized by clean lines, minimalist furnishings, and a neutral color palette. The contemporary elements create a fresh and sophisticated ambiance, appealing to those seeking a sleek and stylish accommodation.</p>

          <p>Upon entering the Deluxe Room, guests are greeted by a tastefully appointed space that exudes comfort. The interior design is carefully curated, featuring a blend of modern furniture and decor. Plush beds with crisp linens take center stage, offering a haven of relaxation and a restful night&apos;s sleep</p>

          <p>The en-suite bathrooms in the Deluxe Rooms are designed with a contemporary touch, featuring sleek fixtures, a well-lit vanity area, and a refreshing rain shower. The bathrooms provide a private sanctuary where guests can rejuvenate and prepare for the day ahead.</p>
      </div>
      <div className='bg-slate-50 dark:bg-slate-800 p-4 text-slate-600 dark:text-slate-100 '>
        <Image src={Budget} alt='Budget rooms' className='w-full h-auto'/>
          <h2 className='text-4xl md:text-6xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)] mb-6 mt-4'>Budget Seaview Room</h2>
          <p>Our Budget Seaview Rooms offer a budget-friendly option with the added bonus of breathtaking sea views. These rooms provide an opportunity to enjoy the beauty of the ocean without compromising on affordability.</p>

          <p>Designed for guests seeking an affordable seaside getaway, the Budget Seaview Rooms provide a comfortable and cozy space to relax and unwind. The rooms are thoughtfully furnished to maximize functionality and create a pleasant atmosphere.</p>

          <p>The calming presence of the sea creates a tranquil ambiance, perfect for a soothing vacation experience. The rooms typically feature a comfortable bed with fresh linens, ensuring a restful night&apos;s sleep after a day of seaside exploration.</p>

          <p>En-suite bathrooms in the Budget Seaview Rooms are equipped with essential amenities, like basic toiletries, hot and cold water, towels etc.</p>

          <p>Guests can unwind in a comfortable space while taking in the picturesque views of the sea. With their budget-friendly pricing and the added charm of the ocean vistas, these rooms provide a memorable and enjoyable stay for guests seeking a seaside retreat without breaking the bank.</p>
      </div>


    </div>
    </PageRapper>
  )
}
