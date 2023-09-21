import React from 'react'
import {Top} from "../../utilities/Top"
import Rating from './Subcomponents/Rating'
import "../../common/style.css"
const ComponentTopTrends = () => {
  return (
    <>
    <div className='p-11'>
        <p className="text-4xl font-lato">Top100</p>
   
    <div className="flex gap-4 custom-scrollbar overflow-x-auto  md:flex-wrap ">
      {
        Top.map((item)=>{
            return(
                <div className='border-2 flex flex-col justify-between min-w-[250px] rounded-lg leading-10 mt-5 '>
                    <img src={item.image} alt=""/>
                    <div className='p-[20px]'>
                        <p className='font-lato  font-medium'>{item.title}</p>
                        <p className='text-sm text-[#555555]'>{item.desc}</p>
                        <Rating/>
                        <div className='flex gap-3'>
                            <p className='text-red-500 font-medium'>${item.updatedprice}</p>
                            <p className='line-through text-sm place-self-center text-[#555555]'>${item.price}</p>
                            <p className='text-red-400'>-{item.discount}%</p>
                            </div>
                        </div>
                    </div>
            )
        })
      }
    </div>
    </div>
    </>
  )
}

export default ComponentTopTrends
