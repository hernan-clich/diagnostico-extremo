import React from 'react';
import ReactDom from 'react-dom';

import { StyledModal } from '../styles/Modal';
import { Button } from './Button.js';

const Modal = ({setIsSubmitted}) => {
    return ReactDom.createPortal(
        <StyledModal>
            <div id="modal-overlay"></div>
            <div id="modal-main">
                <h2>Gracias por su mensaje, nos contactaremos a la brevedad</h2>
                <Button 
                    as="button"
                    onClick={() => setIsSubmitted(false)}
                >Cerrar</Button>
            </div>
        </StyledModal>,
    document.getElementById('contact-portal')
    )
}

export default Modal;
