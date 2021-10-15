import React from 'react' 
import { HashLink as Link } from 'react-router-hash-link'
import Arrow from '@material-ui/icons/ExpandMore'
import ArrowUp from '@material-ui/icons/ExpandLess'
import Email from '@material-ui/icons/Email'
import Account from '@material-ui/icons/AccountCircle'
import Download from '@material-ui/icons/SaveAlt'
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
                  <Arrow style={{ color: "#ff4219", "fontSize" : "50px" }} className='arrow bounce bounce-7' src='warrow.png'/> 
                </Link>
              </div>
            </div>

              <div id='sectionB' class="container container_image" aria-hidden="true">
                <div class="title_wrapper">
                  <h1>About</h1>
                </div>
              <div>
                <Link to='#sectionC'>
                  <Arrow style={{ color: "#ffbdb3", "fontSize" : "50px" }} className='arrow bounce bounce-7' src='warrow.png'/> 
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
                  <Email style={{ "color": "#ff4219", "fontSize" : "80px" }} className='clickables'/>
                  <a href='https://www.linkedin.com/in/erin-abernethy-626a60159/' >
                    <Account style={{ "color": "#ff4219", "fontSize" : "80px" }} 
                      className='clickables'/>
                  </a>
                  <Download style={{ "color": "#ff4219", "fontSize" : "80px" }} className='clickables'/>
              </div>
              </section>
            </div>
            <div className='sectionD'>
                <div className='timeline'>
                  <Timeline />
                </div>
            </div>
                <div>
                <Link to='#sectionA'>
                  <ArrowUp style={{ color: "#ff4219", "fontSize" : "50px" }} className='arrowup bounce bounce-7' src='warrow.png'/> 
                </Link>
              </div>
          </div>
        </>
    )
}

export default About