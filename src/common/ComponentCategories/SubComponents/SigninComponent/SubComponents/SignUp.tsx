import React from 'react'
import * as yup from "yup"
import { DevTool } from '@hookform/devtools'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import { google } from '../../../assests'
type formType = {
    name:string,
    email: string,
    password: string
}
const SignUp = () => {
    const schema = yup.object({
        name: yup.string().required("name is required"),

        email: yup.string().required("email is required"),
        password: yup.string().required("password is required"),


    })
    const { register, handleSubmit, formState, control } = useForm<formType>({
        defaultValues: {
            name:"Full Name",
            email: "Email Address",
            password: "Password"
        },
        resolver: yupResolver(schema)
    })

    const submit = (data: formType) => {
        console.log("data", data)
    }
    const { errors } = formState;

  return (
      <div className=' w-full md:w-1/2 m-5 flex flex-col gap-5 '>
            <p className='text-2xl font-lato font-semibold'>Sign up</p>
            <div>
                <form className=' w-full  flex flex-col gap-3' onSubmit={handleSubmit(submit)}>
                <div className='flex flex-col gap-2'>
                        <label htmlFor='name'>Name</label>
                        <input className="border-2 h-15 rounded-md  p-2  " id="name" type="text" {...register("name")} />
                        <p>{errors.name?.message}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email'>E-mail</label>
                        <input className="border-2 h-15 rounded-md  p-2  " id="email" type="text" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='password'>Password</label>
                        <input className="border-2 h-15 rounded-md  p-2  " id="password" type="text" {...register("password")} />
                        <p>{errors.email?.message}</p>
                    </div>

                </form>
                <DevTool control={control} />
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                <input type='checkBox'/>
                <label>Terms and conditions agreement should start with an introduction that lets users know they’re reading a terms and conditions agreement</label>
                </div>
            </div>
            <div className=' h-[50px] rounded-md bg-[#4172DC] text-white flex justify-center'>
                <button className='text-lg  '>SIGN UP</button>
            </div>
            <div className=' h-[50px] gap-2 items-center bg-[#434343] text-white rounded-md flex justify-center'>
            <img src={google} alt =""/>
                <button className='text-xl  font-lato '>sign in by google</button>
            </div>
        </div>
  )
}

export default SignUp
