import React from 'react'
import { ComponentTopNavbar,ComponentCategories} from '../../common'
import WomenComponents from "../../components/WomenComponents/WomenComponents"
const WomenPage = () => {
  return (
    <div>
        <ComponentTopNavbar/>
        <ComponentCategories/>
        <WomenComponents/>
    </div>
  )
}

export default WomenPage
