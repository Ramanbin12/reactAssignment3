import React from 'react'
import * as yup from "yup"
import { DevTool } from '@hookform/devtools'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import { google } from '../../../assests'
type formType = {
    email: string,
    password: string
}

const Login = () => {
    const schema = yup.object({
        email: yup.string().required("email is required"),
        password: yup.string().required("password is required"),


    })
    const { register, handleSubmit, formState, control } = useForm<formType>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(schema)
    })

    const submit = (data: formType) => {
        console.log("data", data)
    }
    const { errors } = formState;

    return (
        <div className='  w-1/2 m-5 hidden  md:flex flex-col gap-5 '>
            <p className='text-2xl font-lato font-semibold'>Sign in</p>
            <div>
                <form className=' w-full  flex flex-col gap-3' onSubmit={handleSubmit(submit)}>
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
                <label>Remember for 30 days</label>
                </div>
                <a href="">Forgot password</a>
            </div>
            <div className=' h-[50px] text-white bg-[#C4C4C4] rounded-md flex justify-center'>
                <button className='text-lg '>SIGN IN</button>
            </div>
            <div className=' h-[50px] items-center text-white bg-[#434343] gap-2 rounded-md flex justify-center'>
                <img src={google} alt =""/>
                <button className='text-xl  font-lato '>sign in by google</button>
            </div>
        </div>
    )
}

export default Login
