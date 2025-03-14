import { React } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import ShopPage from './pages/Shop.jsx'
import ContactPage from './pages/Contact.jsx'
import CartPage from './pages/Cart.jsx'
import CheckoutPage from './pages/Checkout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} /> */}
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />



      {/* <Route path='/notfound' element={<NotFound />} /> */}


    </Routes>
  </BrowserRouter>
)
