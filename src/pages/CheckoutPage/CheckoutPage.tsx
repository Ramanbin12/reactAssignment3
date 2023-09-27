import React from 'react'
import { ComponentCategories, ComponentTopNavbar } from '../../common'
import {CheckoutComponent} from '../../components/index'

const CheckoutPage = () => {
  return (
    <div>
        <ComponentTopNavbar/>
      <ComponentCategories/>
      <CheckoutComponent/>
    </div>
  )
}

export default CheckoutPage
