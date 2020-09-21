import React, {useState, useRef} from 'react';

import { StyledContact } from '../styles/Contact';
// import { Button } from './Button.js';
import { ButtonDisabled } from './ButtonDisabled.js';

const Contact = () => {
    const [nameState, setNameState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [phoneState, setPhoneState] = useState('');
    const [msgState, setMsgState] = useState('');
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const msgTextarea = useRef(null);

    const {fullName, email, phone, message} = {
        fullName: /^[a-zA-ZÁÉÍÓÚÑÇáéíóúñç ]{2,40}$/i,
        // eslint-disable-next-line no-useless-escape
        email: /^([a-z\d-_\.]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/,
        phone: /^([0-9 ()+-]){8,20}$/,
        message: /^([a-zA-z\dÁÉÍÓÚÑÇáéíóúñç ,@=';:"#$%€&/()¿?¡!_+*.-]){2,200}$/i
    }

    // Helper functions

    // If input isn't empty then placeholder floats
    // If input regex is valid then green border, else red border and error msg
    const handleNameChange = e => {
        if(e.target.value.length > 0) {
            nameInput.current.classList.add('input-not-empty');
        } else {
            nameInput.current.classList.remove('input-not-empty');
        }

        if(fullName.test(e.target.value)) {
            nameInput.current.classList.remove('input-invalid');
            nameInput.current.classList.add('input-valid');
        } else {
            nameInput.current.classList.remove('input-valid');
            nameInput.current.classList.add('input-invalid');
        }
        setNameState(e.target.value);
    }

    const handleEmailChange = e => {
        if(e.target.value.length > 0) {
            emailInput.current.classList.add('input-not-empty');
        } else {
            emailInput.current.classList.remove('input-not-empty');
        }

        if(email.test(e.target.value)) {
            emailInput.current.classList.remove('input-invalid');
            emailInput.current.classList.add('input-valid');
        } else {
            emailInput.current.classList.remove('input-valid');
            emailInput.current.classList.add('input-invalid');
        }
        setEmailState(e.target.value);
    }

    const handlePhoneChange = e => {
        if(e.target.value.length > 0) {
            phoneInput.current.classList.add('input-not-empty');
        } else {
            phoneInput.current.classList.remove('input-not-empty');
        }

        if(phone.test(e.target.value)) {
            phoneInput.current.classList.remove('input-invalid');
            phoneInput.current.classList.add('input-valid');
        } else {
            phoneInput.current.classList.remove('input-valid');
            phoneInput.current.classList.add('input-invalid');
        }
        setPhoneState(e.target.value);
    }

    const handleMsgChange = e => {
        if(e.target.value.length > 0) {
            msgTextarea.current.classList.add('input-not-empty');
        } else {
            msgTextarea.current.classList.remove('input-not-empty');
        }

        if(message.test(e.target.value)) {
            msgTextarea.current.classList.remove('input-invalid');
            msgTextarea.current.classList.add('input-valid');
        } else {
            msgTextarea.current.classList.remove('input-valid');
            msgTextarea.current.classList.add('input-invalid');
        }
        setMsgState(e.target.value);
    }
    
    return (
        <StyledContact>
            <div id="contact-wrapper">
                <div className="contact-text">
                    <h3>Consultanos</h3>
                    <p>Hacenos tu consulta completando el siguiente formulario.<br/>Rellena los campos lo más detalladamente posible para que podamos brindarte la mejor atención.</p>
                </div>
                <form action="" method="post" autoComplete="off">
                    <div className="input-wrapper">
                        <input 
                            ref={nameInput}
                            type="text" 
                            name="name" 
                            id="name"
                            onChange={handleNameChange}
                            value={nameState}
                            required
                        />
                        <label htmlFor="name">Nombre</label>
                        <p>Por favor, escribir un nombre válido</p>
                    </div>
                    <div className="input-wrapper">
                        <input 
                            ref={emailInput}
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleEmailChange}
                            value={emailState}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <p>Por favor, escribir un email válido</p>
                    </div>
                    <div className="input-wrapper">
                        <input 
                            ref={phoneInput}
                            type="tel"
                            name="tel" 
                            id="tel"
                            onChange={handlePhoneChange}
                            value={phoneState}
                            required
                        />
                        <label htmlFor="tel">Teléfono</label>
                        <p>Por favor, escribir un teléfono válido</p>
                    </div>
                    <div className="input-wrapper">
                        <textarea 
                            ref={msgTextarea}
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="5"
                            onChange={handleMsgChange}
                            value={msgState}
                            required
                        ></textarea>
                        <label htmlFor="message">Mensaje</label>
                        <p>Por favor, escribir un mensaje</p>
                    </div>
                    <ButtonDisabled as="button">Enviar</ButtonDisabled>
                    {/* <Button secondary>Enviar</Button> */}
                </form>
            </div>
        </StyledContact>
    )
}

export default Contact;