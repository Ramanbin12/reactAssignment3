import React from 'react'
import {photo,polygon} from "./assests"
const ErrorComponent = () => {
  return (
    <div className='flex p-11 flex-wrap md:nowrap'>
      <div className='flex items-center justify-center w-full md:w-[50%]'>
        <img className='flex ' src={photo} alt=""/>
      </div>
      <div className='flex items-center w-full md:w-[50%]'>
        <div className='flex flex-col  border-4  p-4 rounded-lg gap-3 '>
            <p className='text-xl font-lato font-semibold'>No results were found for searching " Blue Sony Camera ".</p>
            <div className='flex gap-1'>
                <img className='place-self-center' src={polygon} alt=""/>
                <p>We recommend you to search different clear key words to get the best result.</p>
            </div>
            <div className='flex gap-1'>
                <img className='place-self-center' src={polygon} alt=""/>
                <p>You can see the most related purchased products bellow.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorComponent
