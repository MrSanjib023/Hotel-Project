import React from 'react'
import Navbar from './ProjectComponant/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './ProjectComponant/Home'
import Hotels from './ProjectComponant/Hotels'
import Experiences from './ProjectComponant/Experiences'
import About from './ProjectComponant/About'
import Footer from './ProjectComponant/Footer'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Hotels' element={<Hotels></Hotels>}></Route>
          <Route path='/Experiences' element={<Experiences></Experiences>}></Route>
          <Route path='/About' element={<About></About>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
