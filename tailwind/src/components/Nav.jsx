import React, { useState } from 'react'
import {Menu,X} from "lucide-react"

const Nav = () => {

    const [bar,setbar]=useState(false);
    const handleclick=()=>{
        setbar(!bar)
    }
  return (
    <>
        <div className='sticky z-20 top-0 w-full py-3 border backdrop-blur-lg border-red-500 text-white flex justify-between items-center px-8'>
            <h1 className='text-3xl'>Ramesh</h1>
            <div className="hidden md:flex justify-center md:text-lg lg:text-2xl space-x-6 text-3xl pl-5xl">
                <a className='slide hover:text-blue-400'>Home</a>
                <a className='slide hover:text-blue-400'>Contact</a>
                <a className='slide hover:text-blue-400'>Service</a>
                <a className='slide hover:text-blue-400'>Portfolio</a>
            </div>
            <div className="hidden md:flex justify-between space-x-6">
                <a href="#" className='py-2 px-3 rounded-md border'>Signin</a>
                <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-400 to-orange-700'>Subscribe</a>
            </div>
            <div className='md:hidden mr-0 border border-orange-400 p-1 rounded' onClick={handleclick}>{bar? <X size={35}/>:<Menu size={35}/>}</div>
        </div>
        <div className='sticky z-10 top-12 h-50 text-yellow-200 pt-2 bg-gradient-to-b from-black to-green-500 flex flex-col w-full'>
        {bar &&<ul className="md:hidden  flex flex-col text-2xl items-center p-5 gap-3 ">
                <li className='hover:text-blue-200 slide'>home</li>
                <li className='hover:text-blue-200 slide'>contact</li>
                <li className='hover:text-blue-200 slide'>service</li>
                <li className='hover:text-blue-200 slide'>portfolio</li>
            </ul>}
            {bar &&<div className='md:hidden flex justify-center space-x-6 pb-5'>
                <a href="#" className='sign py-2 px-3 rounded-md border'>Signin</a>
                <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-400 to-orange-700'>Subscribe</a>
            </div>}
        </div>
        <div>

        </div>
    </>
    
  )
}

export default Nav