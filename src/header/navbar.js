import React from 'react'
import logo from '../img/logo.png'
import './navbar.css'

function NavbarBuild() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="#">
            <img src={logo} alt='logo' width='80' height='60' />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse pull-right" id="navbarNavAltMarkup">
          <div class="navbar-nav pull-right ml-auto">
            <a class="nav-item nav-link active" href="#">Become a host <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Help</a>
            <a class="nav-item nav-link" href="#">Sign Up</a>
            <a class="nav-item nav-link" href="#">Sign In</a>
          </div>
        </div>
      </nav>
    )
}

export default NavbarBuild