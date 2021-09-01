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
        
        .contact-text {
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
        justify-content: flex-start;
        width: 90%;
        padding: 1em;

        div.input-wrapper  {
            position: relative;
            width: 100%;
            margin: 0;
            padding: 0;
        }

        label {
            position: absolute;
            top: 1.8em;
            left: 1em;
            font-size: 0.8rem;
            font-weight: 600;
            pointer-events: none;
            color: ${secondary(0.6)};
            transition: all 350ms ease;
        }

        input {
            height: 2.5em;
        }

        input, textarea {
            margin: 1em 0;
            border-radius: 5px;
            border: none;
            font-family: 'Ubuntu', sans-serif;
            padding: 1em;
            font-weight: 600;
            width: 100%;

            &:focus + label {
                top: -0.5em;
                color: ${secondary()};
                font-size: 0.75rem;
            }
        }

        .input-not-empty {
            + label {
                top: -0.5em;
                color: ${secondary()};
                font-size: 0.75rem;
            }
        }

        .input-valid {
            border: 3px solid rgb(0, 156, 0);
            outline: none;
        }

        .input-invalid {
            border: 3px solid rgb(168, 0, 0);
            outline: none;
        }

        p {
            margin: 0;
            color: rgb(190, 0, 0);
            font-weight: bolder;
            font-style: oblique;
            font-size: 0.9rem;
            opacity: 0;
            height: 0;
        }

        .input-invalid ~ p {
            margin-bottom: 1.3em;
            opacity: 1;
            height: auto;
        }

        a {
            max-width: 100%;
        }
    }

    @media (min-width: 576px){
        #contact-wrapper {
            .contact-text {
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

            .contact-text {
                width: 50%;
                margin-bottom: 0em;
                text-align: left;
            }

            form {
                width: 50%;
            }
        }
    }

    @media (min-width: 1361px){
        #contact-wrapper {
            .contact-text {

                h3 {
                    font-size: 1.8vw;
                }

                p {
                    font-size: 1.1vw;
                }
            }
        }

        form {

            label {
                font-size: 0.95vw;
            }

            input, textarea {
                font-size: 1vw;
                border-radius: 1vh;

                &:focus + label {
                    font-size: 0.9vw;
                }
            }

            .input-not-empty {
                + label {
                    font-size: 0.9vw;
                }
            }

            .input-valid {
                border: 0.29vw solid rgb(0, 156, 0);
            }

            .input-invalid {
                border: 0.29vw solid rgb(168, 0, 0);
            }

            p {
                font-size: 1vw;
            }

            button {
                font-size: 1vw;
                border-radius: 0.5vw;
            }
        }
    }

    /* Ipad Pro */
    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1024px) 
    and (min-height: 1366px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 40vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1024px) 
    and (min-height: 1366px) 
    and (max-height: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 45vh;
    }
`