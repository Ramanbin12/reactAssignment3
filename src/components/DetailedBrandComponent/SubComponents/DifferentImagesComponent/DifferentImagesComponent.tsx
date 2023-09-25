import React from 'react'
import { mainImg, img1, img2, img3, img4, img5 } from "../../assests"
const DifferentImagesComponent = () => {
    return (
        // <div className='w-full lg:w-[50%] lg:flex-wrap flex flex-wrap-reverse'>
        <div className='flex w-full flex-wrap-reverse md:w-[50%] sm:h-[700px] lg:h-[900px] border-2'>
            <div className='flex w-[95%] m-auto sm:w-[20%]  sm:h-[700px] lg:h-[900px] justify-between  sm:flex-col' >
                <img className=' sm:w-[100%] h-[100px] sm:h-[20%]  w-[20%] flex' src={img1} alt="" />
                <img className=' sm:w-[100%] h-[100px] sm:h-[20%] w-[20%] flex' src={img2} alt="" />
                <img className=' sm:w-[100%] h-[100px] sm:h-[20%]  w-[20%] flex' src={img3} alt="" />
                <img className=' sm:w-[100%] h-[100px] sm:h-[20%] w-[20%] flex' src={img4} alt="" />
                <img className=' sm:w-[100%] h-[100px] sm:h-[20%] w-[20%] flex' src={img5} alt="" />
            </div>

            <img className='w-full sm:w-[80%]  sm:h-[700px] lg:h-[900px]' src={mainImg} alt="" />
        </div>
    )
}

export default DifferentImagesComponent
