import styled from 'styled-components';

import { primary, secondary, plainWhite, outerSpacing } from './Variables';

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
            &::after {
                position: absolute;
                content: "";
                top: 5%;
                left: 50%;
                background: 55% 35% no-repeat;
                background-size: 100%;
                border-radius: 5px;
                min-width: 220px;
                width: 80%;
                min-height: 225px;
                height: 60%;
                transform: translateX(-50%);
            }
        }

        #about-img.about-revealed {
            &::after {
                background: url(./assets/melli.png) 55% 35% no-repeat;
                background-size: 100%;
            }
        }

        #about-text {
            background-color: ${secondary()};
            width: 100%;
            min-height: 500px;

            p {
                font-size: 1rem;
                margin: 5% 2em 1em;
                text-align: center;
                line-height: 197.69%;
                font-weight: 500;
                color: ${plainWhite(0.8)};
            }
            
        }

        @media (max-width: 321px){
            #about-text {
                min-height: 580px;
            }
        }

        @media (min-width: 768px){
            #about-text {
                min-height: 350px;
            }
        }

        @media (min-width: 992px){
            #about-img {
                width: 50%;
                &::after {
                    min-width: 430px;
                }
            }
            
            #about-text {
                min-width: 496px;
                width: 50%;
                min-height: 300px;
                p {
                    margin: 5% ${outerSpacing()} 1em;
                    text-align: left;
                }
            }
        }
    }

    /* Ipad Pro */
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 45vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 60vh;
    }
`;