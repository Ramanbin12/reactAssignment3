import { createSlice, isAction } from "@reduxjs/toolkit";
import {payment ,shipping} from "../utilities/payment"
import { paymentType,shippingType } from "../utilities/type";
const initialState={
    formData:[],
    paymentMethod:payment,
    paymentmethods:[] as paymentType[],
    shippingMethod:shipping,
    shippingmethods:[] as shippingType[]
}
const FormSlice=createSlice({
    name:"form",
    initialState,
    reducers:{
        addData:(state,action)=>{
            return{
                ...state,
                formData:action.payload
            }

        },
        addPaymentMethod:(state,action)=>{
            console.log("id",action.payload)
            const index=payment.findIndex((e)=>e.id===action.payload);
            // state.paymentMethod[index].checked=!state.paymentMethod[index].checked
            console.log("hwgjhghj",state.paymentMethod[index])
            state.paymentmethods[0]=state.paymentMethod[index]
        },
        addShippingMethod:(state,action)=>{
            console.log("id",action.payload)
            const index=shipping.findIndex((e)=>e.id===action.payload);
            console.log("checkedj",state.shippingMethod[index])
            state.shippingmethods[0]=state.shippingMethod[index]
        }
    
    }
})
export const {addData,addPaymentMethod,addShippingMethod}=FormSlice.actions
export default FormSlice.reducer