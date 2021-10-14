import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Arrow from '@material-ui/icons/ExpandMore'
import './Home.css'

function Home () {

    return (
      <>
        <div>
        <header>
          <div id='sectionA'>
            <div class="container container_solid">
              <div class="title_wrapper">
                <h1>Welcome</h1>
              </div>
            </div>
            <div>
              <Link to='#sectionB'>
                <Arrow style={{ color: "#ff4219" }} className='arrow bounce bounce-7' src='warrow.png'/> 
              </Link>
            </div>
          </div>
            <div id='sectionB' class="container container_image" aria-hidden="true">
              <div class="title_wrapper">
                <h1 >Welcome</h1>
              </div>
              <div>
                <Link to='#sectionC'>
                  <Arrow style={{ color: "#ffbdb3" }} className='arrow bounce bounce-7' src='warrow.png'/> 
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
            </section>
          </div>
        </div>
      </>
    )
}

export default Home