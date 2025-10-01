import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/SideBar"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Serices from "./pages/serices/Services"
import Contact from "./pages/contact/Contact"
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Serices' element={<Serices/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
      </Routes>
    </div>
  )
}

export default App

