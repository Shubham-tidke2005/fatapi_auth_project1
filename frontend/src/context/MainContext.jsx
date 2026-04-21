import React, { createContext, useState, useContext, useEffect } from 'react'
import { axiosClient } from '../utils/axiosClient';




const mainContext=createContext()
export const useMainContext=()=>useContext(mainContext)

export const MainContextProvider = ({children}) => {

    let [loading,setLoading]=useState(true);

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
            console.log(data)
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
  return (
   
    <mainContext.Provider value={{fetchProfile}}>{children}</mainContext.Provider>
   
  )
}

export default MainContextProvider
