import React from 'react'
import "../scss/NavBar.scss"
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <div className='nav-bar'>
        <button className='logo'><Link to="/">New Year Wisher</Link></button>
        <button className='go-wish'><Link to="/wish-form">Wish</Link></button>
    </div>
  )
}

export default NavBar