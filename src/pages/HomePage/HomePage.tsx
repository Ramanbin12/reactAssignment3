import React from 'react'
import { ComponentCategories,ComponentAd, Trends,ComponentFlashSales,ComponentMustTrends,ComponentBigTrends,ComponentTopTrends,ComponentBanner,ComponentBigSecTrends} from '../../components/index';
import { ComponentTopNavbar,ComponentFooter,ComponentNavbar,Componentbanner,ComponentNav }  from '../../common';

const HomeScreen = () => {
  return (
    <div>
        <ComponentTopNavbar/>
     <ComponentCategories/>
     {/* <ComponentNavbar/> */}
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
