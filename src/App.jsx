import { useState } from 'react'
import './App.css'
import NavBar from './assets/sections/NavBar/NavBar'
import About from './assets/sections/about/about'
import Servicos from './assets/sections/servicos/servicos'

function App() {

  return (
    <>
      <NavBar />
      <About />
      <Servicos />
    </>
  )
}

export default App
