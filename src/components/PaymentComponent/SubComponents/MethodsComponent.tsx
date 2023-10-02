import React from 'react'
import { payment } from "../../../utilities/payment"
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useForm } from 'react-hook-form'
import { addPaymentMethod } from '../../../slices/FormSlice'
import { DevTool } from '@hookform/devtools'
const MethodsComponent = () => {
    const dispatch=useAppDispatch()
   const methods= useAppSelector((state)=>state.form.paymentMethod)
   console.log("methid",methods)
   const m=useAppSelector((state)=>state.form.paymentmethods)
   console.log("mmmm",m)

    return (

        <div className='w-full flex flex-col gap-6'>
            <p className='text-2xl font-lato font-semibold'>Payment</p>
            <p>Please choose a payment method</p>
            <div className='flex flex-col gap-5'>
                {
                    payment.map((item) => {
                        return (
                            <div className='bg-[#E9E9E9] rounded-md flex flex-col p-4 gap-3 ' key={item.id}>
                                <div className='flex w-full justify-between '>
                                    <div className='flex items-center gap-5'>
                                        <input type="radio"  name='payment' id={`pm${item.id}`} onClick={()=>dispatch(addPaymentMethod(item.id))}  className='w-5 h-5' />

                                        <label className='text-lg font-lato font-medium' htmlFor={`pm${item.id}`}>{item.name}</label>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className='flex flex-col  mx-10'>
                                <p className='text-[#555555]  font-lato text-md'>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <DevTool control={control}/> */}
            </div>
        </div>
    )
}

export default MethodsComponent
