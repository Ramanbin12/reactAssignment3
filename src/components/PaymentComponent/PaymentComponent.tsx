import React from 'react'
import MethodsComponent from './SubComponents/MethodsComponent'
import ShippingComponent from './SubComponents/ShippingComponent'

const PaymentComponent = () => {
  return (
    <div className='w-full flex-wrap md:flex md:flex-nowrap gap-5'>
      <MethodsComponent/>
      <ShippingComponent/>
    </div>
  )
}

export default PaymentComponent
