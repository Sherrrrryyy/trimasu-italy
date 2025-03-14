"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function CartPage() {
  // Sample cart items (in a real app, this would come from context/state)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Tiramisu",
      price: 5.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    },
    {
      id: 3,
      name: "Chocolate Hazelnut",
      price: 5.49,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80",
    },
    {
      id: 6,
      name: "Mango Tango",
      price: 5.29,
      quantity: 3,
      image:
        "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ])

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Calculate shipping (free over $25)
  const shipping = subtotal > 25 ? 0 : 5.99

  // Calculate total
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      <Navbar />

      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b">
                  <div className="col-span-6 font-medium text-slate-700">Product</div>
                  <div className="col-span-2 font-medium text-slate-700 text-center">Price</div>
                  <div className="col-span-2 font-medium text-slate-700 text-center">Quantity</div>
                  <div className="col-span-2 font-medium text-slate-700 text-center">Total</div>
                </div>

                {/* Cart Items List */}
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b items-center">
                    {/* Product */}
                    <div className="col-span-6 flex items-center gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium text-slate-800">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-pink-500 hover:text-pink-700 mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                      <span className="md:hidden font-medium text-slate-700">Price:</span>
                      <span className="text-slate-800">${item.price.toFixed(2)}</span>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                      <span className="md:hidden font-medium text-slate-700">Quantity:</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-l-lg text-slate-700 hover:bg-slate-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                          className="w-10 h-8 border-y border-slate-200 text-center text-slate-700 focus:outline-none"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-r-lg text-slate-700 hover:bg-slate-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                      <span className="md:hidden font-medium text-slate-700">Total:</span>
                      <span className="font-medium text-slate-800">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-6">
                <Link to="/shop" className="inline-flex items-center text-pink-500 hover:text-pink-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-slate-800">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="text-slate-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="text-slate-800">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span className="text-slate-800">Total</span>
                      <span className="text-pink-500">${total.toFixed(2)}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Including VAT</div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors text-center"
                >
                  Proceed to Checkout
                </Link>

                {/* Shipping note */}
                {subtotal < 25 && (
                  <div className="mt-4 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                    Add <span className="font-medium text-pink-500">${(25 - subtotal).toFixed(2)}</span> more to qualify
                    for free shipping!
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
            <p className="text-slate-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

