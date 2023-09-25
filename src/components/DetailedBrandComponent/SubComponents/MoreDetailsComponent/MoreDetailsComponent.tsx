import React from 'react'
import {ProductDescription,CareInstructions} from "../../../../utilities/MoreDetails"
const MoreDetailsComponent = () => {
  return (
    <div className='grid grid-rows-auto grid-cols-2  gap-5 mx-2'>
      <div className='flex flex-col gap-3' >
       <p className='text:xl font-lato font-semibold'>Product Description</p>
       <p className='text-[#555555]'>Short dress with a plunging V-neckline and tie detail. Wide sleeves falling below the elbow. Contrast bead details. Invisible back zip fastening.</p>
      </div>
      <div className='flex flex-col gap-3' >
        <p className='text:xl font-lato font-semibold'>Composition</p>
        <p className='text-[#555555]'>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans. OUTER SHELL 90% cotton10% linen</p>

      </div>
      <div className='flex flex-col gap-3'>
        <p className='text:xl font-lato font-semibold'>Product Description</p>
        <div className='space-y-3'>
          {
            ProductDescription.map((item)=>{
              return(
                <li className='text-[#555555]'>{item.value}</li>
              )
            })
          }
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text:xl font-lato font-semibold'>Care instructions</p>
        <div className='space-y-3'>
          {
            CareInstructions.map((i)=>{
              return(
                <div key={i.id} className='flex gap-2'>
                  <img className='place-self-center' src={i.image} alt=""/>
                  <p className='text-[#555555]'>{i.value}</p>
                  </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MoreDetailsComponent
