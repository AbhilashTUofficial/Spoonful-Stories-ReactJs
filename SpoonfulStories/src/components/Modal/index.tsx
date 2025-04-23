import React from 'react';
import "./style.css";

const Modal = ({ children }) => {
    return (
        <div className="modalCont">
            {children}
        </div>
    )
}

export default Modal;