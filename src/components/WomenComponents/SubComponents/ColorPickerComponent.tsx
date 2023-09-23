import React, { useState } from 'react'
import { ToggleButton, ToggleButtonGroup, Stack } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import { useAppDispatch,useAppSelector } from '../../../hooks';
import {togglebutton} from "../../../slices/ColorPickerSlice";
import { colorType}from "../../../utilities/type"
const ColorPickerComponent = () => {
 
  const dispatch=useAppDispatch();
  const colorpicker=useAppSelector((state)=>state.colorpicker)
  return (
   
    <div className='space-y-3' >
              <p className='text-lg font-semibold font-lato'> COLOR</p>
              <div className='grid grid-rows-2 grid-cols-5 gap-3'>

  {
      colorpicker.colors.map((item:colorType)=>{
        return(
  <ToggleButton
        value="check"
        onClick={()=>{
            dispatch(togglebutton(item.id))
        }}
        style={{
          backgroundColor:  `${item.color}` ,
          color: 'white',
          width: '10px',
          height: '10px',
          borderRadius: '50%'
        }}
      >
        {item.checked ? <DoneIcon /> : ''}
      </ToggleButton> 
        )
      })
    }
          </div>

<hr/>
    </div>
  )
}

export default ColorPickerComponent
