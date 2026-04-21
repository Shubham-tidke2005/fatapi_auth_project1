import React from 'react'
import { Link } from 'react-router-dom';
import { useMainContext } from '../context/MainContext';

const NavBar = () => {

  const {data}=useMainContext();
  let {Logout}=useMainContext();

  return (
    <header className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">AUTHENTICATION</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center mr-7 text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
      {
        data ? (
            <button onClick={Logout} className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0 text-red-500">
            Logout
            </button>
        ) : (
             <>
                <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>
                <Link to="/register" className="mr-5 hover:text-gray-900">Register</Link>
              </>
            )
      }
      
      
    </nav>
    
  </div>
</header>

  )
}

export default NavBar
