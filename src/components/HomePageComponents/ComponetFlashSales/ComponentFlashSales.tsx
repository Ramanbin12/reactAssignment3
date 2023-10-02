import React from 'react'
import Rating from './subComponents/Rating'
import { useAppSelector } from '../../../hooks'
import { flashSalesType } from '../../../utilities/type'
import {flashSalesData} from '../../../utilities/FlashSales'
import "../../../common/style.css"
const ComponentFlashSales = () => {
  // const flashData = useAppSelector((state) => state.flashsale.flashSale)
  // console.log(flashData)
  return (
    <div className='md:px-10 py-10 '>
    <p className='text-4xl font-lato px-3 '>Flash Sales</p>
    <div className=' flex custom-scrollbar overflow-x-auto gap-5 p-5'>
      {
        flashSalesData.map((item: flashSalesType) => {
          return (
            <div className='min-w-[350px]  bg-white outline outline-offset-2 outline-[#C4C4C4] rounded-[8px] '>
              <p className='text-[#9D9D9D] text-center text-lg font-lato font-semibold pt-5 '>DEAL OF THE DAY</p>
              <div className="flex h-[80px] text-center justify-center py-3 gap-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-medium'>{item.hours}</p>
                  <p className='text-[#9D9D9D]'>hour</p>
                </div>
                <span className='text-[#9D9D9D]'>:</span>
                <div className='flex flex-col'>
                  <p className='text-2xl font-medium'>{item.minutes}</p>
                  <p className='text-[#9D9D9D]'>min</p>
                </div>
                <span className='text-[#9D9D9D]'>:</span>
                <div className='flex flex-col'>
                  <p className='text-2xl font-medium'>{item.seconds}</p>
                  <p className='text-[#9D9D9D]'>sec</p>
                </div>
              </div>
              <div className='flex justify-center'>
                <img src={item.image} />
              </div>
              <div className='flex flex-col gap-1 py-5 text-center'>
                <p className='text-lg font-medium'>{item.header}</p>
                <p className="text-sm text-[#555555]">{item.desc}</p>
                <Rating />
                <div className='flex justify-center gap-3'>
                  <span className='text-red-600 text-lg font-medium '>${item.updatedprice}</span>
                  <span className='text-sm line-through py-1'>${item.price}</span>
                  <span className='bg-red-600 text-white p-1 text-sm '>- {item.discount}%</span>
                </div>
              </div>


            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default ComponentFlashSales
