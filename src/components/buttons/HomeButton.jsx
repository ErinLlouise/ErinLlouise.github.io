import React from 'react' 
import { Link } from 'react-router-dom'
import './buttons.css'

function HomeButton () {
    return (
        <>
          <Link to='/'>
            <button className='butt'>HOME</button>
          </Link>
        </>
    )
}

export default HomeButton