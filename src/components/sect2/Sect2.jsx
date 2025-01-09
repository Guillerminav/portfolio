import React from 'react'
import './sect2.css'
import { ProyectosData } from './ProyectosData'
import { useInView } from 'react-intersection-observer'
import cinear from '../../assets/cinearCaptura.png'


const Sect2 = () => {
  
  const { ref: myRef, inView: myElementIsVisible } = useInView()

  return (
    <div className={`${"sect2Container"} ${myElementIsVisible ? "animate_box1" : ""}`} ref={myRef} id="proyectos">
        <div className="proy-title-container">
          <h3>Proyectos</h3>
        </div>
        <section class="container">
          <div class="card_outer">
            <div class="card">
              <div class="content">
                <h2 class="title2">Pandas TP</h2>
                <p class="copy">Trabajo práctico para la materia Programacion II</p>
                <div className="btns">
                  <a class="btn" target="_blank" href="https://colab.research.google.com/drive/1JEcnhUDnZ7L5LE8weiAtrvSPX3eoE3lE?usp=sharing">Acceso a Google Colab</a>
                </div>
              </div>
              
            </div>
            <div class="card">
              <div class="content">
                <h2 class="title2">Ono landing</h2>
                <p class="copy">Primer Landing Page de práctica dentro del Proyecto Dalto. La consigna era copiar lo más posible un sitio web.</p>
                <div className="btns">
                  <a class="btn"  href="https://ono-nutricion-personalizada.vercel.app/" target="_blank" >Sitio web</a>
                  <a class="btn" target="_blank" href="https://github.com/Guillerminav/Ono" >GitHub</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <h2 class="title2">Ecommerce</h2>
                <p class="copy">Ecommerce para emprendimiento local de alimentación saludable basada en plantas.</p>
                <div className="btns">
                  <a class="btn" target="_blank" href="https://vigan.onrender.com/">Sitio web</a>
                  <a class="btn" target="_blank" href="https://github.com/Guillerminav/NodeEcommerce" >GitHub</a>
                </div>
              </div>
              
            </div>
            
          </div>
        </section>
    </div>
  )
}

export default Sect2