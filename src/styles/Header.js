import styled from 'styled-components';

import { primary, secondary, plainWhite, outerSpacing } from './Variables';

export const StyledHeader = styled.header`
    width: 100vw;
    height: 15vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 5;

    #nav-primary {
        height: 70%;
        background-color: ${secondary(0.75)};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${outerSpacing()};

        svg {
            transform: scale(0.85);
        }

        button {
            color: ${primary()};
            cursor: pointer;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 700;
            margin: 0 1.5em;
            background-color: ${primary(0)};
            border: none;
            font-family: 'Ubuntu', sans-serif;
            font-size: 0.9rem;
        }

        button:focus {
            outline: none;
        }
    }

    #nav-secondary {
        height: 30%;
        background-color: rgba(128, 128, 128, 1);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: ${outerSpacing()};

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
`;