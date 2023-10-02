import React from 'react'
import { TrendsMustHaves } from '../../../utilities/TrendsMustHaves'
const ComponentMustTrends = () => {
    return (
        <>
        <div className='md:px-11'>
        <p className='text-4xl font-lato'>Trending must-haves</p>

        <div className='flex gap-3 custom-scrollbar lg:flex-nowrap overflow-x-auto md:flex-wrap '>
            {
                TrendsMustHaves.map((item) => {
                    return (
                        <div className='flex border-2 border-black-300 mt-4 flex-col min-w-[400px] md:min-w-full lg:min-w-[550px]'>
                            <img className='md:hidden lg:flex' src={item.image} />
                            <img className='hidden md:flex lg:hidden' src={item.img}/>
                            <div className='bg-black h-[100px]  text-white flex  justify-between p-8 rounded-b-3 '>
                                <div className='flex flex-col gap-2' >
                                    <p className='font-medium'>{item.title}</p>
                                    <p>{item.desc}</p>
                                </div>
                                <div className='flex gap-2 border-2 px-4 py-5 rounded-2 border-[#D9D9D9] '>
                                    <span className='place-self-center'>${item.price}</span>
                                    <button className='place-self-center'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}

export default ComponentMustTrends
