import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import RemoveIcon from '@mui/icons-material/Remove';
function valuetext(value: number) {
  return `${value}°C`;
}

const SliderComponent = () => {

  const [value, setValue] = React.useState<number[]>([60, 290]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className='space-y-3'>
      <p className='text-lg font-semibold font-lato'>PRICE</p>

      <div className='flex p-2 gap-10'>
        <div className='border-2 w-[100px] h-[50px] flex items-center justify-center rounded-lg text-[#555555]'> $ {value[0]}</div>
        <span className='flex  place-self-center'>  <RemoveIcon /></span>

        <div className='border-2 w-[100px] h-[50px] flex items-center justify-center  text-[#555555] rounded-lg'> $ {value[1]}</div>
      </div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        min={0}
        max={500}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className='flex justify-between text-[#9D9D9D]'>
        <p>Minimum $200</p>
        <p>Maximum $500</p>

      </div>
    </div>
  )
}

export default SliderComponent


