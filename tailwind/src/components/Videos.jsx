import React, { useEffect } from 'react'
import Valparai1 from '../assets/images/valparai.mp4'
import Valparai2 from '../assets/images/valparai1.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Videos = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,offset:100,once:false
    })
  },[])
  return (
    <div>
        <h1 className='text-white text-xl lg:text-3xl p-5 text-stone-500'>Memories with my sweet heart</h1>
        <div className='flex flex-wrap justify-center gap-10'>
            <video data-aos="fade-right"  autoPlay muted loop className='w-60'><source src={Valparai1} this video does not support browser /></video>
            <video  data-aos="fade-left" autoPlay muted loop className='w-60'><source src={Valparai2} this video does not support browser /></video>
        </div>
    </div>
  )
}

export default Videos