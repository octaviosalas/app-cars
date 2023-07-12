import * as React from 'react'
import { useState } from 'react'
import './App.css'
import AllCars from './components/AllCars'
import {Routes, Route} from "react-router-dom"
import CarDetail from './components/CarDetail'
import Register from './components/Register'
import Login from './components/Login'
import Main from './components/Main/Main'
import {UserProvider} from "./store/usercontext"
import Favs from './components/Favs'
import AboutUs from './components/AboutUs'




function App() {
 


  return (
 
             <div className='app'>
        <UserProvider>
              <Routes>
                <Route path="/main/:id" element={<Main/>}></Route> 
                <Route path="/allCars" element={<AllCars/>}></Route> 
                <Route path="/carDetail/:id" element={<CarDetail/>}></Route> 
                <Route path="/" element={<Register/>}></Route> 
                <Route path="/login" element={<Login/>}></Route> 
                <Route path="/favs/:id" element={<Favs/>}></Route>
                <Route path="/aboutUs" element={<AboutUs/>}></Route>  
              </Routes>
       </UserProvider>

         
      
              </div>
     
           
  
  )
}

export default App
