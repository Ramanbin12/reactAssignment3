import React from 'react'
import { Checkbox,FormGroup,FormControlLabel } from '@mui/material'
const StyleComponent = () => {
  return (
    <div className='space-y-5'>
        <p className='text-lg font-semibold font-lato'> STYLE</p>
      <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Casual" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Business casual" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Bohemian" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Minimalist" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Uniqlo" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Zara" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Mango" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Ralph Lauren" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Calvin Klein" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Casual" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Rachel Pally" />

</FormGroup>
<hr/>
    </div>
  )
}

export default StyleComponent
