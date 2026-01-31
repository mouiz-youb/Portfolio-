import React from 'react'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'

function Home() {
  return (
    <div className='w-full  flex justify-center itms-center flex-col '>
      <Hero />
      <Technologies/>
         {/* <Hero /> */}
    </div>
  )
}

export default Home
