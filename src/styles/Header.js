import styled from 'styled-components';

import {
    primary,
    secondary,
    plainWhite,
    outerSpacing
} from './Variables';

export const StyledHeader = styled.header `
    max-width: 100vw;
    height: 15vh;
    top: 0;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: ${secondary(0.55)};
    z-index: 5;
    transition: all 900ms ease-in-out;

    #nav-primary {
        height: 70%;
        /* background-color: ${secondary(0.75)}; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5em;
        position: relative;
        transition: background-color 500ms ease-in-out;

        svg {
            transform: scale(0.85);
            cursor: pointer;
        }

        #nav-links {
            padding: 0.2em 0;

            button {
                color: ${primary()};
                cursor: pointer;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 700;
                margin: 0 1.5em;
                padding: 0.2em 0;
                background-color: ${primary(0)};
                border: none;
                font-family: 'Ubuntu', sans-serif;
                font-size: 0.9rem;
                position: relative;
                transition: all 100ms ease-in-out;

                &::after {
                    position: absolute;
                    content: "";
                    height: 0px;
                    width: 50%;
                    bottom: -10%;
                    left: 25%;
                    right: 25%;
                    background-color: ${primary(0)};
                    transition: all 200ms ease-in-out;
                }

                &:focus {
                    outline: none;
                }

                @media (hover: hover) {
                    &:hover {
                        color: ${plainWhite()};

                        &::after {
                            background-color: ${plainWhite()};
                            height: 2px;
                            width: 100%;
                            left: 0%;
                            right: 0%;
                            bottom: -20%;
                        }
                    }
                }
            }
        }

        #burger {
            width: 45px;
            height: 45px;
            background-color: ${secondary(0.3)};
            display: flex;
            justify-content: center;
            cursor: pointer;

            .nav-closed, .nav-open {
                align-self: center;
                display: block;
                width: 80%;
                height: 5px;
                position: relative;
                transition: background-color 150ms ease-in-out;
                
                &::before {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 5px;
                    top: -11px;
                    background-color: ${primary()};
                    transition: transform 150ms ease-in-out;
                }

                &::after {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 5px;
                    top: 11px;
                    background-color: ${primary()};
                    transition: transform 150ms ease-in-out;
                }
            }

            .nav-closed {
                background-color: ${primary()};

                &::before {
                    transform: translateY(0px) rotate(0deg);
                }

                &::after {
                    transform: translateY(0px) rotate(0deg);
                }
            }

            .nav-open {
                background-color: ${secondary(0)};

                &::before {
                    transform: translateY(11px) rotate(45deg);
                }

                &::after {
                    transform: translateY(-11px) rotate(-45deg);
                }
            }
        }
    }

    #nav-secondary {
        width: 100vw;
        height: 30%;
        background-color: rgba(128, 128, 128, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;

        div {
            text-transform: uppercase;
            font-weight: 700;
            color: ${plainWhite()};
        }

        a {
            color: ${primary()};
            cursor: pointer;
            text-decoration: none;
        }
    }
    
    #fixed-whatsapp { 
        svg {
            position: fixed;
            bottom: 5vh;
            right: 2.5vw;
            display: block;
            max-width: 70px;
            max-height: 70px;
            transform: translateX(250%);
            transition: transform 600ms ease-in;

            circle, path {
                transition: all 300ms ease-in;
            }
        }
    }

    #fixed-whatsapp {
        svg.slide-in {
            transform: translateX(0%);
            @media (hover: hover) {
                &:hover {
                    transform: scale(1.15);
                }

                &:hover > path {
                    fill: ${primary()};
                }

                &:hover > circle {
                    fill: ${secondary()};
                }
            }
        }
    }

    @media (min-width: 576px){
        #nav-primary {
            padding: 0 2.5em;
        }

        #nav-secondary {
            justify-content: flex-end;
            padding-right: ${outerSpacing()};
        }
    }

    @media (min-width: 768px){
        #nav-primary {
            padding: 0 ${outerSpacing()};
        }
    }

    /* For landscape phones */
    @media screen and (orientation:landscape) 
    and (max-device-height: 412px) {
        height: 30vh;
    }

    /* Ipad Pro */
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 8vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 10vh;
    }
`;