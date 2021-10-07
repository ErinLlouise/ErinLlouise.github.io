import React from 'react'
import welcomeData from '../data/Welcome.json'

function WelcomeMessage () {
 
  
    return (
      <>
        <h1>{welcomeData[0].hello}</h1>
      </>
    )
}

export default WelcomeMessage