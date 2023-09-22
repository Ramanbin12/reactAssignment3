import React from 'react'
import send from './images/send.png'
const Componentbanner = () => {
  return (

     <div className='hidden md:flex w-[700px] flex flex-col  bg-[#7296AB] text-center md:p-5 lg:p-12 space-y-4 rounded-lg absolute md:-top-[20%] lg:-top-[30%] left-1/2 transform -translate-x-1/2'> 
      <p className='text-3xl text-white font-lato font-semibold'>Luminae Store</p>
      <p className='text-xl text-white'>Register your email not to miss the last minutes off+ Free delivery</p>
      <div >
      <div className='flex w-[300px] border-2 p-2 rounded-md bg-white justify-center  '>
        <input placeholder="Enter your email"/>
        <img className='place-self-center' src={send} alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Componentbanner
