import React from 'react'
import { SignIn, Favorites, card, Card1 } from '../assests'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { clothesType } from '../../../utilities/type';
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toggleFav } from '../../../slices/ClothesSlice';
const FavouriteComponent = () => {
  const dispatch = useAppDispatch()
  const favourites = useAppSelector((state) => state.clothes.dress)
  const likedDresses = favourites.filter((item: clothesType) => item.fav === true)
  console.log("LD", likedDresses)
  return (
    <div>
      <div className="flex gap-2 group">
        <img src={Favorites} />
        <p>Fovorites</p>
        <div className=" flex w-[280px] group-hover:block dropdown-menu absolute hidden mt-5  h-auto">

          <ul className="top-0 w-100 h-auto   bg-white shadow px-6 py-8">
            {
              likedDresses.map((item: clothesType) => {
                return (
                  <li className="py-1">
                    <div className="block flex justify-evenly   uppercase cursor-pointer">
                      <img className='bg-black w-[50px]  ' src={item.image} alt="" />
                      <div className=''>
                        <p className='text-black font-medium  '>{item.title}</p>
                        <p className='text-[#555555]'> $ {item.updatedprice}</p>
                      </div >
                      {
                        item.fav ? <Favorite style={{ color: 'red' }} onClick={() => dispatch(toggleFav(item.id))} /> : ""
                      }
                    </div>
                  </li>
                )

              })
            }

          </ul>
          <hr />
        </div>
      </div>
    </div>
  )

}

export default FavouriteComponent
