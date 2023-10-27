import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navigation/Navbar'
import Gallery from './component/Pages/Gallery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  <div>
    <Navbar/>
    <Gallery/>
  </div>
 </>
  )
}

export default App
