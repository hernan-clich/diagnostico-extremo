import React from 'react';

import { StyledHero } from '../styles/Hero';
import { Button } from './Button.js';

const Hero = (props, ref) => {
    return (
        <StyledHero ref={ref}>
            <div id="hero-main">
                <div className="hero-text-wrapper">
                    <div className="hero-text">
                        <h1>Diagnosticamos tu próximo auto usado <span>en el domicilio </span>del vendedor</h1>
                        <p>Chequeamos y escaneamos el auto previo a su compra,  para evitar sorpresas inesperadas.</p>
                        <Button as="a" href="https://wa.me/5491166681006" rel="noopener noreferrer"target="_blank">Llamanos</Button>
                    </div>
                </div>
                <div className="hero-img"/>
            </div>
        </StyledHero>
    )
}

export default React.forwardRef(Hero);