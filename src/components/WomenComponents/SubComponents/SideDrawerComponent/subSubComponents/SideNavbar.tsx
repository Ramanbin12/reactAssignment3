import React from 'react'
import { Vector, search } from "../../../assests"
import { StyleComponent, ColorPickerComponent, SizeComponent, SliderComponent } from "./index"
const SideNavbar = () => {
    return (
        <div className="w-[360px] flex flex-col items-center p-11  ">
            <div className='space-y-8'>
                <div className='flex gap-10 '>
                    <img src={Vector} alt="" />
                    <p className='place-self-center text-xl'>All Categories </p>
                </div>
                <p className='text-lg font-semibold'>BRAND</p>
                <div className='flex border-2 w-[250px] md:w-[300px] h-[35px] rounded-md p-2 justify-between'>
                    <input className='w-[200px]' placeholder='Search' />
                    <img src={search} alt="" />
                </div>
                <hr />
                <div>
                    <div>
                        <p className='text-lg font-semibold font-lato'>MODEL</p>
                        <div className='list-none p-3 space-y-3 '>
                            <div className='flex justify-between'>
                                <li>Short</li>
                                <span>60</span>
                            </div>
                            <div className='flex justify-between'>
                                <li>Mid-length</li>
                                <span>10</span>
                            </div>
                            <div className='flex justify-between '>
                                <li>Sweather</li>
                                <span>56</span>
                            </div>
                            <div className='flex justify-between'>
                                <li>Party Dresses</li>
                                <span>80</span>
                            </div>
                            <div className='flex justify-between'>
                                <li>Regular Fit</li>
                                <span>100</span>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <StyleComponent />
                <ColorPickerComponent />
                <SizeComponent />
                <SliderComponent />
            </div>
        </div>
    )
}

export default SideNavbar
