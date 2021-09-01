import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { StyledStep } from '../styles/SingleStep.js';

export const Step = props => {

    const [stepWrapperRef, stepInView] = useInView({
        threshold: 0.15,
        triggerOnce: true
      });

    return (
        <StyledStep ref={stepWrapperRef}>
            <motion.div id="steps"
                animate={{ 
                    x: stepInView ? 0 : '50vw', 
                    opacity: stepInView ? 1 : 0, 
                }}
                transition={{ type: "spring", stiffness: 30}}
            >
                <div className="steps-img">
                    <div>
                        <span>{props.num}</span>
                    </div>
                    {props.icon}
                </div>
                <div className="steps-text">
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </div>
            </motion.div>
        </StyledStep>
    )
}
