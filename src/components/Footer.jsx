import React from 'react';

import { StyledFooter } from '../styles/Footer';
import { footerWa } from '../svg/footerWa';
import { footerFb } from '../svg/footerFb';
import { footerIg } from '../svg/footerIg';
import { footerEmail } from '../svg/footerEmail';

const Footer = (props, ref) => {
    const { stepsRef, servicesRef, pricingRef } = ref;

    const handleStepsClick = () => {
        window.scrollTo({top: stepsRef.current.offsetTop - 90, behavior: 'smooth'});
    }

    const handleServicesClick = () => {
        window.scrollTo({top: servicesRef.current.offsetTop - 90, behavior: 'smooth'});
    }

    const handlePricingClick = () => {
        window.scrollTo({top: pricingRef.current.offsetTop - 90, behavior: 'smooth'});
    }

    return (
        <StyledFooter>
            <button onClick={handleStepsClick}>Cómo funciona</button>
            <button onClick={handleServicesClick}>Qué observamos</button>
            <button onClick={handlePricingClick}>Tarifas</button>
            <div className="footer-icons">
                <div><a href="/">{footerWa()}</a></div>
                <div><a href="/">{footerFb()}</a></div>
                <div><a href="/">{footerIg()}</a></div>
                <div><a href="/">{footerEmail()}</a></div>
            </div>
            <a href="https://github.com/hernan-clich" target="_blank" rel="external noreferrer noopener nofollow">Sitio por Hernan Clich</a>
            <p>COPYRIGHT © DIAGNOSTICO EXTREMO</p>
        </StyledFooter>
    )
}

export default React.forwardRef(Footer);