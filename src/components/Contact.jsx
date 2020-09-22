import React, {useState, useRef, useEffect} from 'react';

import { StyledContact } from '../styles/Contact';
import Modal from './Modal';
import { Button } from './Button.js';
import { ButtonDisabled } from './ButtonDisabled.js';

const Contact = () => {
    const [nameState, setNameState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [phoneState, setPhoneState] = useState('');
    const [msgState, setMsgState] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [allFieldsValid, setAllFieldsValid] = useState(false);
    const [disableInput, setDisableInput] = useState(false);
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const msgTextarea = useRef(null);


    //Regex to validate input fields
    const {fullName, email, phone, message} = {
        fullName: /^[a-zA-ZÁÉÍÓÚÑÇáéíóúñç ]{2,40}$/i,
        // eslint-disable-next-line no-useless-escape
        email: /^([a-z\d-_\.]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/,
        phone: /^([0-9 ()+-]){8,20}$/,
        message: /^([a-zA-z\dÁÉÍÓÚÑÇáéíóúñç ,@=';:"#$%€&/()¿?¡!_+*.-]){2,200}$/i
    }
    
    // Side effect to validate all form fields in real time
    useEffect(() => {
        if(fullName.test(nameInput.current.value)
            && email.test(emailInput.current.value)
            && phone.test(phoneInput.current.value)
            && message.test(msgTextarea.current.value)
        ) {
            setAllFieldsValid(true);
        } else {
            setAllFieldsValid(false);
        }
    }, [nameInput,
        emailInput, 
        phoneInput, 
        msgTextarea, 
        fullName, 
        email, 
        phone, 
        message]
    );
    
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

    const handleSubmission = e => {
        if(allFieldsValid){
            setIsSubmitted(true);
            nameInput.current.classList.remove('input-valid');
            emailInput.current.classList.remove('input-valid');
            phoneInput.current.classList.remove('input-valid');
            msgTextarea.current.classList.remove('input-valid');
            return true;
        } else {
            e.preventDefault();
        }
    }

    const handleOnLoad = e => {
        if(isSubmitted) setDisableInput(true);
        setNameState('');
        setEmailState('');
        setPhoneState('');
        setMsgState('');
        e.preventDefault() ;
    }
    
    return (
        <StyledContact>
            <div id="contact-wrapper">
                <div className="contact-text">
                    <h3>Consultanos</h3>
                    <p>Hacenos tu consulta completando el siguiente formulario.<br/>Rellena los campos lo más detalladamente posible para que podamos brindarte la mejor atención.</p>
                </div>
                <iframe 
                    title="hidden iframe" 
                    name="hidden_iframe" 
                    id="hidden_iframe" 
                    style={{display:"none"}} 
                    onLoad={handleOnLoad}
                />
                <form 
                    onSubmit={handleSubmission}
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdAE0mNwwiiVqrYQC_oomtPEfnoyb3DCe7iS0hnDk_TWCQvCg/formResponse" 
                    method="post" 
                    autoComplete="off"
                    target="hidden_iframe" 
                >
                    <div className="input-wrapper">
                        <input 
                            ref={nameInput}
                            type="text" 
                            name="entry.830027678" 
                            id="name"
                            onChange={handleNameChange}
                            value={nameState}
                            disabled={disableInput ? 'disabled' : ''}
                            required
                        />
                        <label htmlFor="name">Nombre</label>
                        <p>Por favor, escribir un nombre válido</p>
                    </div>
                    <div className="input-wrapper">
                        <input 
                            ref={emailInput}
                            type="email"
                            name="entry.238296227"
                            id="email"
                            onChange={handleEmailChange}
                            value={emailState}
                            disabled={disableInput ? 'disabled' : ''}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <p>Por favor, escribir un email válido</p>
                    </div>
                    <div className="input-wrapper">
                        <input 
                            ref={phoneInput}
                            type="tel"
                            name="entry.1767352930" 
                            id="tel"
                            onChange={handlePhoneChange}
                            value={phoneState}
                            disabled={disableInput ? 'disabled' : ''}
                            required
                        />
                        <label htmlFor="tel">Teléfono</label>
                        <p>Por favor, escribir un teléfono válido</p>
                    </div>
                    <div className="input-wrapper">
                        <textarea 
                            ref={msgTextarea}
                            name="entry.260559398" 
                            id="message" 
                            cols="30" 
                            rows="5"
                            onChange={handleMsgChange}
                            value={msgState}
                            disabled={disableInput ? 'disabled' : ''}
                            required
                        ></textarea>
                        <label htmlFor="message">Mensaje</label>
                        <p>Por favor, escribir un mensaje</p>
                    </div>
                    { !allFieldsValid ?
                        <ButtonDisabled as="button" disabled>Enviar</ButtonDisabled> :
                        <Button as="button" type="submit" secondary>Enviar</Button>
                    }
                </form>
            </div>
            {isSubmitted && <Modal
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
            />}
        </StyledContact>
    )
}

export default Contact;