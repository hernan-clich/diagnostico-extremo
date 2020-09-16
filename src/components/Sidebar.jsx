import React from 'react';

import { StyledSidebar } from '../styles/Sidebar';

const Sidebar = ({
    stepsFunc, 
    servFunc, 
    pricFunc, 
    testiFunc, 
    setNavOpen, 
    sidebarClass,
    setSidebarClass
}) => {
    
    const handleStepsClick = () => {
        stepsFunc();
        setSidebarClass("");
        setNavOpen(true);
    }

    const handleServClick = () => {
        servFunc();
        setSidebarClass("");
        setNavOpen(true);
    }

    const handlePricClick = () => {
        pricFunc();
        setSidebarClass("");
        setNavOpen(true);
    }

    const handleTestiClick = () => {
        testiFunc();
        setSidebarClass("");
        setNavOpen(true);
    }

    
    return (
        <StyledSidebar className="sidebar-wrapper">
            <div id={sidebarClass} className="sidebar-overlay"></div>
                <div id={sidebarClass} className="sidebar">
                    <div>
                        <ul>
                            <li onClick={handleStepsClick}>Como funciona</li>
                            <li onClick={handleServClick}>Que observamos</li>
                            <li onClick={handlePricClick}>Tarifas</li>
                            <li onClick={handleTestiClick}>Testimonios</li>
                        </ul>
                    </div>
                </div>
        </StyledSidebar>
    )
}

export default Sidebar;