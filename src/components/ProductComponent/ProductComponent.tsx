import React from 'react'
import ImageComponent from './SubComponents/ImageComponent'
import CardComponent from './SubComponents/CardComponent'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { clothesType } from '../../utilities/type'
import { MoreDetailsComponent, OtherProductsComponent } from '../DetailedBrandComponent/SubComponents'
const ProductComponent = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const item = useAppSelector((state) => state.clothes.dress)
  if (!params.id) {
    return <div>Product not found.</div>;
  }
  const id = parseInt(params.id)
  console.log("idddd", typeof (id));
  const index = item.findIndex((e: clothesType) => e.id === id)
  const dress1: clothesType = item[index]
  console.log("dresss", dress1)
  return (
    <div className='md:mx-20  space-y-5 mt-10' >
      <div className='flex flex-wrap md:flex-nowrap'>
        <ImageComponent Image={dress1.image} />
        <CardComponent id={dress1.id} title={dress1.title} price={dress1.updatedprice } size={dress1.size} color={dress1.color} quantity={dress1.quantity}  />
      </div>
      <MoreDetailsComponent/>
     
      <OtherProductsComponent/>
      
    </div>
  )
}

export default ProductComponent
