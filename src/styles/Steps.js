import styled from 'styled-components';

import { secondary, plainWhite } from './Variables';
import { screen } from './Media';

export const StyledSteps = styled.section`
    width: 100vw;
    height: 85vh;
    background-color: ${plainWhite()};
    display: flex;
    flex-flow: row wrap;
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

            &::before {
                position: absolute;
                content: "";
                height: 90%;
                width: 5px;
                top: 5%;
                left: 3.25%;
                background-color: ${secondary(0.8)};
                border-radius: 15px;
            }
        }
    }

    ${screen.large`
        #steps-img {
            display: block;
            background: url(./assets/steps-car.png) no-repeat;
            background-size: cover;
            width: 35%;
            height: 100%;
            clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
        }

        #steps-process {
            width: 65%;

            h2 {
                margin-right: 5em;
            }

            .steps-wrapper {
                margin-right: 5em;
            }
        }
    `}
`;