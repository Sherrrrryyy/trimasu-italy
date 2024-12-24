import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-500">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Already have an account? <Link to="/auth/login" className="text-blue-500 hover:underline">Login</Link>
      </p>
    </div>
  </div>
  )
}

export default Signup