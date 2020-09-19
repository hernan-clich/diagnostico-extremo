import React from 'react';

import { StyledStep } from '../styles/SingleStep.js';

export const Step = props => {
    return (
        <StyledStep>
            <div id="steps">
                <div className="steps-img">
                    <div>{props.num}</div>
                    {props.icon}
                </div>
                <div className="steps-text">
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </div>
            </div>
        </StyledStep>
    )
}
