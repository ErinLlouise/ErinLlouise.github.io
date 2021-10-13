import React from 'react' 
import { HashLink as Link } from 'react-router-hash-link'
import './About.css'
import Timeline from './Timeline'

function About () {
    return (
        <>
          <div>
            <header>
              <div id='sectionA'>
                <div class="container container_solid">
                  <div class="title_wrapper">
                    <h1>About</h1>
                  </div>
                </div>
                <div>
                <Link to='#sectionB'>
                  <img className='arrow bounce bounce-7' src='warrow.png' alt='down arrow' />
                </Link>
              </div>
            </div>
            
              <div id='sectionB' class="container container_image" aria-hidden="true">
                <div class="title_wrapper">
                  <h1>About</h1>
                </div>
              <div>
                <Link to='#sectionC'>
                  <img className='arrow bounce bounce-7' src='warrow.png' alt='down arrow' />
                </Link>
              </div>
              </div>
            </header>
            <div className='sectionC'>
              <section>
                <h1 id='sectionC'>Erin Louise Abernethy.</h1>
                <p>I am a Creative Technologist and Software Developer 
                   with a deep passion for designing, creating and building 
                   interactive experiences. I am always excited by new and 
                   evolving tech and am personally driven by a limitless 
                   curiosity and eagerness to learn.
                </p>
                <p>My career goal is to have an influence on the tech sector 
                   in Aotearoa, and contribute to our country's success in a 
                   post Covid-19 world.</p>
              <div className='icons'>
                  <img src='mail.png' alt='click to copy email'/>
                  <img src='person.png' alt='click to follow Erin on Linked In' />
                  <img src='download.png' alt='click to download erins cv' />
              </div>
              </section>
            </div>
            <div className='sectionD'>
                <div className='timeline'>
                  <Timeline />
                </div>
            </div>
            <div className='arrowpos'>
              <img className='arrow bounce bounce-7' src='warrow.png' alt='down arrow' />
            </div>
          </div>
        </>
    )
}

export default About