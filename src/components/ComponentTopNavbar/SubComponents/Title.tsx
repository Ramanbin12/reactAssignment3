import React from 'react'
import {Logo,card,Cart} from "../assets/index"
const Title = () => {
  return (
    <>
    <div className='text-lg space-x-4 text-justify flex font-Lato justify-center p-[8px]'>
      <img src={Logo}/>
      <span className='text-justify place-self-center p-[2px]'>Luminae</span>
    </div>
    <div className='md:hidden place-self-center flex gap-2'>
      <img src={Cart} alt=""/>
      <img src={card} alt=""/>

    </div>
    </>
  )
}

export default Title
