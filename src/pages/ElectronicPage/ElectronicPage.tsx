import React from 'react'
import { ComponentTopNavbar,ComponentFooter,ComponentCategories ,ComponentNavbar } from '../../common'
import { ErrorComponent,MachineComponent } from '../../components/ElectronicsComponents'
const ElectronicPage = () => {
  return (
    <div className='flex flex-col gap-10'>
        <ComponentTopNavbar/>
        <ComponentCategories/>
        <ComponentNavbar/>
        <ErrorComponent/>
        <MachineComponent/>
        <ComponentFooter/>
    </div>
  )
}

export default ElectronicPage
