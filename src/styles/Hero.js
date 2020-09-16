import styled from 'styled-components';

import { primary, secondary, plainWhite, outerSpacing } from './Variables';
import { screen } from './Media';

export const StyledHero = styled.section`
    width: 100vw;
    height: 200vh;
    position: relative;

    &::after{
        display: none;
        position: absolute;
        content: "";
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 15vh;
        background-color: ${primary()};
        clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
    }

    #hero-main {
        width: 100%;
        height: 100%;
        background-color: ${secondary()};
        display: flex;
        flex-flow: column nowrap;
        z-index: 1;
        
        div.hero-text-wrapper {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            
            div.hero-text {
                position: absolute;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                margin: ${outerSpacing()};
                width: 100%;
                height: 40vh;
                transform: translateX(0%);
                
                h1 {
                    font-size: 2.1rem;
                    color: ${plainWhite()};
                    line-height: 1.25;
                    margin: 3em 2.5em 1.5em;
                    text-align: center;
                    span {
                        color: ${primary()};
                    }
                }

                p {
                    color: ${plainWhite()};
                    font-size: 1.1rem;
                    font-weight: 500;
                    line-height: 1.8;
                    margin: 0.5em 2.5em 2em;
                    text-align: center;
                }

                a {
                    width: 100%;
                }
            }
        }
        
        div.hero-img {
            width: 100%;
            height: 50%;
            background: url(./assets/hero-car.png) 50% 30%;
            background-size: cover;
            clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
        }
    }

    ${screen.large`
        height: 100vh;

        &::after{
            display: block;
        }

        #hero-main {
            flex-flow: row nowrap;
            
            div.hero-text-wrapper {
                width: 35%;
                height: 100%;
                div.hero-text {
                    margin: 5em;
                    justify-content: flex-start;
                    align-items: flex-start;
                    transform: translateX(5em);
                    h1 {
                        margin: 0 0 0.5em;
                        text-align: left;
                    }
                    p {
                        margin: 0.5em 0;
                        text-align: left;
                    }
                    a {
                        width: 50%;
                    }
                }
            }
            
            div.hero-img {
                width: 65%;
                height: 100%;
                background: url(./assets/hero-car.png) 10% 0%;
                clip-path: polygon(45% 0%, 0% 100%, 100% 100%, 100% 0%);
            }
        }
    `}
`