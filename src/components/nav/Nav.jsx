import React from 'react'
import { useState, useEffect } from 'react'
import './nav.css'
import logo from '../../assets/logoGuille.png'
import logoDark from '../../assets/logoDark.png'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const Nav = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if(darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="navCont">
      <nav className="navContainer" id="navegation">
        <div className="logo">
          <img src={logoDark} alt="logo" className="logoImg" />
          <p className="logoP"></p>
        </div>
        <div className="navegationContainer">
          <ul className="navegation">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#tecnologias">Tecnologías</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
          </ul>
        </div>
        <div className="personalize">
          <div className="darkMode">
            <button className="darkModeButton" onClick={() => setDarkMode(!darkMode)}>
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
          <div className="languageOptions">
            <label htmlFor="language"></label>
            <select name="" id="language">
              <option value="spa">Esp</option>
              <option value="eng">Eng</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav