import React from 'react';

import { StyledTestimonial } from '../styles/SingleTestimonial';
import { testiStar } from '../svg/testiStar'

export const Testimonial = props => {
    return (
        <StyledTestimonial>
            <div>
                <h4>{props.author}</h4>
                { testiStar() }
                { testiStar() }
                { testiStar() }
                { testiStar() }
                { testiStar() }
            </div>
            <p>{props.review}</p>
        </StyledTestimonial>
    )
}
