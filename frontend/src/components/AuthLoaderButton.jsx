import React from 'react'
import {CgSpinner} from 'react-icons/cg'
import { FaArrowRight } from 'react-icons/fa'
const AuthLoaderButton = (props) => {
  return (
    <div>
      <button disabled={props.isLoading} type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
            
            {
                props.isLoading?<CgSpinner className='animate-spin text-xl'/>:<FaArrowRight/>
                
            }
          </button>
    </div>
  )
}

export default AuthLoaderButton
