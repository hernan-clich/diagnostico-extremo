import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { StyledService } from '../styles/SingleService.js';

export const Service = props => {
    const bgImgUrl = {
        backgroundImage: props.img
    };

    const [servWrapperRef, servInView] = useInView({
        threshold: 0.15,
        triggerOnce: true
      });
    
    return (
        <StyledService ref={servWrapperRef}>
            <motion.div className="serv"
                animate={{ 
                    opacity: servInView ? 1 : 0
                }}
                transition={{ type: "spring", stiffness: 30}}
            >
                <div 
                    className="serv-img" 
                    style={servInView ? bgImgUrl : {}}
                />
                <div className="serv-text">
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </div>
            </motion.div>
        </StyledService>
    )
}
