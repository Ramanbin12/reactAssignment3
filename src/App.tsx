import React from 'react';
import './App.css';
import { ComponentTopNavbar,ComponentCategories,ComponentNavbar,ComponentAd, Trends,ComponentFlashSales,ComponentMustTrends,ComponentBigTrends,ComponentTopTrends,ComponentBanner,ComponentBigSecTrends} from './components/index';

function App() {
  return (
    <div className="App vorder-4">
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
    </div>
  );
}

export default App;
