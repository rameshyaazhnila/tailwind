import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Review from './components/Review'
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
          <Footer/>
        </div>
        
        
    </div>
  )
}

export default App