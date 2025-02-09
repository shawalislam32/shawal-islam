import React from 'react';
import Banner from './Banner';
import Skills from './Skills';
import About from './About';
import WhatIDo from './WhatIDo';
import Projects from './Projects';
import Contact from './Contact';

export default function HomePage() {
  return (
    <div className='mx-auto max-w-screen-xl space-y-14 md:space-y-16 lg:space-y-20'>
      <Banner />
      <WhatIDo />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
