import React from 'react'
import {useForm} from 'react-hook-form'

const Contact = () => {

  

  return (
    <div className='bg-dark-gray'>
    <div className=' text-white px-8 max-w-7xl mx-auto'>      
        <div className='flex flex-col xl:flex-row justify-between items-center py-16'>
          <div className='w-1/2 text-center xl:text-left mb-4'>
            <h2 className='font-bold text-[40px] md:text-[72px] xl:text-88px]'>Contact</h2>
            <p className='font-medium text-[16px] leading-6 max-w-[445px]'>
              I would love to hear about your project and how I could help. Please fill in the form, and i'll get back to you as sson as possible.
            </p>
          </div>
          <form className='flex-1 flex-col'>
                <input 
                  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-greyish focus:border-greenish transition-all' 
                  type="text"                  
                  placeholder='NAME' 
                />
                <input 
                  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-greyish focus:border-greenish transition-all' 
                  type="text"
                  name='email' 
                  placeholder='EMAIL' 
                />
                <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-greyish focus:border-greenish transition-all resize-none mb-12' placeholder='MESSAGE'></textarea>
                <button className='transparent uppercase underline underline-offset-[12px] decoration-[#4EE1A0] hover:text-greenish '>SEND MESSAGE</button>

                
              </form>
            </div>
            <div className='bg-white h-[1px] max-w-7xl mx-auto'/>
    </div>
    </div>
  )
}

export default Contact