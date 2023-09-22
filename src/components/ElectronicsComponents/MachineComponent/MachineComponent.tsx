import React from 'react'
import {Camera} from "../../../utilities/Camera"
import Rating from './SubComponents/Rating'
import {left,right} from "./assests"
const MachineComponent = () => {
  return (
    <div className=' hidden md:flex bg-[#D9D9D9] justify-items-center justify-center    p-5'>
        <div className='flex justify-items-center'>
        <img className=' place-self-center ' src={left}  alt=""/>
        </div>
      {
        Camera.map((item)=>{
            return(
                <div className='bg-white w-[380px] flex flex-col gap-4 p-4  '>
                    <img src={item.image} alt=""/>
                    <div className='space-y-4'>
                        <p className='text-lg font-lato font-semibold'>{item.title}</p>
                        <Rating/>
                        <div className='flex gap-3'>
                        <p className='text-[#FF2E00] text-lg  font-lato font-medium'>{item.updatedprice}</p>
                        <p className='text-[#9D9D9D] line-through place-self-center'>{item.price}</p>
                        </div>
                        </div>
                    </div>
            )
        })
      }
      <div className='flex justify-items-center' >
      <img className='place-self-center' src={right} alt=""/>

      </div>
              </div>

  )
}

export default MachineComponent
