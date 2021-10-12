import React from 'react'
import { Link } from 'react-router-dom'
import './Home.styles.css'

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
            <div className='secA-arrow arrow'>
            <Link to='#sectionB'>
              <img className='bounce bounce-7' src='warrow.png' alt='down arrow' />
            </Link>
            </div>
          </div>
          <div id='sectionB'>
            <div class="container container_image" aria-hidden="true">
              <div class="title_wrapper">
                <h1>Welcome</h1>
              </div>
              <div className='secB-arrow'>
                <img className='arrow bounce bounce-7' src='warrow.png' alt='down arrow' />
              </div>
            </div>
          </div>
          </header>
          <div className='sectionC'>
            <section>
              <h1 className='head'>Welcome to my portfolio.</h1>
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