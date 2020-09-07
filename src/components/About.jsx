import React from 'react';
import { StyledAbout } from '../styles/About';

export const About = () => {
    return (
        <StyledAbout>
            <h2>Sobre nosotros</h2>
            <div id="about-wrapper">
                <div id="about-img"/>
                <div id="about-text">
                    <p>Somos Omar y Héctor, dos hermanos mellizos, mecánicos de toda la vida que hace 10 años incursionamos en el mundo de la inyección electrónica. 
                    Nosotros mismos vamos a escanear y revisar el auto, brindándote un diagnóstico extremo sobre el estado real del automotor. 
                    Disponemos de los mejores scanners del mercado SPC-MAX certificados por CESVI.</p>
                </div>
            </div>
            
        </StyledAbout>
    )
}
