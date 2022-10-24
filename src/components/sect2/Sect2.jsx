import React from 'react'
import './sect2.css'
import githubIcon from '../../assets/iconGithub.png'
import cinearCaptura from '../../assets/cinearCaptura.png'


const Sect2 = () => {
  return (
    <div>
      <div className="sect2Container">
        <div className="proyectosTituloContainer">
          <h2 className="proyectosTitulo">Proyectos</h2>
        </div>
        <div className="proyectosContainer">
          <div className="proyectosSlider">
            <div className="proyectoItem">
              <img src={cinearCaptura} alt="" className="proyectoImg" />
              <div className="tituloItemContainer">
                <p className="nroItem">01</p>
                <p className="tituloItem">CINEAR</p>
              </div>
              <div className="descriptionItemContainer">
                <p className="descriptionItem">Plataforma de contenido audiovisual argentino.</p>
              </div>
              <div className="linksItemContainer">
                <a href=""><img src={githubIcon} alt="" className="iconGithub" /></a>
              </div>
            </div>
            <div className="proyectoItem">
              <img src={cinearCaptura} alt="" className="proyectoImg" />
              <div className="tituloItemContainer">
                <p className="nroItem">01</p>
                <p className="tituloItem">CINEAR</p>
              </div>
              <div className="descriptionItemContainer">
                <p className="descriptionItem">Plataforma de contenido audiovisual argentino.</p>
              </div>
              <div className="linksItemContainer">
                <a href=""><img src={githubIcon} alt="" className="iconGithub" /></a>
              </div>
            </div>
            <div className="proyectoItem">
              <img src={cinearCaptura} alt="" className="proyectoImg" />
              <div className="tituloItemContainer">
                <p className="nroItem">01</p>
                <p className="tituloItem">CINEAR</p>
              </div>
              <div className="descriptionItemContainer">
                <p className="descriptionItem">Plataforma de contenido audiovisual argentino.</p>
              </div>
              <div className="linksItemContainer">
                <a href=""><img src={githubIcon} alt="" className="iconGithub" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sect2