import React, { createContext, useState, useContext } from 'react'
import { axiosClient } from '../utils/axiosClient';




const mainContext=createContext()
export const useMainContext=()=>useContext(mainContext)

export const MainContextProvider = ({children}) => {

    let [loading,setLoading]=useState(true);

    const fetchProfile=async ()=>{
        try{
            setLoading(true);
            let res=await axiosClient.get("/auth/profile");
            let data=await res.data;
            console.log(data)
        }catch(error){

        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return <div>loading...</div>  
    }
  return (
   
    <mainContext.Provider value={fetchProfile}>{children}</mainContext.Provider>
   
  )
}

export default MainContextProvider
