import React from 'react'
import { OtherProducts} from "../../../../utilities/OtherProducts"
import { useAppDispatch} from '../../../../hooks'
const OtherProductsComponent = () => {
  const dispatch=useAppDispatch()
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-xl font-lato font-medium' >YOU MIGHT ALSO LIKE</p>
      <div className='grid grid-rows-auto md:grid-cols-2 xl:grid-cols-4' >
        {
            OtherProducts.map((item)=>{
                return(
                    <div className='flex gap-3 '>
                        <img src={item.image}/>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xl font-lato font-medium'>{item.title}</p>
                            <div className='flex gap-3'>
                                <span className='text-[#FF2E00] '>${item.updatedPrice}</span>
                                <span className='text-[#555555] text-sm line-through'>${item.price}</span>
                                <span className='text-white bg-[#FF2E00] text-sm'>-{item.discount}%</span>

                            </div>
                            <button className='w-[200px] rounded-md border-2 py-1 ' >Add to cart</button>
                            </div>
                        </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default OtherProductsComponent
