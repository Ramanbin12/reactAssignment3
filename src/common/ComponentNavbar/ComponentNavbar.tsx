import React from 'react'
import { NavLink } from 'react-router-dom'
const ComponentNavbar = () => {
  return (
    // <div className='hidden lg:flex place-self-center list-none text-sm lg:text-base  w-full justify-between px-[10px] py-[16px] '>
    //   <li><NavLink to='/women'>Women</NavLink></li>
    //   <li>Male</li>
    //   <li>Mother-Child</li>
    //   <li>Home & Furniture</li>
    //   <li>Super market</li>
    //   <li>Cosmetics</li>
    //   <li>Shoe & Bag</li>
    //   <li><NavLink to='/electronics'>Electronic</NavLink></li>
    //   <li>Sport & Outdoor</li>
    //   <li>Best seller</li>
    <div>


      <ul className="w-full flex">
        <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide"><a>Non-Dropdown</a></li>

        <li className="group  relative dropdown  px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
          <a>Dropdown</a>
          <div className="group-hover:block dropdown-menu absolute hidden h-auto">

            <ul className="top-0 w-48 bg-white shadow px-6 py-8">
              <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
              <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
              <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
              <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
              <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
            </ul>
          </div>
        </li>
        <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide"><a>Non-Dropdown</a></li>
        <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide"><a>Non-Dropdown</a></li>
        <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide lg:pr-8"><a>Non-Dropdown</a></li>
      </ul>
    </div>


  )
}

export default ComponentNavbar
