import React, { useState } from 'react'
import { useRef } from 'react'
import {Link} from 'react-scroll'
import './home.css'
import './homeResponsive.css'
import '../../components/nav/dark.css'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer'

const Home = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView()

  const [nroActual, setNroActual] = useState(0)

  const addNumber = () => {
    setNroActual(nroActual + 1)
  }

  const reset = () => {
    setNroActual(0)
  }

  return (
    <div className="mainContainer" id="home">
      <div className={`${"homeContainer"} ${myElementIsVisible ? "animate" : ""}`} ref={myRef}>
        <div className="infoContainer">
          <div className="titleContainer">
            <h1 className="title">Guillermina Bousoño</h1>
          </div>
          <div className="descriptionContainer">
            <p className="description1">
              RPA Developer | AI Student
            </p>
            <p className="description2">
              ¡Hola! Soy una desarrolladora de Argentina. Te invito a recorrer mi perfil y si algo te interesa no dudes en contactarme :)
            </p>
        </div>
        </div>
        <div className="plantsContainer">
          <div className="plant1Container">
            <FontAwesomeIcon icon={faCode} className="plant1" />
          </div>
          <div className="plant2Container">
            <FontAwesomeIcon icon={faSeedling} className="plant2" />
          </div>
        </div>
      </div>
      <div className="arrowDownContaienr">
        <div className="arrowDown">
          <Link to="tecnologias" smooth={true}><FontAwesomeIcon icon={faChevronDown} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home