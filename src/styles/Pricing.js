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
            margin: 0.75em;
            font-size: 105%;
        }

        h4:nth-child(3) {
            margin: 0.75em 0.75em 2em;
        }

        a {
            margin: 0 auto 1.5em;
            min-width: 150px;
            width: 50%;
            align-self: flex-end;
        }
    }

    @media (min-width: 576px){
        .pricing-wrapper {

            div {
                margin: 2em;
                min-width: 280px;
            }
        }
    }
`