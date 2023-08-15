import React from 'react'
import PageRapper from '../components/PageRapper'

export default function page() {
  return (
    <PageRapper>
      <div className='min-h-screen bg-red-300 dark:bg-red-900'>
        <h1 className='pt-6 text-5xl text-center'>About</h1>
      </div>
    </PageRapper>
  )
}
