import { createSlice } from '@reduxjs/toolkit';
const initialState={
    showSideNavOpen: false,
};
export const NavSlice =  createSlice({
    name : 'showSideNavDrawer',
    initialState,
    reducers:{
        setShowSideNav:(state,action)=>{
            console.log('SideNav opened');
            state.showSideNavOpen= action.payload;
        }
    }
});
export const {setShowSideNav} = NavSlice.actions;
export default  NavSlice.reducer;