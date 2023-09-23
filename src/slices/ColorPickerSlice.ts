import { createSlice } from "@reduxjs/toolkit";
import {ColorPicker} from '../utilities/ColorPicker'
import {Size} from "../utilities/Size"
const initialState={
    colors:ColorPicker,
    size:Size
}
const ColorPickerSlice=createSlice({
    name:"colorpicker",
    initialState,
    reducers:{
        togglebutton:(state,action)=>{
            console.log(state.colors)
            const index = ColorPicker.findIndex(e => e.id === action.payload);
        console.log("index",index)
            state.colors[index]={
             ...state.colors[index],
             checked:!state.colors[index].checked,
             
            // state.colors.checked=!state.colors.checked
        }
        console.log("state",state);
        console.log("state clor",state.colors);
        console.log("state check",state.colors[index].checked);

    },
    toggleSize:(state,action)=>{
        const index=Size.findIndex((e)=>e.id===action.payload);
        state.size[index].clicked=!state.size[index].clicked
    }
}
})
export const {togglebutton,toggleSize}=ColorPickerSlice.actions
export default ColorPickerSlice.reducer