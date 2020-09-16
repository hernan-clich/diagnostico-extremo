import styled from 'styled-components';

import { primary, secondary, plainWhite, outerSpacing } from './Variables';
import { screen } from './Media';

export const StyledAbout = styled.section`
    width: 100vw;
    min-height: 85vh;
    height: auto;
    background-color: ${secondary()};
    position: relative;

    &::after {
        position: absolute;
        content: "";
        width: 100px;
        height: 10px;
        background-color: ${primary()};
        left: 50%;
        bottom: 8.5%;
        border-radius: 5px;
        transform: translateX(-50%);
    }

    h2 {
        text-align: center;
        padding: 1.5em 0;
        color: ${plainWhite(0.8)};
        font-size: 2rem;
    }

    #about-wrapper {
        width: 100%;
        min-height: 250px;
        height: fit-content;
        display: flex;
        flex-flow: row wrap;

        #about-img {
            background-color: ${secondary()};
            width: 100%;
            min-height: 300px;
            position: relative;
            &::after{
                position: absolute;
                content: "";
                top: 5%;
                left: 50%;
                background: url(./assets/melli.png) 55% 35% no-repeat;
                background-size: 150%;
                border-radius: 5px;
                min-width: 320px;
                width: 50%;
                min-height: 225px;
                height: 60%;
                transform: translateX(-50%);
            }
        }

        #about-text {
            background-color: ${secondary()};
            min-width: 496px;
            width: 100%;
            min-height: 500px;

            p {
                font-size: 1rem;
                margin: 5% ${outerSpacing()} 1em;
                text-align: justify;
                line-height: 197.69%;
                font-weight: 500;
                color: ${plainWhite(0.8)};
            }
            
        }

        ${screen.medium`
            #about-text {
                min-height: 350px;
            }
        `}

        ${screen.large`
            #about-img {
                width: 50%;
            }
            #about-text {
                width: 50%;
                min-height: 300px;
            }
        `}
    }
`;