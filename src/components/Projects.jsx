import React from 'react'

import project1 from '../assets/project1.webp'
import project2 from '../assets/project2.webp'
import project3 from '../assets/project3.webp'
import project4 from '../assets/project4.webp'
import project5 from '../assets/project5.webp'
import project6 from '../assets/project6.webp'

import {Link} from 'react-scroll'
const Projects = () => {
  return (
    <div className='items-center text-white px-8 max-w-6xl mx-auto mb-16' >
      <div className='flex justify-between items-center mb-5'>
        <h1 className='font-bold text-[40px] md:text-[72px] xl:text-[88px]'>Projects</h1>
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
      <div className='grid sm:grid-cols-1 md:grid-cols-2 w-full text-white max-w-7xl mx-auto mb-5 gap-x-6'>
        <div className='mb-4 md:mb-10'> 
             {/* image */}
            <div className=' group relative'>                             
              <img className='mb-3 z-0' src={project1} alt="project1" />
              {/*black overlayt*/}
              <div className='w-full h-full z-40 md:absolute top-0 left-0 ease-in-out transition hover:bg-black/50'>
                {/* hidden link hover */}
                <div className='flex-col items-center ease-in-out transition absolute top-[34%] right-[34%] text-center hidden md:group-hover:flex'>
                  <button className='uppercase mt-5 mb-6 pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Project</button>
                  <button className='uppercase text-white mt-5 w-max pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Code</button>
                </div>
              </div>
            </div>
            <h1 className='font-bold uppercase text-[24px] mb-2'>Design Portfolio</h1>
            <div className='flex gap-x-8 mb-4 text-greyish'>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className=' flex md:hidden gap-x-8 mb-4'>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Project</button>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Code</button>
            </div>          
        </div>

        <div className='mb-4 md:mb-10'>
            {/* image */}
            <div className=' group relative'>                             
              <img className='mb-3 z-0' src={project2} alt="project2" />
              {/*black overlayt*/}
              <div className='w-full h-full z-40 md:absolute top-0 left-0 ease-in-out transition hover:bg-black/50'>
                {/* hidden link hover */}
                <div className='flex-col items-center ease-in-out transition absolute top-[34%] right-[34%] text-center hidden md:group-hover:flex'>
                  <button className='uppercase mt-5 mb-6 pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Project</button>
                  <button className='uppercase text-white mt-5 w-max pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Code</button>
                </div>
              </div>
            </div>
            <h1 className='font-bold uppercase text-[24px] mb-2'>E-learning Landing Page</h1>
            <div className='flex gap-x-8 mb-4 text-greyish'>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className=' flex md:hidden gap-x-8 mb-4'>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Project</button>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Code</button>
            </div>          
        </div>

        <div className='mb-4 md:mb-10'>
            {/* image */}
            <div className=' group relative'>                             
              <img className='mb-3 z-0' src={project3} alt="project3" />
              {/*black overlayt*/}
              <div className='w-full h-full z-40 md:absolute top-0 left-0 ease-in-out transition hover:bg-black/50'>
                {/* hidden link hover */}
                <div className='flex-col items-center ease-in-out transition absolute top-[34%] right-[34%] text-center hidden md:group-hover:flex'>
                  <button className='uppercase mt-5 mb-6 pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Project</button>
                  <button className='uppercase text-white mt-5 w-max pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Code</button>
                </div>
              </div>
            </div>
            <h1 className='font-bold uppercase text-[24px] mb-2'>To Do Web App</h1>
            <div className='flex gap-x-8 mb-4 text-greyish uppercase'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
            <div className=' flex md:hidden gap-x-8 mb-4'>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Project</button>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Code</button>
            </div>          
        </div>

        <div className='mb-4 md:mb-10'>
            {/* image */}
            <div className=' group relative'>                             
              <img className='mb-3 z-0' src={project4} alt="project4" />
              {/*black overlayt*/}
              <div className='w-full h-full z-40 md:absolute top-0 left-0 ease-in-out transition hover:bg-black/50'>
                {/* hidden link hover */}
                <div className='flex-col items-center ease-in-out transition absolute top-[34%] right-[34%] text-center hidden md:group-hover:flex'>
                  <button className='uppercase mt-5 mb-6 pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Project</button>
                  <button className='uppercase text-white mt-5 w-max pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Code</button>
                </div>
              </div>
            </div>
            <h1 className='font-bold uppercase text-[24px] mb-2'>Entertainment Web App</h1>
            <div className='flex gap-x-8 mb-4 text-greyish'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
            <div className=' flex md:hidden gap-x-8 mb-4'>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Project</button>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Code</button>
            </div>          
        </div>

        <div className='mb-4 md:mb-10'>
            {/* image */}
            <div className=' group relative'>                             
              <img className='mb-3 z-0' src={project5} alt="project5" />
              {/*black overlayt*/}
              <div className='w-full h-full z-40 md:absolute top-0 left-0 ease-in-out transition hover:bg-black/50'>
                {/* hidden link hover */}
                <div className='flex-col items-center ease-in-out transition absolute top-[34%] right-[34%] text-center hidden md:group-hover:flex'>
                  <button className='uppercase mt-5 mb-6 pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Project</button>
                  <button className='uppercase text-white mt-5 w-max pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Code</button>
                </div>
              </div>
            </div>
            <h1 className='font-bold uppercase text-[24px] mb-2'>Memory Game</h1>
            <div className='flex gap-x-8 mb-4 text-greyish'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
            <div className=' flex md:hidden gap-x-8 mb-4'>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Project</button>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Code</button>
            </div>          
        </div>

        <div className='mb-4 md:mb-10'>
            {/* image */}
            <div className=' group relative'>                             
              <img className='mb-3 z-0' src={project6} alt="project6" />
              {/*black overlayt*/}
              <div className='w-full h-full z-40 md:absolute top-0 left-0 ease-in-out transition hover:bg-black/50'>
                {/* hidden link hover */}
                <div className='flex-col items-center ease-in-out transition absolute top-[34%] right-[34%] text-center hidden md:group-hover:flex'>
                  <button className='uppercase mt-5 mb-6 pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Project</button>
                  <button className='uppercase text-white mt-5 w-max pb-2.5 border-b-2 border-greenish tracking-[2.29px] font-bold hover:-translate-y-1 hover:text-greenish delay-150 transition ease-in-out lg:cursor-pointer'>View Code</button>
                </div>
              </div>
            </div>
            <h1 className='font-bold uppercase text-[24px] mb-2'>Art Gallery Showcase</h1>
            <div className='flex gap-x-8 mb-4 text-greyish'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
            <div className=' flex md:hidden gap-x-8 mb-4'>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Project</button>
              <button className='transparent uppercase underline underline-offset-[12px] decoration-greenish hover:text-greenish'>View Code</button>
            </div>          
        </div>

      </div>
    </div>
  )
}

export default Projects