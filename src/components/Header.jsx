import React, { useState, useEffect, useRef } from 'react';

import { StyledHeader } from '../styles/Header';
import Sidebar from './Sidebar';
import { darkLogo } from '../svg/darkLogo.jsx';
import { secondary } from '../styles/Variables';

export const Header = ({setBodyOverflowY}, ref) => {
    // Destructure all external refs
    const { heroRef, stepsRef, servicesRef, pricingRef, testimonialsRef } = ref;
    // All state variables
    const [width, setWidth] = useState(window.innerWidth);
    const [navOpen, setNavOpen] = useState(true);
    const [sidebarClass, setSidebarClass] = useState("");
    const [navColor, setNavColor] = useState(0.65);
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    // All internal refs from component
    const headerRef = useRef(null);
    const stepsLink = useRef(null);
    const servLink = useRef(null);
    const pricLink = useRef(null);
    const testiLink = useRef(null);
    const fixedWaRef = useRef(null);

    // Event listener to continuously capture the vw

    useEffect(() => {
        const setWidthCallback = () => setWidth(window.innerWidth);
        
        window.addEventListener("resize", setWidthCallback);
        return () => {
            window.removeEventListener("resize", setWidthCallback);
        }
    }, [setWidth, heroRef]);

    // Event listener to hide navbar when scrolling down

    useEffect(() => {
        const hideNavbarOnScroll = () => {
            let currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos) headerRef.current.style.top = "0";
            else headerRef.current.style.top = `-30vh`;
            
            setPrevScrollpos(currentScrollPos);
        }
        window.addEventListener('scroll', hideNavbarOnScroll);
        
        return () => {
            window.removeEventListener('scroll', hideNavbarOnScroll);
        }
    }, [prevScrollpos, headerRef]);

    // Intersection Observer to change navbar color

    useEffect(() => {
        const heroRefCurr = heroRef.current;
        
        const heroOptions = {
            root: null,
            threshold: 0.13,
            rootMargin: '0px'
        };

        const heroObserver = new IntersectionObserver(entries =>{
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    setNavColor(1);
                    fixedWaRef.current.classList.add("slide-in");
                } else {
                    setNavColor(0);
                    fixedWaRef.current.classList.remove("slide-in");
                }
            });
        }, heroOptions);

        heroObserver.observe(heroRefCurr);

        return () => {
            heroObserver.unobserve(heroRefCurr);
        }
    }, [heroRef]);

    // Event listener to add and remove class to Whatsapp icon

    useEffect(() => {
        const scrollFunction = () => {
           if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                fixedWaRef.current.classList.add('slide-in');
           } else {
                fixedWaRef.current.classList.remove('slide-in');
           }
        }
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        }
    }, [fixedWaRef]);

    // Click helper functions

    const handleHeroClick = () => {
        window.scrollTo({top: heroRef.current.offsetTop - 90, behavior: 'smooth'});
        setSidebarClass("");
        setNavOpen(true);
        setBodyOverflowY("visible");
    }
    
    const handleStepsClick = () => {
        window.scrollTo({top: stepsRef.current.offsetTop - 90, behavior: 'smooth'});
        setBodyOverflowY("visible");
    }

    const handleServicesClick = () => {
        window.scrollTo({top: servicesRef.current.offsetTop - 90, behavior: 'smooth'});
        setBodyOverflowY("visible");
    }

    const handlePricingClick = () => {
        window.scrollTo({top: pricingRef.current.offsetTop - 90, behavior: 'smooth'});
        setBodyOverflowY("visible");
    }

    const handleTestimonialClick = () => {
        window.scrollTo({top: testimonialsRef.current.offsetTop - 90, behavior: 'smooth'});
        setBodyOverflowY("visible");
    }

    const handleBurgerClick = () => {
        setNavOpen(!navOpen);
        if(navOpen) {
            setTimeout(() => setSidebarClass("side-open"), 10);
            setBodyOverflowY("hidden");
            fixedWaRef.current.classList.remove('slide-in');
        }
        if(!navOpen) {
            setTimeout(() => setSidebarClass("side-close"), 10);
            setBodyOverflowY("visible");
            fixedWaRef.current.classList.add('slide-in');
        }
    }

    return (
        <StyledHeader ref={headerRef}>
            <div id="nav-secondary">
                {width >= 400 ?
                <div>Consultas: <a href="https://wa.me/5491138191735" rel="external noopener noreferrer" target="_blank">11-3819-1735</a> / <a href="https://wa.me/5491166681006" rel="noopener noreferrer"target="_blank">11-6668-1006</a></div> : 
                <div><a href="https://wa.me/5491138191735" rel="external noopener noreferrer" target="_blank">11-3819-1735</a> / <a href="https://wa.me/5491166681006" rel="noopener noreferrer"target="_blank">11-6668-1006</a></div>
                }
            </div>
            <div id="nav-primary" style={{backgroundColor:secondary(navColor)}}>
                <div onClick={ handleHeroClick }>
                    {darkLogo()}
                </div>
                {width > 992 ?
                <div id="nav-links">
                    <button ref={stepsLink} onClick={ handleStepsClick }>Como funciona</button>
                    <button ref={servLink} onClick={ handleServicesClick }>Que observamos</button>
                    <button ref={pricLink} onClick={ handlePricingClick }>Tarifas</button>
                    <button ref={testiLink} onClick={ handleTestimonialClick }>Testimonios</button>
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
            <a id="fixed-whatsapp" href="https://wa.me/5491138191735" rel="external noopener noreferrer" target="_blank">
                <svg ref={fixedWaRef} width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50.0001" r="45.8333" fill="white"/>
                    <path d="M50.1292 25.7167C36.875 25.7167 26.1 36.4917 26.0958 49.7417C26.0917 55.15 27.6792 59.2 30.3417 63.4375L27.9167 72.3042L37.0083 69.9167C41.0833 72.3333 44.9708 73.7833 50.1125 73.7875C63.3542 73.7875 74.1417 63.0083 74.1458 49.7625C74.15 36.4833 63.4167 25.7208 50.1292 25.7167V25.7167ZM64.2625 60.0667C63.6625 61.7542 60.775 63.2917 59.3875 63.5C58.1417 63.6875 56.5667 63.7625 54.8375 63.2125C53.7875 62.8792 52.4417 62.4333 50.7208 61.6917C43.475 58.5625 38.7458 51.2667 38.3833 50.7875C38.0208 50.3042 35.4333 46.8708 35.4333 43.3167C35.4333 39.7625 37.3 38.0125 37.9625 37.2917C38.625 36.5708 39.4042 36.3875 39.8875 36.3875L41.2708 36.4125C41.7125 36.4333 42.3083 36.2458 42.8958 37.6542C43.4958 39.1 44.9417 42.6542 45.1208 43.0167C45.3 43.3792 45.4208 43.8 45.1792 44.2833C44.9375 44.7667 44.8167 45.0667 44.4583 45.4875L43.375 46.7542C43.0125 47.1125 42.6375 47.5042 43.0583 48.2292C43.4792 48.9542 44.9292 51.3167 47.075 53.2333C49.8333 55.6958 52.1625 56.4583 52.8833 56.8167C53.6042 57.175 54.025 57.1167 54.45 56.6375C54.8708 56.1542 56.2542 54.5292 56.7375 53.8042C57.2208 53.0833 57.7 53.2 58.3625 53.4417C59.025 53.6833 62.575 55.4292 63.2958 55.7917C64.0167 56.1542 64.5 56.3333 64.6792 56.6333C64.8667 56.9333 64.8667 58.3792 64.2625 60.0667V60.0667ZM50 0C22.3875 0 0 22.3875 0 50C0 77.6125 22.3875 100 50 100C77.6125 100 100 77.6125 100 50C100 22.3875 77.6125 0 50 0ZM50.1208 78.6667C45.2833 78.6667 40.5167 77.45 36.2958 75.15L20.975 79.1667L25.075 64.1875C22.5458 59.8042 21.2125 54.8292 21.2167 49.7375C21.2208 33.8 34.1875 20.8333 50.1208 20.8333C57.8542 20.8375 65.1125 23.8458 70.5667 29.3083C76.025 34.7708 79.0292 42.0333 79.025 49.7583C79.0208 65.6958 66.0542 78.6667 50.1208 78.6667V78.6667Z" fill="#25D366"/>
                </svg>
            </a>
        </StyledHeader>
    )
}

export default React.forwardRef(Header);