import React from 'react' 
import { HashLink as Link } from 'react-router-hash-link'
import Arrow from '@material-ui/icons/ExpandMore'
import ArrowUp from '@material-ui/icons/ExpandLess'
import './Projects.css'

function Projects () {
    return (
        <>
       <div>
        <header>
          <div id='sectionA'>
            <div class="container container_solid">
              <div class="title_wrapper">
                <h1>Projects</h1>
              </div>
            </div>
            <div>
              <Link to='#sectionB'>
                <Arrow style={{ color: "#ff4219", "fontSize" : "50px" }} className='arrow bounce bounce-7' src='warrow.png'/> 
              </Link>
            </div>
          </div>
            <div id='sectionB' class="container container_image" aria-hidden="true">
              <div class="title_wrapper">
                <h1 >Projects</h1>
              </div>
              <div>
                <Link to='#sectionC'>
                  <Arrow style={{ color: "#ffbdb3", "fontSize" : "50px" }} className='arrow bounce bounce-7' src='warrow.png'/> 
                </Link>
              </div>
            </div>
          </header>
          <div>
            <section>
              <h1 id='sectionC' className='head'>Welcome to my portfolio.</h1>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.</p>
                <div>
                <Link to='#sectionA'>
                  <ArrowUp style={{ color: "#ff4219", "fontSize" : "50px" }} className='arrowup bounce bounce-7' src='warrow.png'/> 
                </Link>
              </div>
            </section>
          </div>
        </div>
        </>
    )
}

export default Projects