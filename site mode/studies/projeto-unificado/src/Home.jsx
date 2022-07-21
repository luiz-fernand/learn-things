import React from 'react'

import './style/Home.css'

import PULogo from './media/PU-logo-grande.png'
import HTMLLogo from './media/HTML-logo.png'
import CSSLogo from './media/CSS-logo.png'
import JSLogo from './media/JS-logo.png'
import NodeLogo from './media/Node-logo.png'
import ReactLogo from './media/React-logo.png'
import JSONLogo from './media/JSON-logo.png'

const Home = () => {
  return (
    <div className='container'>
      <div className='pu-container'>
        <h1>Olá! Bem vindo ao</h1>
        <img className='pu-logo' src={PULogo} alt='PU Logo'/>
      </div>
      <div className='sobre-container'>
        <h1 className='sobre-title'>Sobre</h1>
        <p>Me chamo Luiz, e esse é meu Projeto Unificado, cuja função é a de unir minhas anotações
          e exercícios com estas tecnologias:</p>
        <div className='imagens'>
          <img src={HTMLLogo} title='HTML' alt='HTML Logo'/>
          <img src={CSSLogo} title='CSS' alt='CSS Logo'/>
          <img src={JSLogo} title='JavaScript' alt='JS Logo'/>
          <img src={NodeLogo} title='NodeJS' alt='Node Logo'/>
          <img src={ReactLogo} title='ReactJS' alt='React Logo'/>
          <img src={JSONLogo} title='JSON' alt='JSON Logo'/>
        </div>
        <p>Assim, com todas elas em um só lugar, me possibilitando uma maior compreensão
          e organização em minhas dúvidas e requisições próprias. Tabém consequentemente,
          acarretando um estudo por parte do uso de tais tecnologias para o desenvolvimento do mesmo.</p>
      </div>
    </div>
  )
}
 
export default Home