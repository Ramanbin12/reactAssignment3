import React from 'react'
import OrderSummary from './SubComponents/OrderSummary'
import CardComponent from './SubComponents/CardComponent'
import { OtherProductsComponent } from '../DetailedBrandComponent/SubComponents'
const CheckoutComponent = () => {
  return (
    <div className='space-y-5 m-5'>
    <p className='text-2xl font-lato font-medium text-black m-3'>Card</p>
    <div className='flex w-full flex-wrap md:flex-nowrap gap-10 justify-between'>
      <CardComponent/>
      <OrderSummary/>
    </div>
    <OtherProductsComponent/>

    </div>
  )
}

export default CheckoutComponent
