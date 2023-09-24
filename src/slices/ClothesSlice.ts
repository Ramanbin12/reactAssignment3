import { createSlice } from "@reduxjs/toolkit";
import {WomenClothes} from "../utilities/WomenClothes"
const initialState={
    dress:WomenClothes,
    sideDrawer:false
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
}
    }    
})
export const {toggleFav,toggleDrawer}=ClothesSlice.actions
export default ClothesSlice.reducer;