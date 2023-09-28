import React from 'react'
import {paypal,visa,mastercard} from "./assests"
import { SocialMedia } from '../ComponentTopNavbar/SubComponents'
const ComponentLowerFooter = () => {
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex p-5 w-[90%] gap-4 flex-col'>
        <div className='w-full flex justify-center  md:justify-between'>
            <div className='flex gap-5 md:gap-2'>
                <img src={visa} alt=""/>
                <img src={mastercard} alt="" />
                <img src={paypal} alt=""/>
            </div>
            <p className='hidden md:flex'>English</p>
        </div>
        <hr/>
        <div className='hidden md:flex justify-between '>
            <p>165-179 Forster Road City of Monash, Melbourne, Australia</p>
            <p className='text-[#9D9D9D]'>©2023 Copyright in reserved for lumine shop</p>
            <SocialMedia/>
        </div>
      </div>
    </div>
  )
}

export default ComponentLowerFooter
