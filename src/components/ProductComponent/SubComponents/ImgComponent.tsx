import React,{useState} from 'react'
interface ImageString{
    Image:string,
    img1:string,
    img2:string,
    img3:string,
    img4:string,
    img5:string
  }
const ImgComponent:React.FC<ImageString> = ({Image,img1,img2,img3,img4,img5}) => {
    const [img,setImg]=useState(Image);

  return (
    <div className='flex w-full flex-wrap-reverse md:w-[50%] sm:h-[700px] lg:h-[900px] border-2'>
    <div className='flex w-[95%] m-auto sm:w-[20%]  sm:h-[700px] lg:h-[900px] justify-between  sm:flex-col' >
        <img className=' sm:w-[100%] h-[100px] sm:h-[20%]  w-[20%] flex' onClick={()=>setImg(img1)} src={img1} alt="" />
        <img className=' sm:w-[100%] h-[100px] sm:h-[20%] w-[20%] flex' onClick={()=>setImg(img2)} src={img2} alt="" />
        <img className=' sm:w-[100%] h-[100px] sm:h-[20%]  w-[20%] flex' onClick={()=>setImg(img3)} src={img3} alt="" />
        <img className=' sm:w-[100%] h-[100px] sm:h-[20%] w-[20%] flex' onClick={()=>setImg(img4)} src={img4} alt="" />
        <img className=' sm:w-[100%] h-[100px] sm:h-[20%] w-[20%] flex' onClick={()=>setImg(img5)} src={img5} alt="" />
    </div>

    <img className='w-full sm:w-[80%]  sm:h-[700px] lg:h-[900px]' src={img} alt="" />
</div>
  )
}

export default ImgComponent
