import React from 'react'
import { SignIn,Favorites,card,Card1 } from '../assests'
const Signin = () => {
  return (
    <div className="flex place-self-center gap-5">
      <div className="flex gap-2">
        <img src={SignIn}/>
        <p>Sign in</p>
      </div>
      <div className="flex gap-2">
        <img src={Favorites} />
        <p>Fovorites</p>
      </div>
      <div className="flex gap-2">
        <img src={Card1}/>
        <p>Card</p>
        <img src={card}/>
      </div>
      
    </div>
  )
}

export default Signin
