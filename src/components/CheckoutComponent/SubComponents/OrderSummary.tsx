import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const OrderSummary = () => {
  return (
    <div className=' w-full lg:w-1/3 '> 
      <div className='flex flex-col md:items-center'>
        <div className='flex flex-col gap-4 bg-[#E9E9E9]  p-5'>
          <p className='font-lato text-lg font-semibold'>Order Summary</p>
          <div className='flex w-full justify-between flex-col'>
          <div className='text-[#555555] list-none flex justify-between '>
            <li>Price</li>
            <span>$99.23</span>
            </div>
            <div className='text-[#555555] list-none flex justify-between '>
            <li>Shipping</li>
            <span>$0</span>
            </div>
            <div className='text-[#555555] list-none flex justify-between '>
            <li>Tax</li>
            <span>$0</span>
            </div>
            <div className='text-[#555555] list-none flex justify-between '>
            <li>Discount</li>
            </div>
          </div>
          <div className='flex w-full'>
<ErrorIcon style={{color:'red'}}/>
<p className='text-[#FF2E00]'>You must log in to use the discount code</p>
          </div>
          <div className='flex justify-between'>
         <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Pack in a Gift Box" />
  </FormGroup>
        <p className='place-self-center'>$10.90</p>
       
          </div>
          <div className='flex  justify-between'>
            <p>Total Price</p>
            <p >$110.13</p>
          </div>
          <div className='border-2 p-3 gap-2 rounded-md bg-[#434343] text-white flex justify-center'>
            <ShoppingCartCheckoutIcon/>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
