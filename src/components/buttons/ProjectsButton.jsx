import React from 'react' 
import { Link } from 'react-router-dom'
import './buttons.css'

function ProjectsButton () {
    return (
        <>
          <Link to='/projects'>
            <button className='butt'>PROJECTS</button>
          </Link>
        </>
    )
}

export default ProjectsButton