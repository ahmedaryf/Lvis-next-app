import React from 'react'
import PageRapper from '../components/PageRapper'

export default function page() {
  return (
    <PageRapper>
        <div className='min-h-screen bg-gradient-to-r from-[#616164]/10 to-[#DAB785]/50  dark:from-slate-700 dark:to-slate-600'>
        <div className="h-32"></div>
            <h1 className='pt-6 text-5xl text-center'>Photo Gallery</h1>
        </div>
    </PageRapper>
  )
}
