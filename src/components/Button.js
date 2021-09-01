import styled from 'styled-components';

import { primary, secondary, plainWhite} from '../styles/Variables'

export const Button = styled.div`
    cursor: pointer;
    font-family: 'Ubuntu', sans-serif;
    text-decoration: none;
    margin: 1em 0;
    border-radius: 5px;
    background-color: ${props => props.secondary ?  secondary() : primary()};
    color: ${props => props.secondary ? plainWhite() : secondary()};
    padding: 1em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    max-width: ${props => props.as === "a" ? "50%" : "100%"};
    text-align: center;
    border: none;
    transition: all 100ms ease-in-out;
    
    @media (hover: hover) {
        &:hover {
            background-color: ${props => props.secondary ? primary() : secondary()};
            color: ${props => props.secondary ? secondary() : primary()};
            box-shadow: inset 0px 0px 0px 3px ${props => props.secondary ? secondary() : primary()};
        }
    }
`;