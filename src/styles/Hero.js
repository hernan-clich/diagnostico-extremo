import styled from 'styled-components';

import { primary, secondary, plainWhite, outerSpacing } from './Variables';

export const StyledHero = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;

    &::after{
        position: absolute;
        content: "";
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 15vh;
        background-color: ${primary()};
        /* z-index: 4; */
        clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
    }

    #hero-main {
        width: 100%;
        height: 100%;
        background-color: ${secondary()};
        display: flex;
        flex-flow: row wrap;
        z-index: 1;

        /* clip-path: polygon(0% 0%, 121.34% 0%, 78.85% 99.83%, 0% 100%); */
        
        div.hero-text-wrapper {
            width: 35%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            
            div.hero-text {
                position: absolute;
                display: flex;
                flex-flow: column;
                justify-content: flex-start;
                align-items: space-around;
                margin: ${outerSpacing()};
                width: 100%;
                height: 40vh;
                transform: translateX(${outerSpacing()});
                
                h1 {
                    font-size: 2.1rem;
                    color: ${plainWhite()};
                    line-height: 1.25;
                    margin: 0 0 0.5em;
                    span {
                        color: ${primary()};
                    }
                }

                p {
                    color: ${plainWhite()};
                    font-size: 1.1rem;
                    font-weight: 500;
                    line-height: 1.8;
                    margin: 0.5em 0;
                }
            }
        }
        
        div.hero-img {
            width: 65%;
            height: 100%;
            background: url(./assets/hero-car.png) right top;
            clip-path: polygon(45% 0%, 0% 100%, 100% 100%, 100% 0%);
        }
    }


`