import React from 'react'
import Componentbanner from './Subcomponent/Componentbanner'

const ComponentFooter = () => {
    return (
        <div className='relative mt-20  '>
        <Componentbanner/>
        <div className='bg-[#D1E2EB]  w-full mt-40 p-5'>
            <div className='grid grid-rows-2   grid-cols-2  gap-4 lg:grid-rows-1 lg:grid-cols-4 pt-40 px-5 md:px-10 lg:px-40   '>
                <div className='flex flex-col gap-2 '>
                    <p className='text-lg font-medium '>Company</p>
                    <div className='flex flex-col gap-1 list-none'>
                        <li>About Us</li>
                        <li>Our Store</li>
                        <li>Contact Us</li>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-medium '>Career Opportunities</p>
                    <div className=' flex flex-col gap-1 list-none'>
                        <li>Selling Programs</li>
                        <li>Advertise</li>
                        <li>Cooperation</li>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-medium '>How to Buy</p>
                    <div className='flex flex-col gap-1 list-none'>
                        <li>Making Payments</li>
                        <li>Delivery Options</li>
                        <li>Buyer Protection</li>
                        <li>New User Guide</li>

                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-medium '>Help</p>
                    <div className='flex flex-col gap-1 list-none'>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Privacy policy</li>
                    </div>
                </div>
            </div>
        </div>

</div>    )

}

export default ComponentFooter
