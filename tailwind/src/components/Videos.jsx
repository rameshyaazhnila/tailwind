import React from 'react'
import Valparai1 from '../assets/images/valparai.mp4'
import Valparai2 from '../assets/images/valparai1.mp4'
const Videos = () => {
  return (
    <div>
        <h1 className='text-white text-xl lg:text-3xl p-5 text-stone-500'>Memories with my sweet heart</h1>
        <div className='flex flex-wrap justify-center gap-10'>
            <video autoPlay muted loop className='w-60'><source src={Valparai1} this video does not support browser /></video>
            <video autoPlay muted loop className='w-60'><source src={Valparai2} this video does not support browser /></video>
        </div>
    </div>
  )
}

export default Videos