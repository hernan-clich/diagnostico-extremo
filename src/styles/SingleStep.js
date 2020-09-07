import styled from 'styled-components';
import { primary, secondary } from './Variables';

export const StyledStep = styled.div`
    #steps {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        color: ${secondary(0.8)};
        padding: 1em 0;

        div:nth-child(1) {
            background-color: ${primary(1)};
            height: 50px;
            min-width: 30px;
            width: 50px;
            clip-path: circle(50% at 50% 50%);
            text-align: center;
            padding-top: auto;
            vertical-align: middle;
            line-height: 50px;
            font-size: 1.5rem;
            font-weight: 600;
            margin-right: 1.5em;
        }

        svg {
            margin-right: 1.5em;
        }

        .steps-text {
            max-width: 70%;

            h3 {
                padding: 0 0 0.5em;
            }

            p {
                padding: 0.5em 0;
                font-weight: 400;
            }
        }
    }
`