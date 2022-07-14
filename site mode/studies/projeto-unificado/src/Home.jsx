import React from 'react'

import './style/Home.css'

import PULogo from './media/PU-logo-grande.png'

const Home = () => {
  return (
    <div className='container'>
      <h1>Olá! Bem vindo ao</h1>
      <img className='pu-logo' src={PULogo} alt='PU Logo'/>
      <p>Um Projeto unificado cuja função é a de unir meus aprendizados em HTLM, CSS, JavaScript e ReactJS</p>
    </div>
  )
}
 
export default Home