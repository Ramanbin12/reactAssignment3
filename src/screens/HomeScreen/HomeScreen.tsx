import React from 'react'
import { ComponentTopNavbar,ComponentCategories,ComponentNavbar,ComponentAd, Trends,ComponentFlashSales,ComponentMustTrends,ComponentBigTrends,ComponentTopTrends,ComponentBanner,ComponentBigSecTrends,ComponentFooter} from '../../components/index';

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
