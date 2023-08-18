import React from 'react'
import PageRapper from '../components/PageRapper'

export default function page() {
  return (
    <PageRapper>
        <div className='min-h-screen bg-gradient-to-r from-cyan-300 to-blue-500 dark:from-cyan-800 dark:to-blue-900'>
        <div className="h-32"></div>
            <h1 className='pt-6 text-5xl text-center'>Contact</h1>
        </div>
    </PageRapper>
  )
}
