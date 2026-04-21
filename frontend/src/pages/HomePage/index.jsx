import React from 'react'
import { useMainContext } from '../../context/MainContext'
import { Link } from 'react-router-dom';

function HomePage() {
  let {data}=useMainContext();
  return (
    <div>
      <div className="h-[80vh] flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 ">
          <div>
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Name : {data.name}
          </h1>
           <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Address : {data.address}
          </h1>
           <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Created at : {data.create_at}
          </h1>
           <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Mobile No : {data.mobile}
          </h1>
          </div>

          <div className='w-full text-center'>
          <Link to="/profile" className=" px-4 py-4 bg-amber-300 rounded-2xl  hover:text-black-900 border-black-500">Update</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
