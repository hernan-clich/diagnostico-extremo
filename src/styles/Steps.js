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
            background: url(./assets/steps-car.png) no-repeat;
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
`;