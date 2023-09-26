import React from 'react'
import { DifferentImagesComponent,ContentComponent,MoreDetailsComponent,OtherProductsComponent} from "./SubComponents/index"
const DetailedBrandComponent = () => {
  return (
    <div className='md:mx-20  space-y-5'>
      <div className='flex flex-wrap md:flex-nowrap '>
   <DifferentImagesComponent/>
   <ContentComponent/>

   </div>
   <MoreDetailsComponent/>
   <OtherProductsComponent/>
    </div>
  )
}

export default DetailedBrandComponent
