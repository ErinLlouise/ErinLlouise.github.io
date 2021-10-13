import React from 'react'
import ProjectsButton from './buttons/ProjectsButton'
import AboutButton from './buttons/AboutButton'
import HomeButton from './buttons/HomeButton'
import './Header.css'

function Header () {
    return (
      <>
        <div className="header">
          <img src='ErinLouise(1).png' className="App-logo" alt="Erin Louise Logo" />
          <div className='nav'>
            <AboutButton />
            <ProjectsButton />
            <HomeButton />
          </div>
        </div>
      </>
    )
}
export default Header