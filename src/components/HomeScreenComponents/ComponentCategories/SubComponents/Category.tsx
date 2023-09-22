import React from 'react'
import { categories,Arrow1 } from '../assests'
const Category = () => {
  return (
    <div className='flex justify-evenly gap-5 place-self-center'>
      <div className="flex space-x-2">
        <img src={categories} />
        <p>Categories</p>
      </div>
      <div className='flex' >
        <span>USD</span>
        <img src={Arrow1}/>
      </div>
      <div className='flex'>
        <span>English</span>
        <img src={Arrow1}/>
      </div>
    </div>
  )
}

export default Category
