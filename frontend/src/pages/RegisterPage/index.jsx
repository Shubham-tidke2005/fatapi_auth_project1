import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AuthLoaderButton from '../../components/AuthLoaderButton';


function RegisterPage() {

  const [showPassword, setShowPassword] = useState(false);
  let [isloding,setisloding]=useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-500 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>


        
          <AuthLoaderButton isLoding={isloding} text={' '} className={' '}/>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account? <span className="text-indigo-500 cursor-pointer"><Link to={'/login'} className="mr-5 hover:text-gray-900">Login</Link></span>
        </p>

      </div>
    </div>
  )
}

export default RegisterPage