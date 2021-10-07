import React from 'react'
import './Header.styles.css'

function Header () {
    return (
      <>
        <div className="header">
          <img src='ErinLouise(1).png' className="App-logo" alt="Erin Louise Logo" />
          <div className='nav'>
            <button>ABOUT</button>
            <button>PROJECTS</button>
            <button>HOME</button>
          </div>
        </div>
      </>
    )
}
export default Header