import React from 'react'
import { Routes, Route } from "react-router-dom"
import { ElectronicPage, HomePage, WomenPage } from '../pages'
import DetailedBrandComponent from '../components/DetailedBrandComponent/DetailedBrandComponent'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage'
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import {CardPage,FormPage} from "../pages"
const routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women/clothes" element={<WomenPage />} />
        <Route path="/women/clothes/zara" element={<ProductDetailPage />} />
        <Route path='/women/clothes/:id' element={<ProductPage />} />
        <Route path="/electronics" element={<ElectronicPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/form" element={<FormPage />} />

      </Routes>
    </div>
  )
}

export default routes
