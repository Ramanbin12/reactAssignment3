import React, { useState } from 'react'
import { SizeComponent } from '../../../WomenComponents/SubComponents/SideDrawerComponent/subSubComponents'
import { ProductDetail } from "../../../../utilities/ProductDetail"
import { ToggleButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { cart } from "../../assests"
import { useAppDispatch,useAppSelector } from '../../../../hooks'
import { ProductdetailType } from '../../../../utilities/type';
import { useDispatch } from 'react-redux';

const ContentComponent = () => {
    // const [value, setValue] = useState(1);
    const ProductDetail=useAppSelector((state)=>state.product.product);
    const addcart=useAppSelector((state)=>state.product.cart)
    console.log("addcart",addcart);
    const dispatch=useDispatch()
    return (
        <div className=' md:w-full lg:w-[50%] border-red-600 flex justify-center items-center '>
            {
                ProductDetail.map((item:ProductdetailType) => {
                    return (<div className='flex  flex-col gap-7  p-5'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-4xl font-lato font-semibold'>{item.title}</p>
                            <p className='text-[#262626]'>${item.price}</p>
                        </div>
                        <div className='flex w-full gap-10 md:gap-20'>
                            <p className='text-lg place-self-center'>Size</p>
                            <div className='flex gap-3'>
                                {
                                    item.size.map((i) => {
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
                                    item.color.map((i) => {
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
                                <p className='text-[#9D9D9D]'>Delivery Time: {item.delieveryTime} days</p>
                            </div>
                        </div>
                        <div className='flex gap-5 sm:gap-10 md:gap-16'>
                            <p>Quantity</p>
                            <div className='flex border-2 gap-2'>
                                <button className=' p-1' ><RemoveIcon /></button>
                                <p className='place-self-center'>{2}</p>
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
                                <p className='whitespace-nowrap' >ADD TO BASKET</p>
                            </div>

                        </div>


                    </div>
                    )
                })
            }
        </div>

    )
}

export default ContentComponent
