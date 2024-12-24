import React from 'react'
import { Link } from 'react-router-dom'


const Index = () => {
    return (
        <>
            <div className='my-5 text-6xl'>
                Authenticatoin

            </div>
            <div className='my-5'>
                <Link to={"/auth/login"} className='bg-blue-500 text-white p-3 rounded-lg  '>Log In</Link>
                <Link to={"/auth/signup"} className='bg-blue-500 text-white p-3 rounded-lg '>Sign Up</Link>
            </div>
        </>
    )
}

export default Index