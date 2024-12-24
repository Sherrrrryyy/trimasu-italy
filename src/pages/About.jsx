import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-gray-900">Book Haven</span>,
          your ultimate destination for exploring the world of books. Our mission
          is to connect book lovers with their favorite stories and authors while
          fostering a community that shares a passion for reading.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Whether you're into timeless classics, thrilling mysteries, inspiring
          biographies, or the latest bestsellers, we have something for everyone.
          Discover new releases, explore recommendations, and share your love for
          books with others.
        </p>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-gray-900">Book Haven</span>, we believe
          that every book has the power to transform lives, spark creativity, and
          open new horizons. Thank you for being a part of our journey.
        </p>
      </div>
    </div>
  )
}

export default About