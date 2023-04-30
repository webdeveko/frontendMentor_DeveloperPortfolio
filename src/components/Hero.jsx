import React from 'react'

import image from '../assets/image.webp'
import Rings from '../assets/rings.svg'

import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className='max-w-6xl mx-auto mt-12' id='home'>
      <div className=''>
        <img className='absolute -left-[200px] top-[200px] md:top-[70px] md:-left-[260px] xl:-left-[180px] xl:top-[220px] z-0' src={Rings} alt="" />
      </div>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center text-white px-8  mx-auto mb-16 z-20' >
        <div className='justify-start'>
        <img className='flex flex-1 max-h-[383px] md:max-h-[600px] xl:max-h-[720px] ' src={image} alt="hero_image" />
        </div>

        <div className='max-w-[680px] text-center md:text-left'>
          <h1 className='xl:max-w-[680px] md:max-w-[445px] justify-start font-bold text-[40px] md:text-7xl tracking-[-1.14px] mb-12'>Nice to meet you! I'm <span className='border-b-4 border-greenish'>Adam Keyes</span></h1>
          <p className='max-w-[445px] font-medium text-lg mb-14'>Based in the UK, I'm a front-end developer passionate about building accessible seb apps that users love.</p>
          <Link
          to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          >
          <button className='transparent uppercase underline underline-offset-[12px] decoration-[#4EE1A0] hover:text-greenish'>Contact Me</button>
        </Link>
        </div>      
      </div>
        <div className='mx-8'>
        <div className='bg-white h-[1px] max-w-7xl mb-16 mx-auto'/>
      </div>
    </section>
  )
}

export default Hero;