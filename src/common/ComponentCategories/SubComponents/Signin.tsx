import React from 'react'
import { SignIn, Favorites, card, Card1 } from '../assests'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import {FavouriteComponent} from '.'
import CartComponent from './CartComponent'
import SigninComponent from './SigninComponent/SigninComponent'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
  const navigate=useNavigate()
  return (
    <div className="flex place-self-center gap-5">
      <div className="flex gap-2 " onClick={()=>navigate("/signin")}>
        <img src={SignIn} alt="" />
        <p>Sign in</p>
      </div>
     <FavouriteComponent/>
    
<CartComponent/>
    </div>
  )
}

export default Signin
