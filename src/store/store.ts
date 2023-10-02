import { configureStore } from "@reduxjs/toolkit";
import ColorPickerSlice from "../slices/ColorPickerSlice";
import ClothesSlice from "../slices/ClothesSlice"
import ProductPageSlice from "../slices/ProductPageSlice";
import FormSlice from "../slices/FormSlice";
export const store=configureStore({
    reducer:{
        colorpicker:ColorPickerSlice,
        clothes:ClothesSlice,
        product:ProductPageSlice,
        form:FormSlice
    }
})