import React from 'react'
import PageRapper from '../components/PageRapper'
import FormData from '../components/FormData'
import Data from '../components/Data'

export default function page() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-[#616164]/10 to-[#DAB785]/50  dark:from-slate-700 dark:to-slate-600'>
        <PageRapper>
            <div className="h-32"></div>
                <h1 className='text-5xl md:text-8xl font-medium md:font-bold text-[#7E2E35] dark:text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)]'>Contact us</h1>
                <FormData />
                {/* <Data /> */}
        </PageRapper>
    </main>
  )
}
