import React from 'react'

const Home = () => {
  return (
    <div className="bg-blue-500">
   

    <main className="py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6">
          Discover Your Next Favorite Book
        </h2>
        <p className="text-white font-bold text-lg mb-8">
          Explore a curated collection of books that inspire, educate, and entertain.
          Join us in the journey of endless reading possibilities.
        </p>
        <a
          href="#collection"
          className="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg transition"
        >
          Browse Collection
        </a>
      </div>
    </main>

    <section id="collection" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold text-white mb-8 text-center">
          Featured Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Book Cover"
              className="w-full rounded mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Parizaad</h4>
            <p className="text-gray-600 text-sm">An amazing journey of discovery and adventure.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Book Cover"
              className="w-full rounded mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Peer-e-Kaamil</h4>
            <p className="text-gray-600 text-sm">A gripping tale of love, loss, and resilience.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Book Cover"
              className="w-full rounded mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Pushpa</h4>
            <p className="text-gray-600 text-sm">Unlock the secrets of the universe in this thrilling read.</p>
          </div>
        </div>
      </div>
    </section>

   
  </div>
  )
}

export default Home