import React from 'react'
import Card from "./subcomponents/Card"
import {bigTrends1} from "../../utilities/BigTrends"
const ComponentBigTrends = () => {
  return (
    <div className='hidden md:flex m-11 justify-between gap-5'>
      {
        bigTrends1.map((item)=>{
            return(
                <Card id={item.id} img={item.img} title={item.title} desc={item.desc}  color={item.color} images={item.images} />
            )
        })
      }
    </div>
  )
}

export default ComponentBigTrends
