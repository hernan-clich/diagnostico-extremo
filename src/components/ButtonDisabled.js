import styled from 'styled-components';

import { primary, secondary, plainWhite} from '../styles/Variables'
import { Button } from './Button';

export const ButtonDisabled = styled(Button)`
    cursor: pointer;
    background-color: ${props => props.secondary ?  secondary() : primary()};
    color: ${props => props.secondary ? plainWhite() : secondary()};
    pointer-events: none;

`;