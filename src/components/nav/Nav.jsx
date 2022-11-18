import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../../assets/logoGuille.png'
import logoDark from '../../assets/logoDark.png'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll'
import styled from 'styled-components'
import BurgerButton from './BurgerButton';


const Nav = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }


  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if(darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <Navbar>
      <nav className="navContainer" id="navegation">
        <div className="logo">
          <img src={logoDark} alt="logo" className="logoImg" />
          <p className="logoP"></p>
        </div>
        <div className="navegationContainer">
          <ul className={`navegation ${clicked ? "active" : ""}`}>
            <li><Link to="home" smooth={true}><a href="#home">Inicio</a></Link></li>
            <li><Link to="tecnologias" smooth={true}><a href="#tecnologias">Tecnologías</a></Link></li>
            <li><Link to="proyectos" smooth={true}><a href="#proyectos">Proyectos</a></Link></li>
          </ul>
        </div>
        <div className={`personalize ${clicked ? "active" : ""}`}>
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
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`} ></BgDiv>
      </nav>
    </Navbar>
  )
}

export default Nav

const Navbar = styled.nav`

  display: flex;
  justify-content: center;
  margin: 0;

  .navContainer {
      width: 100%;
      max-width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
      position: fixed;
      z-index: 900;    
  }

  .navegation {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all .5s ease;

    @media(min-width: 768px) {
      position: initial;
      margin: 0;
      li {
        display: inline;
        margin: 0 20px;
      }
      display: block;
    }
  }

  .navegation.active {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      top: 40vh;
      left: 0;
      right: 0;
      text-align: center;
  }

  .navegation li {
      list-style: none;
  }

  .navegation li a {
      text-decoration: none;
      color: #1f1f1f;
  }

  .navegation li a:hover {
      color: #1f1f1f90;
      transition: .2s;
  }

  .personalize {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      position: absolute;
      top: -700px;
      left: -2000px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      display:flex;
      align-items:center;
      justify-content:center;
      transition: all .5s ease;
      @media(min-width: 768px) {
        position: initial;
        margin: 0;
      div {
        display: inline;
        margin: 0 5px;
      }
      display: block;
    }
  }

  .personalize.active {
      width: 100%;
      display: flex;
      gap: 20px;
      position: absolute;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      top: auto;
      left: 0;
      right: 0;
      text-align: center;
  }

  .darkModeButton {
      border: none;
      padding: 10px 15px;
      border-radius: 50%;
      cursor: pointer;
      background-color: #f3f3f3;
  }

  .darkModeButton:hover {
      background-color: #1f1f1f15;
      transition: .2s;
  }

  #language {
      border: none;
      background-color: #f3f3f3;
      color: #1f1f1f;
      padding: 10px;
      border-radius: 10px;
  }

  #language:hover {
      background-color: #1f1f1f15;
      transition: .2s;
  }

  #language option {
      background-color: #f3f3f3;
      color: #1f1f1f;
  }

  .logo {
      display: flex;
      align-items: center;
      gap: 10px;
  }

  img{
    width: 50px;
    transition: 1s;
    border-radius: 50%
  }

  .logoImg:hover {
    transform: rotate(180deg);
  }

  .logoP {
      font-weight: 700;
      font-size: 30px;
  }

  .burger {
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  z-index: -1;
  height: 100%;
  top: -700px;
  left: -2000px;
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
`