import styled from 'styled-components';

import { primary, secondary, plainWhite } from './Variables';

export const StyledModal = styled.div`
    #modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${secondary(0.9)};
        z-index: 6;
    }

    #modal-main {
        position: fixed;
        max-width: 90vw;
        max-height: 90vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${secondary()};
        border: 0.5vh solid ${primary()};
        border-radius: 15px;
        padding: 4vw;
        text-align: center;
        z-index: 6;

        h2 {
            color: ${plainWhite()};
            font-size: 1.7rem;
        }

        button {
            width: 70%;
            margin-top: 2.5em;
            font-size: 1rem;
            border-radius: 0.5vw;
        }
    }

    @media (min-width: 992px){
        #modal-main {
            h2 {
                font-size: 2.5vw;
            }

            button {
                font-size: 1.25vw;
            }
        }
    }
    
`