import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-800 dark:to-blue-900 dark:to-blue-000 p-3 md:p-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 min-h-[10vh]'>
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
        <h5 className='text-center mt-6'>Copyright © 2023</h5>
    </footer>
  )
}
