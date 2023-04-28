import { useState } from 'react'
import Nav from './components/nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footers from './components/Footers'

function App() {
  
  return (
    <>
      <div className='bg-[#151515] '>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footers />
      </div>
    </>
  )
}

export default App
