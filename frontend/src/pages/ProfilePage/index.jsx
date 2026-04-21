import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaMobile } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import AuthLoaderButton from '../../components/AuthLoaderButton';
import {Form,ErrorMessage,Formik, Field} from 'formik'
import * as yup from 'yup'
import { axiosClient } from '../../utils/axiosClient';
import { toast } from 'react-toastify';
import { useMainContext } from '../../context/MainContext';



function ProfilePage() {

  const [isLoading, setIsLoading] = useState(false);
  const {fetchProfile,data} = useMainContext();
  const navigate=useNavigate();
  const initialValues={
    name:data.name ||  "",
    address:data.address || "",
    mobile:data.mobile || ""
  };

  const validationSchema=yup.object({
    name:yup.string().required("name is Required"),
    address:yup.string().optional(),
    mobile:yup.string().optional()
  })

  let onsubmitHandler=async (values,helpers)=>{
    try{
      setIsLoading(true);
      let res= await axiosClient.post("/auth/profile",values);
      let data=await res.data;
      // console.log(data);
      toast.success(data.message);
     
      await fetchProfile();
      navigate("/");
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
          Update Your Profile
        </h2>
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onsubmitHandler}>
        <Form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <Field type="text" name="name" id="name" placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
              <ErrorMessage name="name" className='text-red-500' component={'p'}/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">address</label>
            <Field type="textarea" name="address" id="address" placeholder="Enter your address"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
              <ErrorMessage name="address" className='text-red-500' component={'p'}/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">mobile</label>
            <Field type="text" name="mobile" id="mobile" placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
              <ErrorMessage name="mobile" className='text-red-500' component={'p'}/>
          </div>

         <AuthLoaderButton  isLoading={isLoading} text={'Update'} className={' '}/>

        </Form>
        </Formik>

        {/* <p className="text-sm text-center text-gray-500 mt-4">
          Do not have an account? <span className="text-indigo-500 cursor-pointer"><Link to={'/register'} className="mr-5 hover:text-gray-900">Register</Link></span>
        </p> */}

      </div>
    </div>
  )
}

export default ProfilePage
