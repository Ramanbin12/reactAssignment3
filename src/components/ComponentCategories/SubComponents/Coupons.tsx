import React from 'react'
import { cosmetic } from '../assests'
const Coupons = () => {
  return (
    <div className=" hidden lg:flex  gap-3">
      <img src={cosmetic}/>
      <div>
        <p>Weekly Men's Toiletries Coupons.</p>
        <p>We extend exclusive discounts to our male clientele</p>
      </div>
    </div>
  )
}

export default Coupons
