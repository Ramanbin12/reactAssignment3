import React,{useState} from 'react'
import { Drawer,Box,Typography,IconButton,Button } from '@mui/material'
import SideNavbar from "./subSubComponents/SideNavbar"
import { useAppDispatch,useAppSelector } from '../../../../hooks'
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { toggleDrawer } from '../../../../slices/ClothesSlice'
const SideDrawerComponent = () => {
  // const [isDrawerOpen,setDrawerOpen]=useState(false)
const isDrawerOpen=useAppSelector((state)=>state.clothes.sideDrawer);
const dispatch=useAppDispatch()
  return (
    <>
    <div className='md:hidden'>
    <Drawer anchor='left' open={isDrawerOpen} onClose={()=>dispatch(toggleDrawer())}>

        <SideNavbar/>
    </Drawer>
    </div>
    <div className='hidden md:flex'>
      <SideNavbar/>
    </div>
    </>
  )
}

export default SideDrawerComponent
