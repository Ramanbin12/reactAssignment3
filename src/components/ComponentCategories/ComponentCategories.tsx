import React from 'react'
import {Category,Coupons,Signin} from "./SubComponents/index"
const ComponentCategories = () => {
  return (
    <div className="hidden md:flex w-full p-4 justify-evenly overflow-hidden bg-[#262626] text-white ">
      <Category/>
      <Coupons/>
      <Signin/>
    </div>
  )
}

export default ComponentCategories
