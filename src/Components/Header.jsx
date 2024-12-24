import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800">Book Haven</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="text-gray-800 font-bold hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-800 font-bold hover:text-blue-500">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-800 font-bold  hover:text-blue-500">Contact</Link>
                        </li>
                        <li>
                            <Link to="/auth/signup" className=" font-bold bg-blue-700 p-3 rounded-lg text-white">signup</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header