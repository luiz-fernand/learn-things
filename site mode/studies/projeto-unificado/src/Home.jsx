import React from 'react'

import './style/Home.css'
import NavBar from './components/navBar'

const Home = () => {
  return (
    <div className='countainer'>
      <NavBar/>
      <p>Hello World!!</p>
    </div>
  )
}
 
export default Home