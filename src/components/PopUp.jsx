import React from 'react'
import './PopUp.css'

function PopUp (props) {
      return (props.trigger) ? (
          <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Nulla reprehenderit voluptates labore cumque aliquam 
                   totam vero. Non, adipisci earum! Iusto reiciendis quis 
                   quam totam earum cumque, dolorum laudantium? Facilis, 
                   totam.</p>
            </div>
          </div>
      ) : ""
  }

  export default PopUp
