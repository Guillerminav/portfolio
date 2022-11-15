import React, { Component } from "react";
import SliderItem from './sliderItem/SliderItem.jsx'
import '../sect2/slider.css'
import { ProyectosData } from "./ProyectosData.jsx";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex((index - 1) % slides.length)
  }
  const nextSlide = () => {
    setIndex((index + 1) % slides.length)
  }


  return(
    <div>
      <div className="sliderContainer">
        <div className="sliderTrack">
          {ProyectosData.map((slide, index) => {
            return (
              <SliderItem 
              img={slide.img}
              id={slide.id}
              title={slide.title}
              description={slide.description}
              github={slide.github}
              website={slide.website}
              key={slide.id - 1}
              
              />
            )
          })}
        </div>
      </div>
      <div className="flechasContainer">
        <FontAwesomeIcon icon={faAngleLeft} className="arrowLeft" onClick={prevSlide}/>
        <FontAwesomeIcon icon={faAngleRight} className="arrowRight" onClick={nextSlide}/>
      </div>
    </div>
  )
}

export default Slider

