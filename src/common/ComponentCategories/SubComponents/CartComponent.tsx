import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { ProductdetailType, clothesType } from '../../../utilities/type'
import { Card1 } from '../assests'
import { addToCart, removeFromCart } from "../../../slices/ClothesSlice"
import { ToggleButton } from '@mui/material'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useNavigate } from 'react-router-dom'
const CartComponent = () => {
  // const cart = useAppSelector((state) => state.clothes.cart)
  const cartitem = useAppSelector((state) => state.clothes.dress)
  const cart=cartitem.filter((item:clothesType)=>item.addToCart===true)
  let total = 0;
  const dispatch = useAppDispatch()
  const navigate=useNavigate()
  return (

    <div>
      <div className="flex gap-2 group">
        <img src={Card1} />
        <p>Card</p>
        <ToggleButton
          value="check"
          style={{
            backgroundColor: 'green',
            color: 'white',
            width: '10px',
            height: '10px',
            borderRadius: '50%'
          }}
        >
          {cart.length}
        </ToggleButton>

        <div className=" flex w-[300px] group-hover:block dropdown-menu absolute bg-white right-8 hidden mt-5  h-auto z-10">
          {cart.length === 0 ? <div className='text-black flex  w-full justify-center bg-blue-300 p-3'>Your cart is empty</div> :
            <ul className="top-0  w-100 h-auto   bg-white shadow px-6 py-8">
              {
                cart.map((item: ProductdetailType) => {
                  return (
                    <li className="py-1">
                      <div className='flex justify-between gap-[20px]'>
                        <div className="block flex justify-start gap-[20px] w-full  uppercase cursor-pointer">
                          <img className='bg-black w-[50px]  ' src={item.image} alt="" />
                          <div className='flex flex-col '>
                            <p className='text-black font-medium '>{item.title}</p>
                            <p className='text-[#555555]'> $ {item.price}</p>
                          </div >
                        </div>
                        <div className='flex text-black'>
                          <RemoveShoppingCartIcon onClick={() => dispatch(addToCart(item.id))} />
                        </div>
                      </div>
                    </li>

                  )
                })

              }

              {cart.map((i: ProductdetailType) => {
                total = (i.price*i.quantity) + total
                return total
              })
              }
              <div className='text-black w-full flex justify-between bg-white'><p>Total</p>
                <p className='font-semibold font-lato'>${total}</p></div>
              <div className='flex text-black w-full bg-white justify-evenly'>
                <button className=' w-[100px] py-3 rounded-md  bg-[#4172DC] text-white' onClick={()=>navigate("/form")}>View Bag</button>
                <button className='w-[100px] py-rounded-md  border-2'>Checkout</button>

              </div>

            </ul>

          }

          <hr />
        </div>
      </div>

    </div>
  )
}

export default CartComponent