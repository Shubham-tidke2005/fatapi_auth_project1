import React, { useEffect,useState } from 'react'
import { useMainContext } from '../context/MainContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


const ProtectedLayout = () => {
    const {data}=useMainContext();
    let [loading,setLoading]=useState(true);
    let navigate=useNavigate();

    useEffect(()=>{
        if(!data){
           navigate("/login")
        }else{
            setLoading(false);
        }
    },[data])

    if(loading){
        <div>loading......</div>
    }
  return (
    <>
      <Outlet/>
    </>
  )
}

export default ProtectedLayout
