import React from 'react'
import { trendType } from '../../../../utilities/type'
const Reddress:React.FC<trendType> = ({title,desc,color,img}) => {
  return (
    <div className={"flex w-full justify-between text-white"}>
      <div className={`${color} w-full flex flex-row `}>
      <div className={"flex flex-col gap-3 justify-center p-4"}>
        <p className='text-3xl font-bold '>{title}</p>
        <p className='text-lg  '>{desc}</p>
        <p className='underline'>Exlopre all category</p>
        </div>
      </div>
      <img className='w-[1/3]' src={img}/>
    </div>
  )
}

export default Reddress
