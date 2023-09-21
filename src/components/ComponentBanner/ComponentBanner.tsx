import React from 'react'
import {Iphone,left,right} from "./assests"
const ComponentBanner = () => {
  return (
    <div className='hidden md:flex border justify-evenly bg-[#F7DDD0]'>
      <img className='place-self-center' src={left} alt="" />
      <div className="flex flex-col justify-center">
        <p className='text-[#465D6B] text-[24px] '>MAGSAFE</p>
        <p className='text-[#555555]'>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
      </div>
      <img  src={Iphone} alt="" />
      <img className='place-self-center' src={right} alt=""/>
    </div>
  )
}

export default ComponentBanner
