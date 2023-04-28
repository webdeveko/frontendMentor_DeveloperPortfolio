import React from 'react'
import github from '../assets/github.svg'
import frontend from '../assets/frontend-mentor.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

const Footers = () => {
  return (
    <section className=' bg-dark-gray'>
      <div className='flex flex-col  md:flex-row  justify-between items-center w-full h-20 md:h-16 text-white px-8 max-w-7xl mx-auto'>
        <div className='mb-2'>
          <h3 className='text-2xl font-bold' >adamkeyes</h3>
        </div>
        
        <ul className='flex mb-2'>
          <li className='px-4'>
            <a href="https://github.com/" target='_blank'>
              <img src={github} alt="github" />
            </a>
          </li>
          <li className='px-4'>
            <a href="https://www.frontendmentor.io/" target='_blank'>
              <img src={frontend} alt="frontend_mentor" />
            </a>
          </li>
          <li className='px-4'>
            <a href="https://www.linkedin.com/" target='_blank'>
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li className='px-4'>
            <a href="https://twitter.com/" target='_blank'>
              <img src={twitter} alt="twitter" />
            </a>
          </li>

        </ul>        
      </div>
    </section>
  )
}

export default Footers