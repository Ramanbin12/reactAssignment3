import React from 'react'
import Header from "./SubComponents/Header"
import SideDrawerComponent from './SubComponents/SideDrawerComponent/SideDrawerComponent'
import ContentComponent from './SubComponents/ContentComponent/ContentComponent'
import FilterComponent from './SubComponents/SideDrawerComponent/subSubComponents/FilterComponent'
const WomenComponents = () => {
  return (
    <div>
      <Header/>
      <FilterComponent/>

      <div className='flex'>
        <SideDrawerComponent/>

      <ContentComponent/>
      </div>
    </div>
  )
}

export default WomenComponents
