import styled from 'styled-components';

import { secondary, lightText } from './Variables';

export const StyledFooter = styled.footer`
    width: 100vw;
    min-height: 45vh;
    background-color: ${secondary(0.9)};
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    a {
        text-transform: uppercase;
        text-decoration: none;
        color: ${lightText()};
        font-weight: 600;
        margin: 0.75em 0;
    }

`