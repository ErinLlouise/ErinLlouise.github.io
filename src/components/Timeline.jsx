import React, { useState } from 'react' 
import PopUp from './PopUp';
import './Timeline.css';

function Timeline () {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className='timepos'>
      <ul class="timeline">
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <button onClick={() => setButtonPopup(true)} class="flag">Accenture Interactive</button>
              <span class="time-wrapper"><span class="time">2021 - present</span></span>
            </div>
            <div class="desc">My current employment as a Front End Development Analyst</div>
          </div>
        </li>
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <button onClick={() => setButtonPopup(true)} class="flag">Enspiral Dev Academy</button>
              <span class="time-wrapper"><span class="time">Feb - May</span></span>
            </div>
            <div class="desc">Full stack web development boot camp.</div>
          </div>
        </li>
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <button onClick={() => setButtonPopup(true)} class="flag">Bachelors Degree</button>
              <span class="time-wrapper"><span class="time">2018 - 2020</span></span>
            </div>
            <div class="desc">Bachelor of Creative Technologies</div>
          </div>
        </li>
        <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <button onClick={() => setButtonPopup(true)} class="flag">Mecca Brands</button>
            <span class="time-wrapper"><span class="time">2018-2021</span></span>
          </div>
          <div class="desc">Operations Specialst, Beauty Lab Assistant, Store Host.</div>
        </div>
      </li>
    </ul>
    <PopUp 
      trigger={buttonPopup} 
      setTrigger={setButtonPopup}>
    </PopUp>
  </div>
  )
}

export default Timeline
