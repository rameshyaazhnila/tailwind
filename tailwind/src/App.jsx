import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Review from './components/Review'
import Fixed from './components/Fixed'
import Footer from './components/Footer'




const App = () => {
  return (
    <div>
        <Nav/>
        <div className='text-center max-w-5xl mx-auto'>
          <Hero/>
          <Videos/>
        </div>
        
        <div className='p-10'>
          <Review/>
        </div>
        <Footer/>
        <div className='flex justify-end'>
          <Fixed/>
        </div>
        
        

        
        
        
    </div>
  )
}

export default App