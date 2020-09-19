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
`