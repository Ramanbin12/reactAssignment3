import React from 'react'
import {Routes,Route} from "react-router-dom"
import { ElectronicPage,HomePage,WomenPage } from '../pages'
import DetailedBrandComponent from '../components/DetailedBrandComponent/DetailedBrandComponent'
const routes = () => {
  return (
    <div>
      <Routes>
      <Route path="/"  element={<HomePage/>}/>
      <Route path="women" element={<WomenPage/>} />
      <Route path="women/clothes" element={<DetailedBrandComponent/>} />

        <Route path="electronics" element={<ElectronicPage/>} />

      </Routes>
    </div>
  )
}

export default routes
