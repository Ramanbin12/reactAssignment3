import React from 'react'
import ComponentDetails from "./SubComponents/ComponentDetails"
import OrderSummary from "../CheckoutComponent/SubComponents/OrderSummary"
import OtherProductsComponent from "../DetailedBrandComponent/SubComponents/OtherProductsComponent/OtherProductsComponent"
const ComponentInformation = () => {
  return (
    <div className='space-y-5 m-5'>
    <p className='text-2xl font-lato font-medium text-black m-3'>Card</p>
    <div className='flex w-full flex-wrap md:flex-nowrap gap-10 justify-between'>
      <ComponentDetails/>
      <OrderSummary/>
    </div>
    <OtherProductsComponent/>

    </div>
  )
}

export default ComponentInformation
