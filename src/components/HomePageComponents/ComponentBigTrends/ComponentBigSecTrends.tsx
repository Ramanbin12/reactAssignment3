import React from 'react'
import Card from "./subcomponents/Card"
import { bigtrend2} from "../../../utilities/BigTrends"
const ComponentBigSecTrends = () => {
  return (
    <div className='hidden md:flex p-11 justify-between gap-5'>
      {
         bigtrend2.map((item)=>{
            return(
                <Card id={item.id} img={item.img} title={item.title} desc={item.desc}  color={item.color} images={item.images}/>
            )
        })
      }
    </div>
  )
}

export default ComponentBigSecTrends
