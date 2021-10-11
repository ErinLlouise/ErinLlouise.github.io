import React from 'react' 
import { Link } from 'react-router-dom'
import './buttons.css'

function AboutButton () {
    return (
        <>
          <Link to='/about'>
            <button className='butt'>ABOUT</button>
          </Link>
        </>
    )
}

export default AboutButton