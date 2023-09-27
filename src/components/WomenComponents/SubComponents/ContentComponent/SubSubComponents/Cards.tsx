import React from 'react'
import {clothesType} from "../../../../../utilities/type"
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch,useAppSelector } from '../../../../../hooks';
import { toggleFav } from '../../../../../slices/ClothesSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {addToCart} from "../../../../../slices/ClothesSlice"
const Cards = ({id,image,title,desc,updatedprice,price,discount,fav}:clothesType) => {
  const [value, setValue] = React.useState<number | null>(4);
   const dispatch=useAppDispatch();
  //  const fav=useAppSelector((state)=>state.clothes.dress)
  return (
    // <div className='border-2 flex flex-col justify-between min-w-[250px] rounded-lg leading-10 mt-5 ' key={id}>
    <div className='border-2 rounded-lg flex flex-col justify-between  w-[350px] first-line:rounded-lg leading-10 mt-5 ' key={id}>

    <img className="w-[350px] md:h-[350px] lg:h-[auto]" src={image} alt=""/>
    <div className='p-[10px]'>
      <div className='flex justify-between'>
        <div>
      <p className='font-lato  font-medium'>{title}</p>
        <p className='text-sm text-[#555555]'>{desc}</p>
        </div>
        <div onClick={()=>dispatch(toggleFav(id))}>
          {
            fav?
          <FavoriteIcon style={{color:'red'}} />:<FavoriteBorderIcon/>
}
        </div>
        </div>
        
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event,newValue) => {
          setValue(newValue);
        }}
      />
      <div className='flex w-full justify-between'>
        <div className='flex gap-3 '>
            <p className='text-red-500 font-medium'>${updatedprice}</p>
            <p className='line-through text-sm place-self-center text-[#555555]'>${price}</p>
            <p className='text-red-400'>-{discount}%</p>
            </div>
            <div className='flex items-center'>
            <ShoppingCartIcon onClick={()=>dispatch(addToCart(id))} />
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Cards
