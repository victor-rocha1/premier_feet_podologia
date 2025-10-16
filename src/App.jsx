import { useState } from 'react'
import './App.css'
import NavBar from './assets/sections/NavBar/navBar'
import About from './assets/sections/About/about'
import Servicos from './assets/sections/Servicos/servicos'
import Endereco from './assets/sections/Endereco/endereco'
import Footer from './assets/sections/Footer/Footer';

function App() {

  return (
    <>
      <NavBar />
      <About />
      <Servicos />
      <Endereco />
      <Footer />
    </>
  )
}

export default App
