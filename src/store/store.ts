import { configureStore } from "@reduxjs/toolkit";
import flashSale from "../slices/flashSale";
export const store=configureStore({
    reducer:{
        flashsale:flashSale
    }
})