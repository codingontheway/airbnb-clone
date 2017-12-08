import React from 'react'
import logo from '../imgs/logo.svg'

function Navbar() {
    return (
        <nav className='navbar'>
            <a className='navbar-brand' href='#'>
                <img src={logo} alt='logo' width="50" height="50" />
            </a>
            
        </nav>
    )
}

export default Navbar