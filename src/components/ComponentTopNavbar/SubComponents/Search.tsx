import React from 'react'
import {Searchbox, Arrow} from "../assets/index"
const Search = () => {
  return (
  
    <div className='sm:w-full  md:w-[500px] lg:w-[450px]  flex  justify-between border-4 border-[#D9D9D9] px-[8px] py-[10px] '>

      <input placeholder='Search Products' className='w-[110px]' />
      <div className='flex'>
      <div className='flex w-[130px] justify-center space-x-0.5' >
      <p>All Categories</p>
      <img src={Arrow}/>
      </div>
      <img src={Searchbox} />
    </div>
    </div>
  
  )
}

export default Search
