import styled from 'styled-components';

import { secondary, plainWhite } from './Variables';

export const StyledSteps = styled.section`
    width: 100vw;
    min-height: 85vh;
    background-color: ${plainWhite()};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    #steps-img {
        display: none;
    }

    #steps-process {
        width: 85%;
        height: 100%;

        h2 {
            padding: 1em 0;
            text-align: center;
            color: ${secondary(0.8)};
            font-size: 2rem;
        }

        .steps-wrapper {
            position: relative;
            margin-bottom: 2em;

            &::before {
                position: absolute;
                content: "";
                height: 100%;
                width: 5px;
                top: 0%;
                bottom: 0%;
                left: 23px;
                background-color: ${secondary(0.75)};
                border-radius: 15px;
            }
        }
    }

    @media (min-width: 992px){
        #steps-img {
            display: block;
            background: 15% 50% no-repeat;
            background-size: cover;
            width: 35vw;
            min-height: 85vh;
            height: 100vh;
            clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
        }

        #steps-process {
            width: 65vw;

            h2 {
                margin-right: 5em;
            }

            .steps-wrapper {
                margin-right: 5em;
                &::before {
                    height: 90%;
                    top: 5%;
                    bottom: 5%;
                }
            }
        }
    }

    @media (min-width: 1361px){
        height: 85vh;
        overflow: hidden;
        
        #steps-process {
            margin-top: 0;
            h2 {
                font-size: 2vw;
            }

            .steps-wrapper {

                &::before {
                    height: 100%;
                    width: 0.4vw;
                    left: 1.45vw;
                    top: 0%;
                    bottom: 0%;
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
        min-height: 30vh;
        #steps-img {
            min-height: 45vh;
            height: 35vh;
        }
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1024px) 
    and (min-height: 1366px) 
    and (max-height: 1366px)  
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 40vh;
        #steps-img {
            min-height: 60vh;
            height: 40vh;
        }
    }
`;