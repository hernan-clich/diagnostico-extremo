import styled from 'styled-components';

import { primary, secondary, outerSpacing } from './Variables';

export const StyledStep = styled.div`
    #steps {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        color: ${secondary(0.8)};
        padding: 1em 0;

        .steps-img {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;

            div:nth-child(1) {
                background-color: ${primary(1)};
                height: 50px;
                width: 50px;
                clip-path: circle(50% at 50% 50%);
                margin-right: 1.5em;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    font-size: 1.5rem;
                    font-weight: 600;
                }
            }

            svg {
                margin-right: 1.5em;
            }

        }

        .steps-text {
            max-width: 90%;
            margin: 1.5em 0 0 ${outerSpacing()};

            h3 {
                padding: 0 0 0.5em;
            }

            p {
                padding: 0.5em 0;
                font-weight: 400;
            }
        }
    }

    @media (min-width: 992px){
        #steps {
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            .steps-text {
                max-width: 70%;
                margin: 0;
                padding: 0.5em 0;
            }
        }    
    }

    @media (min-width: 1361px){
        #steps {
            padding: 3vh 0;

            .steps-img {
                padding: 0;
                height: 6vw;
                margin-right: 1.5vw;
                width: 20vw;
                max-width: 12.5vw;

                div:nth-child(1) {
                    min-width: 3.2vw;
                    min-height: 7vh;
                    margin-right: 15px;
                    span {
                        font-size: 1.8vw;
                    }
                }

                svg {
                    height: 100%;
                    width: 80%;
                    overflow: visible;
                }
            }

            .steps-text {
                h3 {
                    font-size: 1.4vw;
                }

                p {
                    font-size: 1.2vw;
                    padding-top: 0;
                }
            }
        }
    }
`