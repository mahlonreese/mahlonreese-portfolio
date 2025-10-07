import { useState } from 'react'
import './App.css'
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Info from './Pages/Info';
import Design from './Pages/Design';
import Develop from './Pages/Develop';
import Clothes from './Pages/Clothes';
import BottomNav from './Components/BottomNav';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/design" element={<Design />} />
        <Route path="/develop" element={<Develop />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
      <div className='bottomNavSpace'>
        <BottomNav/>
      </div>
      
    </>
  )
}

export default App;