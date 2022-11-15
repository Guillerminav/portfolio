import React from 'react'
import './sect2.css'
import Slider from './Slider'
import { ProyectosData } from './ProyectosData'
import { useInView } from 'react-intersection-observer'


const Sect2 = () => {
  
  const { ref: myRef, inView: myElementIsVisible } = useInView()

  return (
    <div>
      <div className={`${"sect2Container"} ${myElementIsVisible ? "animate_box1" : ""}`} ref={myRef} id="#proyectos">
        <div className="proyectosTituloContainer">
          <h2 className="proyectosTitulo">Proyectos</h2>
        </div>
        <div className="proyectosContainer">
          <div className="proyectosSlider">
            <Slider slides={ProyectosData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sect2