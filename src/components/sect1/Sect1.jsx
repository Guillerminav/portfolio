import React from 'react'
import './sect1.css'
import htmlIcon from '../../assets/iconHtml.png'
import cssIcon from '../../assets/iconCss.png'
import JSIcon from '../../assets/iconJS.png'
import reactIcon from '../../assets/iconReact.png'
import nodeIcon from '../../assets/iconNode.png'
import phpIcon from '../../assets/iconPhp.png'
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sect1 = () => {
  return (
    <div>
      <div className="sect1Container" id="sect1">
        <div className="box1">
          <h2>Tecnologías</h2>
          <p>Mi stack incluye estas tecnologías pero siempre estoy aprendiendo algo nuevo.</p>
          <div className="computerIconContainer">
            <FontAwesomeIcon icon={faComputer} className="computerIcon" />
          </div>
        </div>
        <div className="box2">
          <div className="slide1">
            <div className="fila1">
              <div className="techContainer">
                <img src={htmlIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={cssIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={JSIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={reactIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={nodeIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={phpIcon} alt="html" className="techIcon" />
              </div>
            </div>
          </div>
          <div className="slide2">
            <div className="fila2">
              <div className="techContainer">
                <img src={JSIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={cssIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={htmlIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={nodeIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={reactIcon} alt="html" className="techIcon" />
              </div>
              <div className="techContainer">
                <img src={phpIcon} alt="html" className="techIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sect1