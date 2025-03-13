import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopPage from './pages/Shop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} /> */}
      <Route path='/shop' element={<ShopPage />} />
      {/* <Route path='/notfound' element={<NotFound />} /> */}


    </Routes>
  </BrowserRouter>
)
