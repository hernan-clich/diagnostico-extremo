import styled from 'styled-components';

import { primary, secondary } from './Variables';

export const StyledContact = styled.section`
    width: 100vw;
    min-height: 85vh;
    height: auto;
    background-color: ${primary()};
    display: flex;
    justify-content: center;
    align-items: center;

    #contact-wrapper {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 70%;
        margin: 3em 0;
        
        div {
            margin-bottom: 1em;
            padding: 1em 1em 0;
            width: 90%;
            text-align: center;

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
        padding: 1em;

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

    @media (min-width: 576px){
        #contact-wrapper {
            div {
                padding: 1em 5em 0;
            }

            form {
                padding: 1em 4em;
            }
        }
    }

    @media (min-width: 992px){
        #contact-wrapper {
            flex-flow: row wrap;
            width: 80%;

            div {
                width: 50%;
                margin-bottom: 0em;
                text-align: left;
            }

            form {
                width: 50%;
            }
        }
    }
`