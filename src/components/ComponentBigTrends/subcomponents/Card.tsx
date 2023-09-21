import React from 'react'
import { trendsTypes } from '../../../utilities/type'

const Card: React.FC<trendsTypes> = ({ img, title, desc, color,images }) => {
    return (
        
        <div className='flex  text-white '>
            <div className={`${color} min-w-[150px] flex flex-row `}>
                <div className='flex flex-col justify-center md:min-w-[200px] p-5 gap-3 '>
                <p className='text-5xl  font-lato'>{title}</p>
                <p className='text-2xl font-lato'>{desc}</p>
                <p className='underline'>Explore all category</p>
                </div>
            </div>
            <img className=' hidden lg:flex min-w-[200px]' src={img} alt="" />
            <img className='hidden lg:hidden md:flex min-w-[150px]' src={images}/>
        </div>
    )
}

export default Card
