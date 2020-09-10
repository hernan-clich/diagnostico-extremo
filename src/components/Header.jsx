import React from 'react';

import { StyledHeader } from '../styles/Header';
import { darkLogo } from '../svg/darkLogo.jsx';

export const Header = (props, ref) => {
    const { heroRef, stepsRef, servicesRef, pricingRef, testimonialsRef } = ref;

    const handleHeroClick = () => {
        window.scrollTo({top: heroRef.current.offsetTop - 90, behavior: 'smooth'});
    }
    
    const handleStepsClick = () => {
        window.scrollTo({top: stepsRef.current.offsetTop - 90, behavior: 'smooth'});
    }

    const handleServicesClick = () => {
        window.scrollTo({top: servicesRef.current.offsetTop - 90, behavior: 'smooth'});
    }

    const handlePricingClick = () => {
        window.scrollTo({top: pricingRef.current.offsetTop - 90, behavior: 'smooth'});
    }

    const handleTestimonialClick = () => {
        window.scrollTo({top: testimonialsRef.current.offsetTop - 90, behavior: 'smooth'});
    }
    

    return (
        <StyledHeader>
            <div id="nav-secondary">
                <div>Consultas: <a href="https://wa.me/5491138191735" rel="noopener noreferrer" target="_blank">11-3819-1735</a> / <a href="https://wa.me/5491166681006" rel="noopener noreferrer"target="_blank">11-6668-1006</a></div>
            </div>
            <div id="nav-primary">
                <div onClick={ handleHeroClick }>
                    {darkLogo()}
                </div>
                <div id="nav-links">
                    <button onClick={ handleStepsClick }>Como funciona</button>
                    <button onClick={ handleServicesClick }>Que observamos</button>
                    <button onClick={ handlePricingClick }>Tarifas</button>
                    <button onClick={ handleTestimonialClick }>Testimonios</button>
                </div>
            </div>
        </StyledHeader>
    )
}

export default React.forwardRef(Header);