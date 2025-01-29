import React from 'react'
import Banner from './Banner'
import Skills from './Skills'

export default function HomePage() {
  return (
    <div className='space-y-10 max-w-screen-xl mx-auto'>
        <Banner/>
        <Skills/>
    </div>
  )
}
