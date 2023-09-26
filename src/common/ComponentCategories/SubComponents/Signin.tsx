import React from 'react'
import { SignIn, Favorites, card, Card1 } from '../assests'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import {FavouriteComponent} from '.'
import CartComponent from './CartComponent'
const Signin = () => {
  return (
    <div className="flex place-self-center gap-5">
      <div className="flex gap-2">
        <img src={SignIn} />
        <p>Sign in</p>
      </div>
     <FavouriteComponent/>
    
<CartComponent/>
    </div>
  )
}

export default Signin
