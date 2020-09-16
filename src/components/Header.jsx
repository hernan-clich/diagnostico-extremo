import React, { useState, useEffect } from 'react';

import { StyledHeader } from '../styles/Header';
import Sidebar from './Sidebar';
import { darkLogo } from '../svg/darkLogo.jsx';

export const Header = (props, ref) => {
    const { heroRef, stepsRef, servicesRef, pricingRef, testimonialsRef } = ref;
    const [width, setWidth] = useState(window.innerWidth);
    const [navOpen, setNavOpen] = useState(true);
    const [sidebarClass, setSidebarClass] = useState("");

    useEffect(() => {
        const setWidthCallback = () => setWidth(window.innerWidth);

        window.addEventListener("resize", setWidthCallback);
        return () => {
            window.removeEventListener("resize", setWidthCallback);
        }
    }, [setWidth]);

    const handleHeroClick = () => {
        window.scrollTo({top: heroRef.current.offsetTop - 90, behavior: 'smooth'});
        setSidebarClass("");
        setNavOpen(true);
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

    const handleBurgerClick = () => {
        setNavOpen(!navOpen);
        if(navOpen) setTimeout(() => setSidebarClass("side-open"), 10);
        if(!navOpen) setTimeout(() => setSidebarClass("side-close"), 10);
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
                {width > 992 ?
                <div id="nav-links">
                    <button onClick={ handleStepsClick }>Como funciona</button>
                    <button onClick={ handleServicesClick }>Que observamos</button>
                    <button onClick={ handlePricingClick }>Tarifas</button>
                    <button onClick={ handleTestimonialClick }>Testimonios</button>
                </div> :
                <div id="burger" onClick={handleBurgerClick}>
                    <span className={navOpen ? "nav-closed" : "nav-open"}></span>
                </div>
                }
            </div>
                <Sidebar 
                    setNavOpen={setNavOpen}
                    stepsFunc={handleStepsClick}
                    servFunc={handleServicesClick}
                    pricFunc={handlePricingClick}
                    testiFunc={handleTestimonialClick}
                    sidebarClass={sidebarClass}
                    setSidebarClass={setSidebarClass}
                />
        </StyledHeader>
    )
}

export default React.forwardRef(Header);