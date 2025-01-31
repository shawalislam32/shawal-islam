import React from 'react'
import Banner from './Banner'
import Skills from './Skills'
import About from './About'
import WhatIDo from './WhatIDo'


export default function HomePage() {
  return (
    <div className='space-y-14 md:space-y-16 lg:space-y-20 max-w-screen-xl mx-auto'>
        <Banner/>
        <WhatIDo/>
        <Skills/>
        <About/>
    </div>
  )
}
