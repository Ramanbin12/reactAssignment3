import React from 'react'
import { ComponentCategories,ComponentAd, Trends,ComponentFlashSales,ComponentMustTrends,ComponentBigTrends,ComponentTopTrends,ComponentBanner,ComponentBigSecTrends} from '../../components/index';
import { ComponentTopNavbar,ComponentFooter,ComponentNavbar,Componentbanner }  from '../../common';

const HomeScreen = () => {
  return (
    <div>
        <ComponentTopNavbar/>
     <ComponentCategories/>
     <ComponentNavbar/>
     <ComponentAd/>
     <Trends/>
     <ComponentFlashSales/>
     <ComponentMustTrends/>
     <ComponentTopTrends/>
     <ComponentBigTrends/>
     <ComponentBanner/>
     <ComponentBigSecTrends/>
     <ComponentFooter/>
    </div>
  )
}

export default HomeScreen
