import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { increment, decrement, removeFromCart } from '../../../slices/ClothesSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { clothesType } from "../../../utilities/type"
import AddIcon from '@mui/icons-material/Add';
const CardComponent = () => {
    // const cart = useAppSelector((state) => state.clothes.cart)
    const cartitems=useAppSelector((state)=>state.clothes.dress)
    const dispatch = useAppDispatch()
    const cart=cartitems.filter((item:clothesType)=>item.addToCart===true)
    return (
        <div className='w-full  lg:p-5'>
            {
                cart.map((item: clothesType) => {
                
                    return (
                        <div className=' w-full flex justify-between  md:flex-wrap lg:flex-nowrap gap-5'>
                            <div className='flex gap-[80px] lg:w-1/2 items-center   '>
                                <div className='flex gap-4'>
                                <img className='w-[70px]' src={item.image} alt="" />
            
                                    <p className=''>{item.title}</p>
                                    </div>
                                <p className='flex place-self-center'>${item.price}</p>
                            </div>
                                <div className='flex md:p-3 gap-3 md:w-full lg:w-1/2 items-center justify-between'>
                                    <div className='flex border-2 gap-1 md:gap-2'>
                                        <button className=' p-1' onClick={() => dispatch(decrement(item.id))}><RemoveIcon /></button>
                                        <p className='place-self-center'>{item.quantity}</p>
                                        <button className=' p-1' onClick={() => { console.log(item.quantity); dispatch(increment(item.id))}}><AddIcon /></button>

                                    </div>
                                    <p>${item.price*item.quantity}</p>
                                    <DeleteIcon onClick={()=>dispatch(removeFromCart(item.id))} />
                            </div>

                        </div>

                    )

                })
            }
</div>
    )
}

export default CardComponent
