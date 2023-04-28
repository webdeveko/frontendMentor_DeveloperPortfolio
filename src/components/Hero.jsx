import React from 'react'

import image from '../assets/image.webp'

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center text-white px-8 max-w-7xl mx-auto mb-16' >
        <div className='justify-start'>
        <img className='flex flex-1 max-h-[383px] md:max-h-[600px] xl:max-h-[720px]' src={image} alt="hero_image" />
        </div>

        <div className='max-w-[680px] text-center md:text-left'>
          <h1 className='justify-start font-bold text-[40px] md:text-7xl tracking-[-1.14px] mb-12'>Nice to meet you! I'm <span className='underline underline-offset-4 decoration-[#4EE1A0]'>Adam Keyes</span></h1>
          <p className='max-w-[445px] font-medium text-lg mb-14'>Based in the UK, I'm a front-end developer passionate about building accessible seb apps that users love.</p>
          <button className='transparent uppercase underline underline-offset-[12px] decoration-[#4EE1A0] hover:text-[#4EE1A0]'>Contact Me</button>
        </div>      
      </div>
        <div className='mx-8'>
        <div className='bg-white h-[1px] max-w-7xl mb-16 mx-auto'/>
      </div>
    </section>
  )
}

export default Hero;