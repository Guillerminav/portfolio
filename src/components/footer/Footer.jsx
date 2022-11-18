import React from 'react'
import './footer.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';




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
                    <div className="infoLinks">
                        <a href=""><FaGithub /></a>
                        <a href=""><FaLinkedin /></a>
                    </div>
                    <div className="mailContainer">
                        <p>guillerminabousono@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer