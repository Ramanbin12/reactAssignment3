import { configureStore } from "@reduxjs/toolkit";
import ColorPickerSlice from "../slices/ColorPickerSlice";
export const store=configureStore({
    reducer:{
        colorpicker:ColorPickerSlice
    }
})