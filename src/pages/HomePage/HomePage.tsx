import React from 'react'
import { ComponentCategories,ComponentAd, Trends,ComponentFlashSales,ComponentMustTrends,ComponentBigTrends,ComponentTopTrends,ComponentBanner,ComponentBigSecTrends} from '../../components/index';
import { ComponentTopNavbar,ComponentFooter,Componentbanner,ComponentNav }  from '../../common';

const HomeScreen = () => {
  return (
    <div>
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
