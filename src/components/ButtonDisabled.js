import styled from 'styled-components';

import { secondary, plainWhite} from '../styles/Variables'
import { Button } from './Button';

export const ButtonDisabled = styled(Button)`
    cursor: not-allowed;
    background-color: ${plainWhite(0.5)};
    color: ${secondary(0.5)};
    transition: background-color 100ms linear;
    
    @media (hover: hover) {
        &:hover {
            background-color: ${plainWhite(0.47)};
            color: ${secondary(0.53)};
            box-shadow: 0px 0px 0px 0px;
        }
    }
`;