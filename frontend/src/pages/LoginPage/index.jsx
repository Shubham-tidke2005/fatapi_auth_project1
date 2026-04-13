import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AuthLoaderButton from '../../components/AuthLoaderButton';
import {Form,ErrorMessage,Formik, Field} from 'formik'
import * as yup from 'yup'
import { axiosClient } from '../../utils/axiosClient';
import { toast } from 'react-toastify';


function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialValues={
    email: "",
    password: ""
  };

  const validationSchema=yup.object({
    email:yup.string().email("Email must valid").required("email is Required"),
    password:yup.string().required("password is Required")
  })

  let onsubmitHandler=async (values,helpers)=>{
    try{
      setIsLoading(true);
      let res= await axiosClient.post("/auth/login",values);
      let data=res.data;
      // console.log(data);
      toast.success(data.message);
      helpers.resetForm();
    }catch(error){
      toast.error(error.response?.data?.detail || error.message)
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-500 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Into Account
        </h2>
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onsubmitHandler}>
        <Form className="space-y-5">
          

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Field type="email" name="email" id="email" placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
              <ErrorMessage name="email" className='text-red-500' component={'p'}/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>

            <div className="relative mt-1">
              <Field
                type={showPassword ? "text" : "password"} name="password" id="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
              <ErrorMessage name="password" className='text-red-500' component={'p'}/>

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>


        
          <AuthLoaderButton  isLoading={isLoading} text={'Login'} className={' '}/>
        </Form>
        </Formik>

        <p className="text-sm text-center text-gray-500 mt-4">
          Do not have an account? <span className="text-indigo-500 cursor-pointer"><Link to={'/register'} className="mr-5 hover:text-gray-900">Register</Link></span>
        </p>

      </div>
    </div>
  )
}

export default LoginPage