import React from 'react'
import "../scss/NavBar.scss"
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <div className='nav-bar'>
            <button className='logo'><Link to="/">New year wisher</Link></button>
            <button className='go-wish'><Link to="/wish-form">Wish to someone</Link></button>
        </div>
    )
}

export default NavBar