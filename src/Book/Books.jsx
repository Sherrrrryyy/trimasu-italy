import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import allBooks from '../constant/book';


const Books = () => {
  

  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [selectedType, setSelectedType] = useState("All")


  const filterBook = (type) => {
    setSelectedType(type)
    if (type === "All") {
      setFilteredBooks(allBooks)
    } else {
      setFilteredBooks(allBooks.filter((book) => book.type === type))
    }
  }

  return (
    <>
      <div className='flex items-center justify-center gap-3  mb-8'>
        <button
          onClick={() => filterBook("All")}
          className={`inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition
          ${selectedType === "All" ? "bg-blue-600" : "bg-gray-500"}`}>
          All
        </button>
        <button
          onClick={() => filterBook("Fiction")}
          className={`inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition
          ${selectedType === "Fiction" ? "bg-blue-600" : "bg-gray-500"}`}>
          Fiction
        </button>
        <button
          onClick={() => filterBook("Non Fiction")}
          className={`inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition
          ${selectedType === "Non Fiction" ? "bg-blue-600" : "bg-gray-500"}`}>
          Non Fiction
        </button>
        <button
          onClick={() => filterBook("Childrens")}
          className={`inline-block px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition
          ${selectedType === "Childrens" ? "bg-blue-600" : "bg-gray-500"}`}>
          Childrens
        </button>
      </div>


      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            filteredBooks.map((book) => {
              return (
                <div key={book.id} className='bg-white p-4 shadow-md rounded-lg'>
                  <img
                    src={book.image}
                    alt={book.title}
                    className='w-full h-48 object-cover rounded-lg mb-4' />
                  <h2 className='text-lg font-bold'>{book.title}</h2>
                  <p className='text-sm text-gray-500'>{book.author}</p>
                  <Link to={`/books/${book.title}`} className='block mt-4 text-blue-500'>
                    View Details</Link>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Books