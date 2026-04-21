import React, { createContext, useState, useContext, useEffect } from 'react'
import { axiosClient } from '../utils/axiosClient';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const mainContext=createContext()
export const useMainContext=()=>useContext(mainContext)

export const MainContextProvider = ({children}) => {
    const navigate=useNavigate()
    let [loading,setLoading]=useState(true);
    const [data,setData]=useState(null);
    const fetchProfile=async ()=>{
        try{
            const token=localStorage.getItem("token") || "";
            if(!token){return;}
            setLoading(true);
            let res=await axiosClient.get("/auth/profile",{
                headers:{
                    'Authorization':'Bearer '+token
                }
            });
            let data=await res.data;
            setData(data);
        }catch(error){

        }finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
            fetchProfile();
        },[])

    if(loading){
        return <div>loading...</div>  
    }

    let Logout=()=>{
        localStorage.removeItem("token");
        toast.success("Logoutt sucessfullly");
        navigate("/login");
        setData(null);
    }

  return (
   
    <mainContext.Provider value={{fetchProfile,data,Logout}}>{children}</mainContext.Provider>
   
  )
}

export default MainContextProvider
