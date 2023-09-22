import React from 'react'

const TagPopup = () => {
  return (
   <div className='hidden xl:flex absolute left-[25rem] top-[10rem] border-4 w-[300px]  flex-col ' >
    <div className='py-[30px]  bg-white px-[20px] '>
      <p className='text-lg text-black text-center font-bold'>Summer Essentials</p>
      <p className='text-[#FF2E00] text-lg text-center' >20% off</p>
    </div>
    <div className="w-full bg-[#262626] p-3 text-white place-self-center text-center">19 Jul-30Jul</div>
   </div>
  )
}

export default TagPopup
