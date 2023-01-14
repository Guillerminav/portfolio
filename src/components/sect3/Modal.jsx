import React from 'react'
import './modal.css'

const Modal = ({ children, isOpen, closeModal }) => {

    const handleModalContainerClick = e => e.stopPropagation()

    return (
        <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button onClick={closeModal} className="modal-close">
                    x
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal