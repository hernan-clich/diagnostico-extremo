import React from 'react';

import { StyledHeader } from '../styles/Header';
import { darkLogo } from '../svg/darkLogo.jsx';

export const Header = () => {
    return (
        <StyledHeader>
            <div id="nav-secondary">
                <div>Consultas: <a href="https://wa.me/5491138191735" rel="noopener noreferrer" target="_blank">11-3819-1735</a> / <a href="https://wa.me/5491166681006" rel="noopener noreferrer"target="_blank">11-6668-1006</a></div>
            </div>
            <div id="nav-primary">
                {darkLogo()}
                <div id="nav-links">
                    <a href="/">Como funciona</a>
                    <a href="/">Que observamos</a>
                    <a href="/">Tarifas</a>
                    <a href="/">Testimonios</a>
                </div>
            </div>
        </StyledHeader>
    )
}
