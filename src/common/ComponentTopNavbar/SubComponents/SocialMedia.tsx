import React from 'react'
import { Instagram,Telegram,FB } from '../assets'
const SocialMedia = () => {
  return (
    <div className=" h-[5opx] place-self-center flex justify-center gap-2 ">
      <img src={Instagram}/>
      <img src={FB}/>
      <img src={Telegram}/>
    </div>
  )
}

export default SocialMedia
