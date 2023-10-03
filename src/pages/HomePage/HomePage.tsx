import React from 'react'
import { ComponentCategories,ComponentAd, Trends,ComponentFlashSales,ComponentMustTrends,ComponentBigTrends,ComponentTopTrends,ComponentBanner,ComponentBigSecTrends} from '../../components/index';
import { ComponentTopNavbar,ComponentFooter,Componentbanner,ComponentNav }  from '../../common';
import { useAppDispatch,useAppSelector } from '../../hooks';
import { setShowSideNav } from '../../slices/NavSlice';
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent"
import { Drawer } from '@mui/material';
const HomeScreen = () => {
const show=useAppSelector((state)=>state.showSideNavDrawer.showSideNavOpen)
const dispatch=useAppDispatch()
  return (
    <div>

<div className="sidebar hidden sm:flex justify-center min-w-[300px] w-[100%]">
        <Drawer
          anchor="left"
          open={show}
          onClose={() => {
            dispatch(setShowSideNav(false));
          }}
          className="w-[100%]"
          PaperProps={{ style: { width: "100%" } }}
        >
          <SideNavComponent />
        </Drawer>
      </div>
        <ComponentTopNavbar/>
     <ComponentCategories/>
     <ComponentNav/>
     <ComponentAd/>
     <Trends/>
     <ComponentFlashSales/>
     <ComponentMustTrends/>
     <ComponentTopTrends/>
     <ComponentBigTrends/>
     <ComponentBanner/>
     <ComponentBigSecTrends/>
     <ComponentFooter />
    </div>
  )
}

export default HomeScreen
