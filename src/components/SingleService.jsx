import React from 'react';
import { StyledService } from '../styles/SingleService.js';

export const Service = props => {
    const bgImgUrl = {
        backgroundImage: props.img
    };
    
    return (
        <StyledService>
            <div className="serv">
                <div 
                    className="serv-img" 
                    style={bgImgUrl}
                />
                <div className="serv-text">
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </div>
            </div>
        </StyledService>
    )
}
