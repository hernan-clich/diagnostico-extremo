import styled from 'styled-components';

import { primary, secondary } from './Variables';
import { screen } from './Media';

export const StyledContact = styled.section`
    width: 100vw;
    min-height: 85vh;
    height: auto;
    background-color: ${primary()};
    display: flex;
    justify-content: center;
    align-content: center;

    #contact-wrapper {
        display: flex;
        align-self: center;
        flex-flow: column wrap;
        width: 80%;
        height: 70%;
        
        div {
            padding: 1em 5em 0;
            width: 90%;

            h3 {
                text-transform: uppercase;
                color: ${secondary(0.8)};
                margin: 0 0 0.75em;
                font-size: 1.4rem;
            }

            p {
                line-height: 1.35;
                font-weight: 400;
                font-size: 1.1rem;
            }
        }
    }

    form {
        display: flex;
        flex-flow: column nowrap;
        width: 90%;
        padding: 1em 4em;

        input {
            height: 2.5em;
        }        

        input, textarea {
            margin: 0.5em 0;
            border-radius: 5px;
            border: none;
            font-family: 'Ubuntu', sans-serif;
            padding: 1em;
            font-weight: 600;
        }

        a {
            max-width: 100%;
        }
    }

    ${screen.large`
        #contact-wrapper {
            flex-flow: row wrap;

            div {
                width: 50%;
            }

            form {
                width: 50%;
            }
        }
    `}
`