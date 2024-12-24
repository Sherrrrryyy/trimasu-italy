import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './Components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
