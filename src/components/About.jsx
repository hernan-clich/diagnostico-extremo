import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { StyledAbout } from '../styles/About';

const About = () => {
    const[revealed, setRevealed] = useState("");

    const [aboutWrapperRef, aboutInView] = useInView({
        threshold: 0.15,
        triggerOnce: true
      });

      useEffect(() => {
        if(aboutInView) setRevealed("about-revealed");
      }, [aboutInView]);

    return (
        <StyledAbout>
            <h2>Sobre nosotros</h2>
            <motion.div ref={aboutWrapperRef} id="about-wrapper"
                animate={{ opacity: aboutInView ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 30 }}
            >
                <div id="about-img" className={revealed}></div>
                <div id="about-text">
                    <p>Somos Omar y Héctor, dos hermanos mellizos, mecánicos de toda la vida que hace 10 años incursionamos en el mundo de la inyección electrónica. 
                    Nosotros mismos vamos a escanear y revisar el auto, brindándote un diagnóstico extremo sobre el estado real del automotor. 
                    Disponemos de los mejores scanners del mercado SPC-MAX certificados por CESVI.</p>
                </div>
            </motion.div>
            
        </StyledAbout>
    )
}

export default About;