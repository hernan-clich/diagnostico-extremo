import styled from 'styled-components';
import { primary, secondary, plainWhite } from './Variables';

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

    a {
        margin: 0 auto 3em;
        max-width: 400px;
        width: 50%;
    }

    .pricing-wrapper {
        margin: 2.5em auto;
        width: 85%;
        min-height: 200px;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        
        div {
            flex: 1 1;
            background-color: ${primary()};
            margin: 2em;
            display: flex;
            flex-flow: column nowrap;
            box-shadow: 10px -10px 0px 0px ${secondary()};
            min-width: 280px;
            min-height: 200px;

            h3 {
                text-align: center;
                margin: 1em 0 0;
                text-transform: uppercase;
                font-weight: bolder;
                font-size: 1.5rem;
            }

            select {
                background-color: ${primary()};
                width: 60%;
                min-height: 50px;
                margin: auto;
                border: 3px black solid;
                font-size: 1.15rem;
                text-transform: uppercase;
                font-weight: 700;
            }

            span {
                font-size: 3.25rem;
                text-align: center;
                margin: auto;
            }
        }
    }
`