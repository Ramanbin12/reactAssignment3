import React from 'react';
import './App.css';
import { ComponentTopNavbar,ComponentCategories,ComponentNavbar,ComponentAd, Trends,ComponentFlashSales,ComponentMustTrends } from './components/index';
import { TagPopup } from './components/ComponentAd/SubComponents';

function App() {
  return (
    <div className="App">
     <ComponentTopNavbar/>
     <ComponentCategories/>
     <ComponentNavbar/>
     <ComponentAd/>
     <Trends/>
     <ComponentFlashSales/>
     <ComponentMustTrends/>
    </div>
  );
}

export default App;
