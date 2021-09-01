import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { StyledTestimonial } from '../styles/SingleTestimonial';
import { testiStar } from '../svg/testiStar'

export const Testimonial = props => {

    const [testiWrapperRef, testiInView] = useInView({
        threshold: 0.15,
        triggerOnce: true
      });

    return (
        <StyledTestimonial ref={testiWrapperRef}>
            <motion.div
                animate={{ opacity: testiInView ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 30}}
            >
                <div>
                    <h4>{props.author}</h4>
                    { testiStar() }
                    { testiStar() }
                    { testiStar() }
                    { testiStar() }
                    { testiStar() }
                </div>
                <p>{props.review}</p>
            </motion.div>
        </StyledTestimonial>
    )
}
