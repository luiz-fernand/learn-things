import React from 'react'

import {Link} from 'react-router-dom'
import './navBar.css'

import logo from '../imagens/PU-logo-title.png'

const navBar = () => {
    return (
        <div className='navBar-container'>
            <img src={logo} title='PU Logo' alt='PU Logo'/>
            <nav className='nav-container'>
                <Link to='/'>Home</Link>
                <Link to='/'>Home</Link>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}
 
export default navBar