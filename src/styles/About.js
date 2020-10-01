import styled from 'styled-components';

import { primary, secondary, plainWhite, outerSpacing } from './Variables';

export const StyledAbout = styled.section`
    width: 100vw;
    min-height: 90vh;
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
                margin: 0;
                position: absolute;
                content: "";
                top: 50%;
                left: 50%;
                background: 55% 35% no-repeat;
                background-size: 100%;
                border-radius: 5px;
                min-width: 220px;
                width: 80%;
                min-height: 200px;
                height: 60%;
                transform: translate(-50%, -50%);
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
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-size: 1rem;
                margin: 0 3em 8em;
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
            #about-wrapper .about-revealed#about-img {
                &::after {
                    max-height: 160px;
                    min-height: 140px;
                    height: 0%;
                }
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
                    margin: 1em ${outerSpacing()};
                    text-align: left;
                }
            }
        }
    }

    @media (min-width: 1361px){
        &::after {
            width: 7vw;
            height: 1vh;
            border-radius: 1vw;
        }
        
        h2 {
            font-size: 2vw;
        }
        #about-wrapper {
            height: 50vh;

            #about-text {

                p {
                    font-size: 1.2vw;
                    margin: 0 ${outerSpacing()};
                }
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
        min-height: 45vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1024px) 
    and (min-height: 1366px) 
    and (max-height: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 60vh;
    }
`;