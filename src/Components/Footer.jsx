import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Book Haven. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer