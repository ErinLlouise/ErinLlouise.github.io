import React from 'react'
import './Home.styles.css'
import WelcomeMessage from './WelcomeMessage'

function Home () {

    return (
      <>
        <div>
            <div className='home'>
              <WelcomeMessage />
            </div>
        </div>
      </>
    )
}

export default Home