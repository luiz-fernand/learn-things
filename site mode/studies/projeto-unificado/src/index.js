import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './style/index.css'
import NavBar from './components/navBar'
import Home from './Home'
import Anotacoes from './Anotacoes'
import Exercicios from './Exercicios'
import Contato from './Contato'
import Footer from './components/footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/anotacoes' element={<Anotacoes/>}/>
      <Route path='/exercicios' element={<Exercicios/>}/>
      <Route path='/contato' element={<Contato/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)