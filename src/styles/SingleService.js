import styled from 'styled-components';

import { primary, secondary } from './Variables';

export const StyledService = styled.div`
    .serv {
        background-color: ${primary()};
        min-height: 250px;
        border-radius: 30px 0px;
        display: flex;
        flex-flow: column nowrap;
        align-content: space-between;
        
        .serv-img {
            background-repeat: no-repeat;
            background-size: cover;
            width: 96%;
            min-height: 125px;
            height: 50%;
            margin: 2%;
            border-radius: 30px 0px 0px 0px;
        }

        .serv-text {
            min-height: 100px;
            height: 50%;
            width: 80%;
            margin: auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-content: center;

            h3, p {
                text-align: center;   
                margin-bottom: 0.75em;
            }

            h3 {
                text-transform: uppercase;
                color: ${secondary(0.9)};
                letter-spacing: 0.06em;
                margin-top: 0.5em;
            }

            p {
                color: ${secondary(0.8)};
                font-weight: 400;
            }
        }
    }

    @media (min-width: 992px){
        .serv {
            min-height: 282px;
        }
    }

    @media (min-width: 1361px){
        .serv {
            min-height: 45vh;
            margin-top: 2vh;

            .serv-img {
                width: 96%;
                min-height: 20vh;
            }

            .serv-text {
                min-height: 15vh;
                height: 50%;

                h3 {
                    font-size: 1.5vw;
                }

                p {
                    font-size: 1.2vw;
                }
            }
        }
    }
`