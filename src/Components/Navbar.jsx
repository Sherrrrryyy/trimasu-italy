"use client"

import { useState, useEffect } from "react"
import { IceCreamCone, ShoppingCart, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-white/50 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Trimasu
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-slate-800 hover:text-pink-500 font-medium transition-colors">
                Home
              </a>
              <a href="/shop" className="text-slate-800 hover:text-pink-500 font-medium transition-colors">
                Shop
              </a>
              <a href="/contact" className="text-slate-800 hover:text-pink-500 font-medium transition-colors">
                Contact
              </a>
            </div>

            {/* Cart Icon & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <Link to="/cart" className="relative p-2"> {/* Updated to Link */}
                <ShoppingCart className="h-6 w-6 text-slate-800 hover:text-pink-500 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                <Menu className="h-6 w-6 text-slate-800" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separate from navbar for better control */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>

          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg flex flex-col">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1.5">
                  <IceCreamCone className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg">Trimasu</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-slate-800" />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex flex-col py-4">
              <a
                href="/"
                className="px-6 py-3 text-slate-800 hover:bg-pink-50 hover:text-pink-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/shop"
                className="px-6 py-3 text-slate-800 hover:bg-pink-50 hover:text-pink-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="/contact"
                className="px-6 py-3 text-slate-800 hover:bg-pink-50 hover:text-pink-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            {/* Cart link at bottom */}
            <div className="mt-auto border-t">
              <Link
                to="/cart" // Updated to Link
                className="flex items-center justify-between px-6 py-4 text-slate-800 hover:bg-pink-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-3 text-pink-500" />
                  <span>Your Cart</span>
                </div>
                <span className="bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
