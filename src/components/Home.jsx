import React from 'react'
import './Home.styles.css'
import HelloData from '../data/Welcome.json'

function Home () {

    function nextMessage () {
        console.log("loaded")
        
    }
    return (
      <>
        <div>
            <h1 onLoad={() => nextMessage()}>{HelloData[0].hello}</h1>
        </div>
      </>
    )
}

export default Home