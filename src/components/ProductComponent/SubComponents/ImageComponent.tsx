import React from 'react'
import { clothesType } from '../../../utilities/type'

interface ImageString{
  Image:string
}


const ImageComponent:React.FC<ImageString>= ({Image}) => {
  return (
    <div className='flex w-full justify-center md:w-[50%] '>
    <img className='w-full flex md:w-[500px] h-[500px]  ' src={Image}  alt="" />
</div>
  )
}

export default ImageComponent
