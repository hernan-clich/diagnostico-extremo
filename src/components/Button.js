import styled from 'styled-components';

import { primary, secondary, plainWhite} from '../styles/Variables'

export const Button = styled.a`
    cursor: pointer;
    text-decoration: none;
    margin: 1em 0;
    border-radius: 5px;
    background-color: ${props => props.secondary ?  secondary() : primary()};
    color: ${props => props.secondary ? plainWhite() : secondary()};
    padding: 1em;
    text-transform: uppercase;
    font-weight: 700;
    max-width: 50%;
    text-align: center;
    transition: background-color 100ms ease-in-out;
    &:hover{
        background-color: ${props => props.secondary ? secondary(0.75) : primary(0.75)};
    }
`;