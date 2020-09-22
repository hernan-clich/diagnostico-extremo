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
        max-width: 90%;
        max-height: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${secondary()};
        border: 5px solid ${primary()};
        border-radius: 15px;
        padding: 2em;
        text-align: center;
        z-index: 6;

        h2 {
            color: ${plainWhite()};
        }

        button {
            width: 60%;
            margin-top: 2.5em;
        }
    }
    
`