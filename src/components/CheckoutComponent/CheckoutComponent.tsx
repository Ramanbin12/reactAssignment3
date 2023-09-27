import React from 'react'
import OrderSummary from './SubComponents/OrderSummary'
import CardComponent from './SubComponents/CardComponent'
const CheckoutComponent = () => {
  return (
    <div className='flex w-full flex-wrap md:flex-nowrap gap-10 justify-between'>
      <CardComponent/>
      <OrderSummary/>
    </div>
  )
}

export default CheckoutComponent
