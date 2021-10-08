import React from 'react'
import './Home.styles.css'

function Home () {

    return (
      <>
        <div>
        <header>
          <div class="container container_solid">
            <div class="title_wrapper">
              <h1>Welcome</h1>
            </div>
          </div>

          <div class="container container_image" aria-hidden="true">
            <div class="title_wrapper">
              <h1>Welcome</h1>
            </div>
          </div>
          </header>
          <div className='sectionC'>
            <section>
              <h2>Lorem ipsum dolor sit amet.</h2>
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
          <div className='arrowpos'>
            <img className='arrow' src='warrow.png' alt='down arrow' />
          </div>
        </div>
      </>
    )
}

export default Home