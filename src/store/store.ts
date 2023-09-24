import { configureStore } from "@reduxjs/toolkit";
import ColorPickerSlice from "../slices/ColorPickerSlice";
import ClothesSlice from "../slices/ClothesSlice"
export const store=configureStore({
    reducer:{
        colorpicker:ColorPickerSlice,
        clothes:ClothesSlice
    }
})