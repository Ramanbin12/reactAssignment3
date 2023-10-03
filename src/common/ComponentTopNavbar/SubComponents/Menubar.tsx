import React from 'react'
import {Menu} from "../assets/index"
import { useAppDispatch } from '../../../hooks'
import { setShowSideNav } from '../../../slices/NavSlice'
const Menubar = () => {
  const dispatch=useAppDispatch()
  return (
    <div className="place-self-center lg:hidden">
      <img src={Menu} alt ="" onClick={()=>dispatch( setShowSideNav(true))} />
    </div>
  )
}

export default Menubar
