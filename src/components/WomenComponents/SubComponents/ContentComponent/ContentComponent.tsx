import React from 'react'
import { useAppSelector } from '../../../../hooks'
import Card from "./SubSubComponents/Cards"
import { clothesType } from '../../../../utilities/type'
const ContentComponent = () => {
  const clothes = useAppSelector((state) => state.clothes)
  console.log("c",clothes)
  console.log("dress",clothes.dress)
  return (
    <div className=' flex flex-wrap xl:grid xl:grid-rows-3 xl:grid-cols-3 justify-center justify-items-center w-[80%]'>
      {
        clothes.dress.map((item:clothesType) => {
          return (
            <Card id={item.id}
          title = { item.title }
          desc = { item.desc }
          updatedprice = { item.updatedprice }
          price = { item.price }
          discount = { item.discount }
          image = { item.image }
          fav = { item.fav }
          quantity={item.quantity}
            />
            )
      })
      }
    </div>
  )
}

export default ContentComponent
