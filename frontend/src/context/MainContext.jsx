import React, { createContext, useState } from 'react'




const mainContext=createContext()
export const useMainContext=()=>useContext(mainContext)

export const MainContextProvider = ({children}) => {

    let [loading,setLoading]=useState(false);

    const fetchProfile=()=>{
        try{
            setLoading(true);
        }catch(error){

        }finally{
            setLoading(false)
        }
    }
  return (
   
    <mainContext.Provider value={fetchProfile}>{children}</mainContext.Provider>
   
  )
}

export default MainContextProvider
