import styled from 'styled-components';

import { primary, secondary, plainWhite, lightText } from './Variables';

export const StyledPricing = styled.section`
    width: 100vw;
    min-height: 85vh;
    height: auto;
    background-color: ${plainWhite()};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    h2 {
        padding: 1em 0;
        text-align: center;
        color: ${secondary()};
        font-size: 2rem;
    }

    .pricing-wrapper {
        margin: 1em auto;
        width: 85%;
        min-height: 200px;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        
        div {
            flex: 1 1;
            background-color: ${primary()};
            margin: 1em 0.5em;
            display: flex;
            flex-flow: column nowrap;
            box-shadow: 10px -10px 0px 0px ${secondary()};
            min-width: 220px;
            min-height: 200px;
            border-radius: 2.5px;

            h3 {
                text-align: center;
                margin: 1em 0 0;
                text-transform: uppercase;
                font-weight: bolder;
                font-size: 1.5rem;
            }

            select {
                background-color: ${primary()};
                width: 90%;
                min-height: 50px;
                margin: auto;
                border: 3px black solid;
                font-size: 1.1rem;
                text-transform: uppercase;
                font-weight: 600;
                cursor: pointer;
                border-radius: 2.5px;
                optgroup {
                    font-size: 1rem;
                    font-weight: 600;
                    max-width: 50%;
                    text-transform: capitalize;
                }
            }

            option {
                background-color: ${secondary()};
                color: ${plainWhite()};
            }

            span {
                font-size: 3.5rem;
                text-align: center;
                margin: auto;
            }

            p {
                font-size: 2rem;
                text-align: center;
                margin: auto;
            }
        }
    }

    .pricing-disclaimers {
        width: 80%;
        margin: 0 auto 2.5em;
        background-color: ${secondary(0.9)};
        border-radius: 2.5px;
        display: flex;
        flex-flow: column;

        h4 {
            text-align: center;
            color: ${lightText()};
            margin: 0.5em;
            padding: 0.25em;

        }

        span {
            color: ${primary()};
        }

        h4:nth-child(1) {
            margin-top: 4vh;
            font-size: 105%;
        }

        h4:nth-child(3) {
            margin: 0.75em 0.75em;
        }

        a {
            margin: 3vh auto 1.5em;
            min-width: 150px;
            width: 40%;
            align-self: flex-end;
        }
    }

    @media (min-width: 576px){
        .pricing-wrapper {

            div {
                margin: 2em;
                min-width: 280px;
                select {
                    optgroup {
                        font-size: 25px;
                    }
                }
            }
        }
        
    }

    @media (min-width: 1361px){
        h2 {
            font-size: 2vw;
        }

        .pricing-wrapper {
            min-height: 40vh;

            div {
                box-shadow: 0.5vw -0.5vw 0px 0px ${secondary()};
                margin: 1.5vw;
                border-radius: 0.5vh;

                h3 {
                    font-size: 1.5vw;
                }

                select {
                    width: 90%;
                    min-height: 8vh;
                    border: 0.5vh black solid;
                    font-size: 1.4vw;
                    border-radius: 2.5px;
                    optgroup {
                        font-size: 1.5vw;
                    }
                }

                span {
                    font-size: 4vw;
                }

                p {
                    font-size: 2.5vw;
                }
            }
        }

        .pricing-disclaimers {
            width: 81vw;
            h4 {
                font-size: 1.1vw;
            }

            h4:nth-child(1) {
                font-size: 1.3vw;
                margin-top: 4vh;
            }

            a {
                font-size: 1vw;
                border-radius: 0.5vw;
                width: 40%;
                margin-top: 2vh;
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
        min-height: 70vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1024px) 
    and (min-height: 1366px) 
    and (max-height: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 65vh;
    }
`