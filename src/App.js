import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navbar, Sidebar, Footer} from './components'; 
import {
  HomePage,
  AboutPage,
  CartPage,
  ProductsPage,
  SingleProductPage,
  CheckoutPage,
  PrivateRouter,
  ErrorPage,
} from './pages';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
