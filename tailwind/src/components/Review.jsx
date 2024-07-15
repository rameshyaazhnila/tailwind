import React from 'react'
import { BatteryCharging} from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf,PlugZap } from "lucide-react";
import { BabyIcon } from 'lucide-react';
import { ActivityIcon } from 'lucide-react';

const Review = () => {
  return (
    <div>
        <h1 className='text-white text-xl '>Common Questions...</h1>
        <div className='flex flex-wrap justify-center items-center gap-9'>
            <div className='border border-orange-600 rounded-md flex flex-col items-center p-4 max-w-sm'>
                <h1 className='text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent'>Ramesh</h1>
                <a href="#"><ActivityIcon size={40} color="red"/></a>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellat voluptatibus provident molestias ex quis quae. Minus dolorum impedit, alias aliquam debitis rerum. Sint rerum nesciunt cum molestias? In, obcaecati!</p>
            </div>
            <div className='border border-orange-600 rounded-md flex flex-col items-center p-4 max-w-sm'>
                <h1 className='text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent'>Divya</h1>
                <a href="#"><BatteryCharging size={40} color="red"/></a>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellat voluptatibus provident molestias ex quis quae. Minus dolorum impedit, alias aliquam debitis rerum. Sint rerum nesciunt cum molestias? In, obcaecati!</p>
            </div>
            <div className='border border-orange-600 rounded-md flex flex-col items-center p-4 max-w-sm'>
                <h1 className='text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent'>Kiruba</h1>
                <a href="#"><ShieldHalf size={40} color="red"/></a>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellat voluptatibus provident molestias ex quis quae. Minus dolorum impedit, alias aliquam debitis rerum. Sint rerum nesciunt cum molestias? In, obcaecati!</p>
            </div>
            <div className='border border-orange-600 rounded-md flex flex-col items-center p-4 max-w-sm'>
                <h1 className='text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent'>Kaliyammal</h1>
                <a href="#"><ActivityIcon/></a>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellat voluptatibus provident molestias ex quis quae. Minus dolorum impedit, alias aliquam debitis rerum. Sint rerum nesciunt cum molestias? In, obcaecati!</p>
            </div >
            <div className='border border-orange-600 rounded-md flex flex-col items-center p-4 max-w-sm'>
                <h1 className='text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent'>Krishnan</h1>
                <a href="#"><PlugZap size={40} color="red"/></a>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellat voluptatibus provident molestias ex quis quae. Minus dolorum impedit, alias aliquam debitis rerum. Sint rerum nesciunt cum molestias? In, obcaecati!</p>
            </div>
            <div className='border border-orange-600 rounded-md flex flex-col items-center p-4 max-w-sm'>
                <h1 className='text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent'>unicorn</h1>
                <a href="#"><BabyIcon size={40} color="red"/></a>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellat voluptatibus provident molestias ex quis quae. Minus dolorum impedit, alias aliquam debitis rerum. Sint rerum nesciunt cum molestias? In, obcaecati!</p>
                
                
            </div>
        </div>
        
    </div>
  )
}

export default Review