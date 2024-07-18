import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,once:false,offset:0
    })
  },[])
  return (
    <div data-aos="zoom-in">
        <h1 className='text-white text-md md:text-xl text-center p-5' >@copyright web developed 2024 by <a href="www.google.com" className='lg:text-blue-500'>Ramesh</a></h1>
        
    </div>
  )
}

export default Footer