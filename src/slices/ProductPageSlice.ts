import { createSlice } from "@reduxjs/toolkit";
import {ProductDetail} from "../utilities/ProductDetail"
const initialState={
    product:ProductDetail,
}
const ProductPageSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        increment:(state,action)=>{
            const index=state.product.findIndex((e)=>e.id===action.payload)
            state.product[index].quantity=state.product[index].quantity+1
        },
        decrement:(state,action)=>{
            const index=state.product.findIndex((e)=>e.id===action.payload)

            state.product[index].quantity=
            state.product[index].quantity<=0?0:state.product[index].quantity-1
        },
      
    }
})
export const {increment,decrement} =ProductPageSlice.actions
export default ProductPageSlice.reducer
