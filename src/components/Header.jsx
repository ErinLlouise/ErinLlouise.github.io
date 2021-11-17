import React, { useEffect, useRef }from 'react'
// import ProjectsButton from './buttons/ProjectsButton'
// import AboutButton from './buttons/AboutButton'
// import HomeButton from './buttons/HomeButton'
import './Header.css'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';


function Header () {
  // store a reference to the box div
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, {rotation:"+=360", repeat:-1, duration: 15, ease: "none"});
  });

    return (
      <>
        <header>
          <div class="header">
            <div class="logoContainer">
              <img ref={boxRef} class="logo" src="logo.png" alt="logo"/>
            </div>
            {/* hamburger icon */}
            <label for="toggle" class="toggleBtn">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </label>
            <input type="checkbox" id="toggle" />
            <ul class="navbar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>
        </header>
      </>
    )
}
export default Header