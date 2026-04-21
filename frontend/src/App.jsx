import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { axiosClient } from './utils/axiosClient'
import MainContextProvider from './context/MainContext'
import ProtectedLayout from './layout/ProtectedLayout'
import ProfilePage from './pages/ProfilePage'

const App = () => {

  let checkServerHealth=async ()=>{
    let res=await axiosClient.get("/health");
    let data=await res.data;
    console.log(data);
  }

  useEffect(()=>{
    checkServerHealth();
  },[])

  
  return (
    <MainContextProvider>
      <div>
        <NavBar />
        
        <Routes>
          <Route path="/" Component={ProtectedLayout}>
            <Route index Component={HomePage} />
            <Route path="/profile" Component={ProfilePage} />
          </Route>
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
        </Routes>

        <Footer />
      </div>
    </MainContextProvider>
  )

}

export default App
