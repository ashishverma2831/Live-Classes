import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Application from './pages/Application'
import Cart from './pages/Cart'
import Community from './pages/Community'
import Login from './pages/Login'
import MyOrder from './pages/MyOrder'
import Portrait from './pages/Portrait'
import RealmeNextAI from './pages/RealmeNextAI'
import Support from './pages/Support'
import ErrorPage from './pages/ErrorPage'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/application' element={<Application />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/community' element={<Community />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/orders' element={<MyOrder />} />
          <Route path='/portrait' element={<Portrait />} />
          <Route path='/realme-nextai' element={<RealmeNextAI />} />
          <Route path='/support' element={<Support />} />
          <Route path='/brand/goods/:id' element={<ProductDetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App