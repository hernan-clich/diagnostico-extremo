import styled from 'styled-components';

import { primary, secondary, plainWhite, outerSpacing } from './Variables';

export const StyledHero = styled.section`
    width: 100vw;
    height: 160vh;
    position: relative;

    &::after{
        display: none;
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
            height: 62.5%;
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
                margin: auto;
                width: 100%;
                height: 40vh;
                transform: translateX(0%);
                
                h1 {
                    font-size: 1.9rem;
                    color: ${plainWhite()};
                    line-height: 1.25;
                    margin: 3em 2.5em 0.5em;
                    text-align: center;
                    span {
                        color: ${primary()};
                    }
                }

                p {
                    color: ${plainWhite()};
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.8;
                    margin: 0.5em 2.5em 1em;
                    text-align: center;
                }

                a {
                    width: 100%;
                    vertical-align: text-top;
                    padding: 1em;
                }
            }
        }

        div.hero-img {
            width: 100vw;
            height: 60vh;
            background: 40% 55% no-repeat;
            background-size: cover;
            background-attachment: scroll;
            clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
        }
    }

    @media (min-width: 576px){
        div.hero-text {
            h1 {
                font-size: 2.1rem;
                margin: 3em 2.5em 1.5em;
            }

            p {
                font-size: 1.1rem;
                margin: 0.5em 2.5em 2em;
            }
        }
    }
    
    @media (min-width: 992px){
        height: 100vh;

        &::after{
            display: block;
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
            flex-flow: row nowrap;
            
            div.hero-text-wrapper {
                width: 35%;
                height: 100%;
                div.hero-text {
                    /* margin: 5em; */
                    margin: auto;
                    justify-content: flex-start;
                    align-items: flex-start;
                    transform: translateX(${outerSpacing()});
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
                background: 20% 0% no-repeat;
                background-size: cover;
                background-attachment: scroll;
                clip-path: polygon(45% 0%, 0% 100%, 100% 100%, 100% 0%);
            }
        }
    }

    @media (min-width: 1361px){
        #hero-main div.hero-text-wrapper div.hero-text {
            margin: 0 0 0 10%;

            h1 {
                font-size: 2.5vw;
            }
            p {
                font-size: 1.5vw;
            }
            a {
                font-size: 1vw;
                border-radius: 0.5vw;
                &:hover {
                    box-shadow: inset 0px 0px 0px 0.2vw ${props => props.secondary ? secondary() : primary()};
                }
            }
        }
    }

    /* For landscape phones */
    @media screen and (orientation:landscape) 
    and (max-device-height: 410px) {
        
        #hero-main 
        div.hero-text-wrapper 
        div.hero-text {
            h1 {
                font-size: 1.3rem;
                margin: 35vh 2.5em 0.5em;
            }
            a {
                height: 10vh;
                width: 30%;
                padding-bottom: 2em;
            }
        }
    }

    /* For landscape Galaxy Fold */
    @media screen and (orientation:landscape) 
    and (max-device-height: 281px) {
        
        #hero-main 
        div.hero-text-wrapper 
        div.hero-text {
            h1 {
                font-size: 1.3rem;
                margin: 35vh 2.5em 0.5em;
            }
            a {
                margin: 0 0 1em;
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
        height: 60vh;
        #hero-main 
        div.hero-text-wrapper 
        div.hero-text {
            transform: translate(${outerSpacing()}, 20%);
        }
        #hero-main
        div.hero-img {
            background: 40% 0% no-repeat;
            background-size: cover;
        }
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-width: 1024px) 
    and (min-height: 1366px) 
    and (max-height: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 75vh;
        #hero-main 
        div.hero-text-wrapper 
        div.hero-text {
            transform: translate(${outerSpacing()}, 15%);
        }
    }

`