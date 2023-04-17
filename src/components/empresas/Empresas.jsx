import React from 'react'
import './empresas.css'
import dw from '../../assets/donweb.png'
import hcm from '../../assets/hcmb&w.png'

const Empresas = () => {
  return (
    <div className='main-container'>
      <div className="title-container">
        <h1>Empresas con las que colaboré</h1>
      </div>
      <div className='empresas-logos'>
        <img src={dw} alt="donweb" />
        <img src={hcm} alt="donweb" />
      </div>
    </div>
  )
}

export default Empresas