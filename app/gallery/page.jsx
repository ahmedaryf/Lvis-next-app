import React from 'react'
import PageRapper from '../components/PageRapper'

export default function page() {
  return (
    <PageRapper>
        <div className='min-h-screen bg-blue-200 dark:bg-blue-900'>
            <h1 className='pt-6 text-5xl text-center'>Photo Gallery</h1>
        </div>
    </PageRapper>
  )
}
