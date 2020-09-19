import styled from 'styled-components';

import { primary, secondary } from './Variables';

export const StyledServices = styled.section`
    width: 100vw;
    min-height: 85vh;
    height: auto;
    background-color: ${secondary()};
    overflow-x: hidden;

    h2 {
        padding: 1em 0;
        text-align: center;
        color: ${primary()};
        font-size: 2rem;
    }

    #serv-wrapper {
        width: 85vw;
        background-color: ${secondary()};
        margin: auto;
        padding: 3em 0;
        min-height: 80%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        grid-gap: 40px;
    }

    @media (min-width: 576px){
        #serv-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        }
    }

    @media (min-width: 768px){
        #serv-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }
    }
`