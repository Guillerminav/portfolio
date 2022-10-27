import React, { useEffect } from 'react'
import './sliderItem.css'
import githubIcon from '../../../assets/iconGithub.png'
import { useState } from 'react'



const SliderItem = (props) => {

  return (
      <div>
        <div className="proyectoItem">
          <img src={props.img} alt="" />
          <div className="contentItem">
            <div className="tituloItemContainer">
            <p className="nroItem">{props.id}</p>
            <p className="tituloItem">{props.title}</p>
          </div>
          <div className="descriptionItemContainer">
            <p className="descriptionItem">{props.description}</p>
          </div>
          <div className="linksItemContainer">
            <a href={props.github}><img src={githubIcon} alt="" className="iconGithub" /></a>
            <a href={props.website} className="linkToWebsite">Website</a>
          </div>
          </div>
        </div>
      </div>
  )
}


export default SliderItem





{/* <div className="proyectoItem">
          <img src={cinearCaptura} alt="" className="proyectoImg" />
          <div className="tituloItemContainer">
              <p className="nroItem">{props.id}</p>
              <p className="tituloItem">{props.name}</p>
          </div>
          <div className="descriptionItemContainer">
              <p className="descriptionItem">{props.description}</p>
          </div>
          <div className="linksItemContainer">
              <a href={props.github}><img src={githubIcon} alt="" className="iconGithub" /></a>
              <a href={props.website} className="linkToWebsite">Website</a>
          </div>
    </div>      */}