import React from 'react'
import {right} from "../../ElectronicsComponents/MachineComponent/assests"
const Header = () => {
  return (
    <div className='flex p-2'>
      <p className='place-self-center'>Homepage</p>
      <img src={right} alt=""/>
      <p className='place-self-center'>Women</p>
      <img  src={right} alt=""/>
      <p className='place-self-center'>Clothes</p>
    </div>
  )
}

export default Header
