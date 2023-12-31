import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-[#616164]/10 to-[#DAB785]/50  dark:from-slate-600 dark:to-slate-900 p-3 md:p-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 min-h-[10vh] text-gray-800 dark:text-white'>
            <div className=''>
                <h5>Follow us</h5>
            </div>
            <div>
                <h5>Contact us</h5>
            </div>
            <div>
                <h5>Links</h5>
            </div>
        </div>
        <h5 className='text-center mt-6 text-gray-800 dark:text-white'>Copyright © 2023</h5>
    </footer>
  )
}
