import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


import img002 from '../assets/images/img2.jpg'
import img003 from '../assets/images/img3.jpg'


import { GlobeLock } from "lucide-react";

const Hero = () => {
  useEffect(()=> {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return (
    <div className=' text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5 md:p-6 lg:p-7 '>
        <h1>We Together practice code for<br></br> <span data-aos="fade-up" className='bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text font-semibold font-extrabold'>Web Design</span></h1>
        <p className='text-xl pt-5 pb-5 z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nulla! Quasi sapiente facere, enim sit officiis veritatis asperiores, eveniet, numquam quia beatae reprehenderit possimus earum!</p>
        <div className='flex justify-center space-x-5 text-lg '>
          <a href="#" className='border px-2 py-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-md'>start now</a>
          <a href="#" className='border px-2 py-1 rounded-md'>coding sheet</a>
        
        </div>
        <div className='flex flex-wrap justify-center mt-7 sm:space-x-10 gap-5'>
          <img data-aos="zoom-in-right" className='w-60 h-60 rounded-md' src={img002} alt="" />
          <img data-aos="zoom-in-left" className='w-60 h-60 rounded-md' src={img003} alt="" />
        </div>
        

    </div>

  )
}

export default Hero