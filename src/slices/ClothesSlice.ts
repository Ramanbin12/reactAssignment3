import { createSlice } from "@reduxjs/toolkit";
import {WomenClothes} from "../utilities/WomenClothes"
import {clothesType} from "../utilities/type";

const initialState={
    dress:WomenClothes,
    sideDrawer:false,
    cart: [] as clothesType[] , 

}
const ClothesSlice=createSlice({
    name:"clothes",
    initialState,
    reducers:{
toggleFav:(state,action)=>{
    const index=WomenClothes.findIndex((e)=>e.id===action.payload)
    state.dress[index].fav=!state.dress[index].fav
},
toggleDrawer:(state)=>{
    state.sideDrawer=!state.sideDrawer
},
addToCart:(state,action)=>{
    const cartindex=state.cart.findIndex((e)=>e.id===action.payload)
   if(cartindex===-1){
    const index=WomenClothes.findIndex((e)=>e.id===action.payload);
    
   const addproduct:clothesType=state.dress[index]
    state.cart.push(addproduct);
    console.log(state.cart);
   }
},
removeFromCart:(state,action)=>{
    const index=state.cart.findIndex((e)=>e.id===action.payload)
    console.log("index",index)
    console.log("remove")
    state.cart.splice(index,1)
  
}
    }    
})
export const {toggleFav,toggleDrawer,addToCart,removeFromCart}=ClothesSlice.actions
export default ClothesSlice.reducer;