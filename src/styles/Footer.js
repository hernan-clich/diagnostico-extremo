import styled from 'styled-components';

import { primary, secondary, lightText } from './Variables';

export const StyledFooter = styled.footer`
    width: 100vw;
    min-height: 65vh;
    background-color: ${secondary(0.9)};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 2em;
    text-align: center;

    button, p, a {
        text-transform: uppercase;
        text-decoration: none;
        color: ${lightText()};
        font-weight: 600;
        margin: 0.75em 0;
        transition: color 200ms ease-in-out;
        background-color: ${secondary(0)};
        border: none;
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.9rem;
        
    }

    button,a {
        cursor: pointer;
    }

    button:focus {
        outline: none;
    }

    @media (hover: hover) {
        button:hover, a:hover {
            color: ${primary()};
        }
    }

    .footer-icons {

        display: flex;
        flex-flow: row nowrap;
        
        div {
            margin: 1em 0.75em;
        }
        
        svg {
            cursor: pointer;
            transition: all 300ms ease;

            path {
                transition: all 300ms ease;
            }
        }

        @media (hover: hover) {
            svg:hover {
                transform: scale(1.1);

                path {
                    fill: ${primary()};
                }
            } 
        }
    }

    /* For portrait small phones */
    @media screen and (orientation:portrait) 
    and (max-device-width: 361px) {
        min-height: 80vh;
    }
`