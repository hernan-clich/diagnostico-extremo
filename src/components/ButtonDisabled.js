import styled from 'styled-components';

import { Button } from './Button';

export const ButtonDisabled = styled(Button)`
    cursor: not-allowed;
    background-color: rgb(180, 180, 180);
    color: rgb(98, 98, 98);
    transition: background-color 100ms linear;
    
    @media (hover: hover) {
        &:hover {
            background-color: rgb(180, 180, 180);
            color: rgb(98, 98, 98);
            box-shadow: 0px 0px 0px 0px;
        }
    }
`;