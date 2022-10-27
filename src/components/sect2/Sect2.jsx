import React from 'react'
import './sect2.css'
import SliderItem from '../sect2/sliderItem/SliderItem.jsx'
import cinearCaptura from '../../assets/cinearCaptura.png'
import Slider from './Slider'



const Sect2 = (props) => {


  return (
    <div>
      <div className="sect2Container" id="#proyectos">
        <div className="proyectosTituloContainer">
          <h2 className="proyectosTitulo">Proyectos</h2>
        </div>
        <div className="proyectosContainer">
          <div className="proyectosSlider">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sect2