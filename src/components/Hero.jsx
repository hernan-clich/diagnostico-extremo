import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { StyledHero } from '../styles/Hero';
import { Button } from './Button.js';

const Hero = (props, ref) => {

    const heroBgImgUrl = {
        backgroundImage: 'url(./assets/hero-car.png)'
    };

    const [heroMainRef, heroInView] = useInView({
        threshold: 0.15,
        triggerOnce: true, 
        rootMargin: "200px 0px"
    });

    return (
        <StyledHero ref={ref}>
            <div id="hero-main" ref={heroMainRef}>
                <motion.div  className="hero-text-wrapper"
                    initial={{ x: '-100vw'}}
                    animate={{ 
                        x: heroInView ? 0 : '-100vw',
                        opacity: heroInView ? 1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 30 }}
                >
                    <div className="hero-text">
                        <h1>Diagnosticamos tu próximo auto usado <span>en el domicilio </span>del vendedor</h1>
                        <p>Chequeamos y escaneamos el auto previo a su compra,  para evitar sorpresas inesperadas.</p>
                        <Button as="a" href="https://wa.me/5491166681006" rel="noopener noreferrer"target="_blank">Llamanos</Button>
                    </div>
                </motion.div>
                <motion.div className="hero-img"
                    style={heroInView ? heroBgImgUrl : {}}
                    initial={{x: "100vw"}}
                    animate={{x: "0"}}
                    transition={{ type: "spring", stiffness: 30 }}
                ></motion.div>
            </div>
        </StyledHero>
    )
}

export default React.forwardRef(Hero);