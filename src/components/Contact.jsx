import React from 'react';

import { StyledContact } from '../styles/Contact';
import { Button } from './Button.js';

export const Contact = () => {
    return (
        <StyledContact>
            <div id="contact-wrapper">
                <div>
                    <h3>Consultenos</h3>
                    <p>Realice su consulta completando el siguiente formulario.<br/>Rellene los campos lo más detalladamente posible para poder brindarle una mejor atención.</p>
                </div>
                <form action="" method="post" autoComplete="off">
                    <input type="text" name="name" id="name" placeholder="Nombre"/>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="tel" name="tel" id="tel" placeholder="Telefono"/>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>
                    <Button secondary>Enviar</Button>
                </form>
            </div>
        </StyledContact>
    )
}
