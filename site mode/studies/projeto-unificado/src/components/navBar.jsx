import React from 'react'

import {Link} from 'react-router-dom'
import './navBar.css'

const navBar = () => {
    return (
        <div className='navBar-container'>
            <h1 className='title-navBar'>Projeto Unificado</h1>
            <nav className='nav-container'>
                <Link to='/'>Home</Link>
                <Link to='/'>Home</Link>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}
 
export default navBar