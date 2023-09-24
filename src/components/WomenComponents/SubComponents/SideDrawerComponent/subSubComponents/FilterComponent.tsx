import React from 'react'
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import {IconButton,Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../../../../hooks'
import { toggleDrawer } from '../../../../../slices/ClothesSlice'
const FilterComponent = () => {
    const dispatch=useAppDispatch()
  return (
    <div>
       <div className='flex border-2  md:hidden mx-3 items-center justify-between  px-5 '>
        <p>Filter your items</p>
         <Button onClick={()=>dispatch(toggleDrawer())}>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
        <FilterAltIcon/>
      </IconButton>
      Filter
      </Button>
      </div>
    </div>
  )
}

export default FilterComponent
