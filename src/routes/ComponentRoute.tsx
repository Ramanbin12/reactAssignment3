import React from 'react'
import {Routes,Route} from "react-router-dom"
import { ElectronicPage,HomePage,WomenPage } from '../pages'
import DetailedBrandComponent from '../components/DetailedBrandComponent/DetailedBrandComponent'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage'
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage'
const routes = () => {
  return (
    <div>
      <Routes>
      <Route path="/"  element={<HomePage/>}/>
      <Route path="/women" element={<WomenPage/>} />
      <Route path="/women/clothes" element={<ProductDetailPage/>} />

        <Route path="/electronics" element={<ElectronicPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />

      </Routes>
    </div>
  )
}

export default routes
