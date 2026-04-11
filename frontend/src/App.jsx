import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { axiosClient } from './utils/axiosClient'

const App = () => {

  let cheackServerHealth=async ()=>{
    let res=await axiosClient.get("/health");
    let data=await res.data;
    console.log(data);
  }

  useEffect(()=>{
    cheackServerHealth();
  },[])

  return (
    <div>
      <h1 className='font-extrabold'><NavBar/></h1>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path='/login' Component={LoginPage}/>
          <Route path='/register' Component={RegisterPage}/>
        </Routes>
      <h1 className='font-extrabold'><Footer/></h1>
    </div>
  )
}

export default App
