import React from 'react'
import {LeftImg,RightContent,TagPopup} from './SubComponents/index'
const ComponentAd = () => {
  return (
    <div className='hidden md:flex relative bg-[#86a4e5] text-white'>
      <LeftImg/>
      <RightContent/>
      <TagPopup/>

    </div>
  )
}

export default ComponentAd
