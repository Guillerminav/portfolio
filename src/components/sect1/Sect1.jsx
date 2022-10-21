import React from 'react'
import './sect1.css'

const Sect1 = () => {
  return (
    <div>
      <div className="sect1Container">
        <div className="box1">
          <h2>Tecnologías</h2>
          <p>Mi stack incluye estas tecnologías pero siempre estoy aprendiendo algo nuevo.</p>
        </div>
        <div className="box2">
          <div className="slide1">
            <div className="fila1">
              <div className="techContainer"></div>
              <div className="techContainer"></div>
              <div className="techContainer"></div>
              <div className="techContainer"></div>
            </div>
          </div>
          <div className="slide2">
            <div className="fila2">
              <div className="techContainer"></div>
              <div className="techContainer"></div>
              <div className="techContainer"></div>
              <div className="techContainer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sect1