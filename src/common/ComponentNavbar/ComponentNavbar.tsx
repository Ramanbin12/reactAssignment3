import React from 'react'
import { NavLink } from 'react-router-dom'
const ComponentNavbar = () => {
  return (
    <div className='hidden lg:flex place-self-center list-none text-sm lg:text-base  w-full justify-between px-[10px] py-[16px] '>
      <li><NavLink to='women'>Women</NavLink></li>
      <li>Male</li>
      <li>Mother-Child</li>
      <li>Home & Furniture</li>
      <li>Super market</li>
      <li>Cosmetics</li>
      <li>Shoe & Bag</li>
      <li><NavLink to='electronics'>Electronic</NavLink></li>
      <li>Sport & Outdoor</li>
      <li>Best seller</li>

    </div>
  )
}

export default ComponentNavbar
