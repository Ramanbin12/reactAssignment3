import React from 'react'
import { shipping } from '../../../utilities/payment'
import { useAppDispatch } from '../../../hooks'
import {addShippingMethod} from "../../../slices/FormSlice"
const ShippingComponent = () => {
    const dispatch=useAppDispatch()
    return (
        <div className=' w-full flex flex-col gap-6 '>
            <p className="text-2xl font-lato font-semibold">Shipping</p>
            <p>Please choose a shipping company based on your region</p>
            <div className='flex flex-col gap-5'>
                {
                    shipping.map((item) => {
                        return (
                            <div className='bg-[#E9E9E9]  rounded-md flex flex-col p-4 gap-3 ' key={item.id}>
                                <div className='flex w-full md:flex-wrap justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <input type="radio" className='w-5 h-5' name="shipping" id={`shipping${item.id}`} onClick={()=>dispatch(addShippingMethod(item.id))} />
                                        <label className='text-lg font-lato font-medium' htmlFor={`shipping${item.id}`}>{item.name}</label>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className='flex flex-col  mx-10 text-[#555555] font-lato text-md'>
                                    <p>Delivery time: {item.Delivery_time}</p>
                                    <p>Shipping cost: {item.shipping_cost}</p>
                                    <p>Insurance: {item.Insurance}</p>


                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShippingComponent
