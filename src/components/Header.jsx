import React from 'react'
import ProjectsButton from './buttons/ProjectsButton'
import AboutButton from './buttons/AboutButton'
import HomeButton from './buttons/HomeButton'
import './Header.css'

function Header () {
    return (
      <>
        <header>
          <div class="header">
            <div class="logo">LOGO</div>
            <label for="toggle" class="toggleBtn">menu</label>
            <input type="checkbox" id="toggle" />
            <ul class="navbar">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
        </header>
      </>
    )
}
export default Header