import React from 'react'
import { ComponentTopNavbar, ComponentCategories, ComponentFooter } from '../../common'
import { ProductComponent } from '../../components'
const ProductPage = () => {
  return (
    <div className='space-y-10'>
      <ComponentTopNavbar />
      <ComponentCategories />
     
      <ProductComponent />
    
        <ComponentFooter/>
    </div>
  )
}

export default ProductPage

