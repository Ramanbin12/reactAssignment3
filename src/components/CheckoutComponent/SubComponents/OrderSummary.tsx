import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppDispatch,useAppSelector } from '../../../hooks';
import { clothesType } from '../../../utilities/type';
const OrderSummary = () => {
  const cart= useAppSelector((state)=>state.clothes.cart)
  let ppi=1;
  let total=0;
  cart.map((item:clothesType)=>{
ppi=item.price*item.quantity
total=ppi+total
return total
  })
  
  return (
    
    <div className=' w-full mt-12  lg:w-1/3 '> 
      <div className='flex flex-col md:items-center'>
        <div className='flex flex-col gap-6 h-auto rounded-md bg-[#E9E9E9]  p-20'>
          <p className='font-lato text-xl font-semibold'>Order Summary</p>
          <div className='flex w-full justify-between flex-col gap-4'>
          <div className='text-[#555555] text-lg list-none flex justify-between '>
            <li>Price</li>
            <span>${total}</span>
            </div>
            <div className='text-[#555555] text-lg  list-none flex justify-between '>
            <li>Shipping</li>
            <span>$0</span>
            </div>
            <div className='text-[#555555] text-lg  list-none flex justify-between '>
            <li>Tax</li>
            <span>$0</span>
            </div>
            <div className='text-[#555555] text-lg  list-none flex justify-between '>
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
            <p >${total +10}</p>
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
