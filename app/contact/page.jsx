import React from 'react'
import PageRapper from '../components/PageRapper'

export default function page() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-cyan-300 to-blue-500 dark:from-cyan-800 dark:to-blue-900'>
        <PageRapper>
            <div className="h-32"></div>
                <h1 className='text-5xl md:text-8xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)]'>Contact us</h1>
        </PageRapper>
    </main>
  )
}
