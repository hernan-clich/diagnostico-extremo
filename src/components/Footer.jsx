import React from 'react';

import { StyledFooter } from '../styles/Footer';
import { footerWa } from '../svg/footerWa';
import { footerFb } from '../svg/footerFb';
import { footerIg } from '../svg/footerIg';
import { footerEmail } from '../svg/footerEmail';

const Footer = () => {
    return (
        <StyledFooter>
            <a href="/">Cómo funciona</a>
            <a href="/">Qué observamos</a>
            <a href="/">Tarifas</a>
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

export default Footer;