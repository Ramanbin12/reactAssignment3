import React from 'react'
import {Search,Title,NavLinks,SocialMedia} from "./SubComponents/index"
import Menubar from './SubComponents/Menubar'
const ComponentTopNavbar = () => {
  return (
    <div className="flex  justify-evenly md:flex-col lg:flex-row md:gap-3 overflow-hidden px-[10px] py-[20px]">
      <div className='w-full lg:w-[700px] flex gap-4  md:gap-0 flex-col md:flex-row justify-between '>
        <div className='flex justify-between'>
      <Menubar/>
      <Title/>
      </div>
      <Search/>

      </div>
     
      <div className='hidden justify-between place-self-center gap-2  md:flex w-[700px] lg:w-[850px] '>
      <NavLinks/>
      <SocialMedia/>
      </div>
    </div>
  )
}

export default ComponentTopNavbar
