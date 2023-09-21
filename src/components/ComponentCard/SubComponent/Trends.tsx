import React from 'react'
import { trendsData } from '../../../utilities/trendsData'
import Card from "./Card"
const Trends = () => {
    return (
        <div className='flex md:hidden flex-col gap-5 '>

            {
                trendsData.map((item) => {
                    return <Card title={item.title} desc={item.desc} color={item.color} img={item.img}  />
                })
            }

        </div>
    )
}

export default  Trends
