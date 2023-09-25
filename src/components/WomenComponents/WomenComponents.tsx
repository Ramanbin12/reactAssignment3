import React from 'react'
import Header from "./SubComponents/Header"
import SideDrawerComponent from './SubComponents/SideDrawerComponent/SideDrawerComponent'
import ContentComponent from './SubComponents/ContentComponent/ContentComponent'
import FilterComponent from './SubComponents/SideDrawerComponent/subSubComponents/FilterComponent'
import { ComponentFooter } from '../../common'
const WomenComponents = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Header/>
      <FilterComponent/>

      <div className='flex'>
        <SideDrawerComponent/>

      <ContentComponent/>
      </div>
      <ComponentFooter/>
    </div>
  )
}

export default WomenComponents
