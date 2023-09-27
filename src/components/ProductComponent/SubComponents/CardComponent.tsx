import React from 'react'
import { ToggleButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {cart} from "../../DetailedBrandComponent/assests"
import {increment,decrement,addToCart} from "../../../slices/ClothesSlice"
import { useAppDispatch } from '../../../hooks';
interface CardType{
  id:number,
  title:string,
  price:number,
  size?:string[],
  color?:string[],
  quantity:number
}
const CardComponent:React.FC<CardType> = ({id,title,price,size,color,quantity}) => {
  const dispatch=useAppDispatch()
  return (
    <div className='flex  flex-col gap-7  p-5'>
    <div className='flex flex-col gap-3'>
        <p className='text-4xl font-lato font-semibold'>{title}</p>
        <p className='text-[#262626]'>${price}</p>
    </div>
    <div className='flex w-full gap-10 md:gap-20'>
        <p className='text-lg place-self-center'>Size</p>
        <div className='flex gap-3'>
            {
                size!.map((i) => {
                    return (

                        <ToggleButton value={i} style={{ width: "40px" }}>{i}</ToggleButton>
                    )
                })
            }
        </div>
    </div>
    <div className='flex  gap-5 sm:gap-10 md:gap-20'>
        <p className="text-lg place-self-center">Color</p>
        <div className='flex gap-3'>
            {
                color!.map((i) => {
                    return (
                        <ToggleButton value="check"
                            style={{
                                backgroundColor: `${i}`,
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%'
                            }}
                        >
                        </ToggleButton>
                    )
                })
            }
        </div>
    </div>

    <div className="flex gap-2 sm:gap-6 md:gap-14">
        <p className="text-lg place-self-center" >Shipping</p>
        <div>
            <p className='text-lg'>Free Shipping to Victoria teritory</p>
            <p className='text-[#9D9D9D]'>Delivery Time: 14-17 days</p>
        </div>
    </div>
    <div className='flex gap-5 sm:gap-10 md:gap-16'>
        <p>Quantity</p>
        <div className='flex border-2 gap-2'>
            <button className=' p-1'  ><RemoveIcon /></button>
            <p className='place-self-center'>1</p>
            <button className=' p-1' ><AddIcon /></button>

        </div>
    </div>
    <div className='bg-[#E9E9E9] flex flex-col gap-4 p-3'>
        <p className='text-lg font-medium'>$79.98</p>
        <hr />
        <p>Add shipping insurance for $9( declared value only if the package gets lost, stolen or damaged.)</p>
    </div>
    <div className='flex gap-2'>

        <button className='px-[32px]  w-[45%] py-[16px]  border-md text-white bg-[#4172DC]  flex justify-center items-center whitespace-nowrap ' 
        >SHOP NOW</button>
        <div className='flex px-[32px] w-[45%] py-[16px] gap-3 justify-center  items-center border-2 ' >
            <img src={cart} alt="" />
            <p className='whitespace-nowrap' onClick={()=>dispatch(addToCart(id))}>ADD TO BASKET</p>
        </div>

    </div>


</div>
  )
}

export default CardComponent
