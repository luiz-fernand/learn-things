import React from 'react'

import {Link} from 'react-router-dom'
import '../style/navBar.css'

import logo from '../media/PU-logo-title.png'

const navBar = () => {
    return (
        <div className='navBar-container'>
            <img src={logo} title='PU Logo' alt='PU Logo'/>
            <nav className='nav-container'>
                <Link to='/'>Home</Link>
                <Link to='/anotacoes'>Anotações</Link>
                <Link to='/exercicios'>Exercicios</Link>
                <Link to='/contato'>Contato</Link>
            </nav>
        </div>
    )
}
 
export default navBar