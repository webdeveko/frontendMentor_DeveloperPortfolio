import React from 'react'
import {useForm} from 'react-hook-form'

import Warning from '../assets/warning.svg'

const Contact = () => {

  const form = useForm();

  const {register, handleSubmit, formState} = form;
  const {errors} = formState;
  
  const onSubmit = (data) => {
    console.log('Form Submitted', data)
  }

  return (
    <section className='bg-dark-gray' id='contact'>
      <div className=' text-white px-8 max-w-6xl mx-auto'>      
        <div className='flex flex-col xl:flex-row justify-between items-center lg:items-start py-16'>
          <div className='text-center xl:text-left mb-4'>
            <h2 className='font-bold text-[40px] md:text-[72px] xl:text-88px]'>Contact</h2>
            <p className='font-medium text-[18px] leading-7 max-w-[445px]'>
              I would love to hear about your project and how I could help. Please fill in the form, and i'll get back to you as soon as possible.
            </p>
          </div>
          <div className=' '>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className='md:min-w-[445px] xs:min-w-[320px] w-full'>
                  <div className='relative'>
                    <input 
                      type="text"                  
                      id='name'
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name is required"}
                      })}
                      className='bg-transparent border-b py-3 outline-none w-full placeholder:text-greyish focus:border-greenish transition-all' 
                      placeholder='NAME' 
                    />
                    {errors.name? (
                        <img className='absolute right-0 top-0 py-3' src={Warning} />
                      ) : ('')}                    
                  </div>
                  
                  <p className='errors'>{errors.name?.message}</p>

                  <div className='relative'>
                    <input 
                      type='email'
                      id='email'
                      {...register('email', {
                        required: {
                          value: true,
                          message: "email is required"},
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: 'Sorry, invalid format here'
                        }
                      })}
                      className=' bg-transparent border-b py-3 outline-none w-full placeholder:text-greyish focus:border-greenish transition-all'                   
                      placeholder='EMAIL' 
                    />
                    {errors.email? (
                      <img className='absolute right-0 top-0 py-3' src={Warning} />
                    ) : ('')}
                  </div>
                  <p className='errors'>{errors.email?.message}</p>

                  <div className='relative'>
                    <textarea 
                      id='chat'
                      {...register('chat', {
                        required: {
                          value: true,
                          message: "message is required"}
                      })}
                      className='bg-transparent border-b  outline-none w-full min-h-[107px] placeholder:text-greyish focus:border-greenish transition-all resize-none' 
                      placeholder='MESSAGE'>
                    </textarea>
                    {errors.chat? (
                          <img className='absolute right-0 top-0 py-3' src={Warning} />
                        ) : ('')}
                  </div>
                  <p className='errors'>{errors.chat?.message}</p>
                  
                  <div className=' mt-6 flex justify-end'>
                  <button className='transparent uppercase underline underline-offset-[12px] decoration-[#4EE1A0] hover:text-greenish '>SEND MESSAGE</button>
                  </div>
                                    
                </form>
              </div>
        </div>
        <div className='bg-white h-[1px] max-w-7xl mx-auto'/>
      </div>
    </section>
  )
}

export default Contact