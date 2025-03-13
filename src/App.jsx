import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeaturedFlavors from './components/FeaturedFlavors.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedFlavors />
      <Footer />
    </>
  )
}

export default App
