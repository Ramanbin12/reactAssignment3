import { createSlice } from "@reduxjs/toolkit";
import {flashSalesData} from '../utilities/FlashSales'
const initialState={
    flashSale:flashSalesData
}
const flashSale=createSlice({
    name:"flashsale",
    initialState,
    reducers:{

    }
})

export default flashSale.reducer