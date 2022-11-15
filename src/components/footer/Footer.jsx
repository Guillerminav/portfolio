import './footer.css'

import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footerContainer">
                <ul className="menuAgain">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#tecnologias">Tecnologías</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                </ul>
                <div className="contactInfo">
                    github
                    mail
                    linkedin
                </div>
            </div>
        </div>
    )
}

export default Footer