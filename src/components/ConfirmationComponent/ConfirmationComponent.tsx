import React from 'react'
import { useAppSelector } from '../../hooks'
import { payment } from '../../utilities/payment'
import { clothesType } from '../../utilities/type'
const ConfirmationComponent = () => {
    const data=useAppSelector((state)=>state.form.formData)
    console.log("datadatadata",data)

    const paymentMode=useAppSelector((state)=>state.form.paymentmethods)

    const shippingBrand=useAppSelector((state)=>state.form.shippingmethods)
    const cartitems = useAppSelector((state) => state.clothes.dress)
    const cart=cartitems.filter((item:clothesType)=>item.addToCart===true)
  return (
    <div className='w-full space-y-5'>
      <p className='text-xl font-lato font-semibold'>Confirmation</p>
      {data.length===0 ||paymentMode.length===0||shippingBrand===0?<div>Please fill all the details to proceed</div>:
      <div className=' bg-[#F5F5F5] p-5'>
        <div className=' space-y-5' >
          <p className='text-[#555555]'>Shopping items</p>
          <div className='space-y-4'>
            {cart.map((item: clothesType)=>{
              return(
                <div className='flex justify-between items-center '>
                  <div className='flex w-1/2 gap-4'>
                  <img className='w-[100px] h-[100px]' src={item.image} alt=""/>
                  <p className='text-lg font-medium '>{item.desc}</p>
                  </div>
                  <div className='flex flex-col text-center text-[#555555]'>
                    <span>${item.price}</span>
                  <span className='text-[#555555]'>x{item.quantity}</span>
                  </div>
                  <p className='text-[#555555] '>${item.price*item.quantity}</p>
                  </div>
              )
            })}
          </div>
          <hr/>
          <div className='flex flex-col gap-2'>
            <p  className='text-[#555555]'>Payment method</p>
            <div className='flex justify-between'>
              <span  className='font-medium'>{paymentMode[0].name}</span>
              <img src={paymentMode[0].image} alt=""/>

            </div>
          </div>
          <hr/>
          <div className='flex flex-col gap-2'>
            <p className='text-[#555555]'>Shipping company</p>
            <div className='flex justify-between'>
              <span className='font-medium'>{shippingBrand[0].name}</span>
              <img src={shippingBrand[0].image} alt=""/>

            </div>
          </div>

    <div>
      <div className='flex justify-between'>
        <span className='text-[#555555]'>Name</span>
        <span>{data.firstname + data.lastname}</span>
        </div>
      <div className='flex justify-between'> 
        <span className='text-[#555555]'>Country</span>
      <span>{data.country}</span>
      </div>
      <div className='flex justify-between'>
        <span className='text-[#555555]'>Address</span>
        <span>{data.address}</span>
      </div>

      <div className='flex justify-between' >
      <span className='text-[#555555]'>City</span>
      <span>{data.state}</span>
      </div>
      <div className='flex justify-between'>
      <span className='text-[#555555]'>Phone Number</span>
        <span>{data.phoneNumber}</span>
      </div>

    </div>
        </div>
      </div>
}
    </div>
  )

}

export default ConfirmationComponent
