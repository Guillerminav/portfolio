import React, { Component } from "react";
import SliderItem from './sliderItem/SliderItem.jsx'
import '../sect2/slider.css'
import proyectos from './proyectos.json'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = () => {
  return(

    <div>
      <div className="sliderContainer">
        <div className="sliderTrack">
          <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
        </div>
      </div>
      <div className="flechasContainer">
        <FontAwesomeIcon icon={faAngleLeft} className="arrowLeft" />
        <FontAwesomeIcon icon={faAngleRight} className="arrowRight" />
      </div>
    </div>
  )
}

export default Slider

{/* <div>
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
          </div>
          <div>
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
          </div>
          <div>
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
          </div>
          <div>
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
          </div>
          <div>
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
          </div>
          <div>
            <SliderItem 
              img={proyectos[0].img}
              id={proyectos[0].id}
              title={proyectos[0].title}
              description={proyectos[0].description}
              github={proyectos[0].github}
              website={proyectos[0].website}
              />
          </div> */}