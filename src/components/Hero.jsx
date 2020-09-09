import React from 'react';

import { StyledHero } from '../styles/Hero';
import { Button } from './Button.js';

const Hero = () => {
    return (
        <StyledHero>
            <div id="hero-main">
                <div className="hero-text-wrapper">
                    <div className="hero-text">
                        <h1>Diagnosticamos tu próximo auto usado <span>en el domicilio </span>del vendedor</h1>
                        <p>Chequeamos y escaneamos el auto previo a su compra,  para evitar sorpresas inesperadas.</p>
                        <Button href="/">Llamanos</Button>
                    </div>
                </div>
                <div className="hero-img"/>
            </div>
        </StyledHero>
    )
}

export default Hero;