import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Books = () => {

const [filteredBooks, setFilteredBooks] = useState(allBooks);
const [selectedType, setSelectedType] = useState("All")


const filterBook = (type) =>{
selectedType(type);
if(type === "All"){
setFilteredBooks(allBooks)
}else{
    setFilteredBooks(allBooks.filter((book) => book.type === type))
}
}

  return (
    <div>Books</div>
  )
}

export default Books