import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { DevTool } from '@hookform/devtools'
import { yupResolver } from "@hookform/resolvers/yup"
import India from "../India.png"
 import {Countries} from "../../../utilities/Countries"
 import { useAppDispatch } from '../../../hooks'
import { addData } from '../../../slices/FormSlice'
type formType = {
    email: string,
    firstname: string,
    lastname: string,
    country: string,
    state: string,
    address: string,
    phoneNumber: string
}
const ComponentDetails = () => {

    const schema = yup.object({
        email: yup.string().required("email is required"),
        firstname: yup.string().required("firstname is required"),
        lastname: yup.string().required("lastname is required"),
        country: yup.string().required("country is required"),
        state: yup.string().required("state is required"),
        address: yup.string().required("address is required"),
        phoneNumber: yup.string().required("phone Number is required")

    })
    const { register, handleSubmit, formState, control } = useForm<formType>({
        defaultValues: {
            email: "",
            firstname: "",
            lastname: "",
            country: "India",
            state: "Delhi",
            address: "",
            phoneNumber: ""
        },
        resolver: yupResolver(schema)
    })
    const dispatch=useAppDispatch()

    const submit=(data:formType)=>{
        console.log("data",data)
        dispatch(addData(data))
    }
    const { errors } = formState;
    return (
        // <div className='w-full lg:w-2/3  lg:p-5'>
            <div className=' w-full flex justify-between  md:flex-wrap lg:flex-nowrap '>
                <form className='border-2 w-full p-10 flex flex-col gap-3' onSubmit={handleSubmit(submit)}>
                    <p className='text-lg font-lato font-semibold'>Customer Information</p>
                    <div className='flex flex-col'>
                        <label htmlFor='email'>E-mail</label>
                        <input className="border-2 h-10 rounded-md  p-2  " id="email" type="text" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <label htmlFor='firstname'>First Name</label>
                            <input className="border-2 h-10 rounded-md  p-2  "  type="text" id="firstname" {...register("firstname")} />
                            <p>{errors.firstname?.message}</p>

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='lastname'>Last Name</label>
                            <input className="border-2 h-10 rounded-md  p-2  " type="text" id="lastname" {...register("lastname")} />
                            <p>{errors.lastname?.message}</p>

                        </div>
                    </div>
                    <p className='text-lg font-lato font font-semibold  '>Shipping Address</p>
                    <div className='flex flex-col'>
                        <label htmlFor='Country'>Country</label>
                        <select className='h-10 rounded-md p-2' id="country" name="country">
                            {Countries.map((i:any)=>{
return(
    <option>{i.name}</option>
)
                            })
                            }
                        </select>
                        <p>{errors.phoneNumber?.message}</p>

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="state">State/Region</label>
                        <input className="border-2 h-10 rounded-md  p-2  " id="state" {...register("state")} />
                        <p>{errors.state?.message}</p>

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='address'>Address</label>
                        <input className="border-2 h-10 rounded-md  p-2  " type="input" id="address" {...register("address")} />
                        <p>{errors.address?.message}</p>

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input className="border-2 h-10 rounded-md  p-2 " type="input" id="phoneNumber" {...register("phoneNumber")} />
                        <p>{errors.phoneNumber?.message}</p>

                    </div>
                    
                    <button>Submit</button>
                </form>
<DevTool control={control}/>
            </div>
        // </div>
    )
}

export default ComponentDetails
