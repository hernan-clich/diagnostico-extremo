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

    a, p {
        text-transform: uppercase;
        text-decoration: none;
        color: ${lightText()};
        font-weight: 600;
        margin: 0.75em 0;
        transition: color 200ms ease-in-out;
    }

    a:hover {
        color: ${primary()};
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

        svg:hover {
            transform: scale(1.1);

            path {
                fill: ${primary()};
                
            }
        } 

    }

`