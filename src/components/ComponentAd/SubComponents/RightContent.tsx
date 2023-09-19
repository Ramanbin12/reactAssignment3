import React from 'react'
import { Icon } from '../assets'
const RightContent = () => {
  return (
    <div className='w-3/5 flex flex-col  place-self-center gap-5'>
      <p className='font-lato text-5xl text-center font-bold'>Kimonos, Caftans & Pareos </p>
      <p className='font-lato text-2xl text-center '>Poolside glam included From $4.99</p>
      <div className="flex gap-2 w-[243px] h-[56px] justify-center place-self-center bg-[#4172DC] ">
        <img className='place-self-center' src={Icon} />
      <button className='text-center'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default RightContent
