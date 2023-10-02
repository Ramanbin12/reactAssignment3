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
    // const cartindex=state.cart.findIndex((e)=>e.id===action.payload)
//    if(cartindex===-1){
//     const index=WomenClothes.findIndex((e)=>e.id===action.payload);
// const newCart=[...state.cart,state.dress[index]]
// return{
//     ...state,
//     cart:newCart
// }
//     console.log(state.cart);
//    }
const cartindex=state.dress.findIndex((e)=>e.id===action.payload)

if (state.dress[cartindex]) {
    state.dress[cartindex].addToCart = !state.dress[cartindex].addToCart;
  } else {
    // Handle the case where state.dress[cartIndex] is undefined (optional field not present)
    console.log('Item not found.');
  }
// state.dress[cartindex].addToCart=!state.dress[cartindex].addToCart
},
removeFromCart:(state,action)=>{
    // const index=state.cart.findIndex((e)=>e.id===action.payload)
    // console.log("index",index)
    // console.log("remove")
    // state.cart.splice(index,1)
  
},
increment:(state,action)=>{
    const index=state.dress.findIndex((e)=>e.id===action.payload)
    // state.cart[index].quantity=state.cart[index].quantity+1
    state.dress[index].quantity=state.dress[index].quantity+1
    console.log("quantityodincrement", state.dress[index].quantity)

},
decrement:(state,action)=>{
    const index=state.dress.findIndex((e)=>e.id===action.payload)

    // state.cart[index].quantity=
    // state.cart[index].quantity<=0?0:state.cart[index].quantity-1

    state.dress[index].quantity=
    state.dress[index].quantity<=0?0:state.dress[index].quantity-1

}

    }    
})
export const {toggleFav,toggleDrawer,addToCart,removeFromCart,increment,decrement}=ClothesSlice.actions
export default ClothesSlice.reducer;