import React, { useState } from 'react'
import { useModal } from '../../hooks/useModal.jsx'
import './certificaciones.css'
import '../nav/dark.css'
import Modal from './Modal.jsx'
import TrustLogo from '../../assets/Trust.png'
import BitwageLogo from '../../assets/bitwage-logo.png'


const Certificaciones = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false)

    return (
        <div className="cert-main-container" id="certificaciones">
            <div className="cert-content-container">
                <div className="cert-titulo-container">
                    <h1>Certificaciones</h1>
                    <p>y otros estudios</p>
                </div>
                <div className="cert-items">
                    <div className="cert-item">
                        <h3>Traductorado en Inglés</h3>
                        <p>Traductorado literario y técnico-científico en inglés.</p>
                        <p className="fechas">mar 2018 - incompleto</p>
                    </div>
                    <div className="cert-item" onClick={openModal}>
                        <h3>Proyecto Dalto</h3>
                        <p>Proyecto educativo de formación en programación durante 6 meses.</p>
                        <p className="fechas">jun - dic 2022</p>
                    </div>
                    <Modal isOpen={isOpenModal} closeModal={closeModal} >
                        <h3>Proyecto Dalto</h3>
                        <div className="modal-text">
                            <p>Fui seleccionada de entre 13.000 personas para participar de este    proyecto.</p>
                            <p>Nos capacitamos en tecnologías front-end y back-end durante 6 meses.</p>
                            <div className="btn-vermas-container">
                                <a href="https://proyectodalto.com/" target="_blank" className="modal-vermas">Ver más</a>
                            </div>
                        </div>
                        <div className="modal-sponsors-container">
                            <p>Este proyecto no hubiese sido posible sin la colaboración de los sponsors</p>
                            <div className="modal-sponsors">
                                <a href="https://arc.dev/" className="modal-sponsor-item" id="arc">arc()</a>
                                <a href="https://www.trust.com/es/gaming" className="modal-sponsor-item"><img src={TrustLogo} alt="" /></a>
                                <a href="https://www.bitwage.com/" className="modal-sponsor-item"><img src={BitwageLogo} alt="" /></a>
                            </div>
                        </div>
                        <p className="fechas">jun - dic 2022</p>
                    </Modal>
                </div>
            </div>
            <div className="resume-container">
                <a href="https://www.dropbox.com/s/ytu3yd3ygh2026e/CV-Bouso%C3%B1o-Eng.pdf?dl=0" target="_blank">Descargar CV</a>
            </div>
        </div>
    )
}

export default Certificaciones