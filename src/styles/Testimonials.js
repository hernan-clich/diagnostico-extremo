import styled from 'styled-components';
import { lightText } from './Variables';

export const StyledTestimonials = styled.section`
    width: 100vw;
    min-height: 85vh;
    height: fit-content;
    position: relative;
    z-index: 2;
    overflow: hidden;

    &::before {
        background: url(./assets/testi_bg.png) no-repeat;
        background-size: cover;
        content: "";
        position: absolute;
        width: 100%;
        min-height: 100%;
        z-index: -1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }    

    h2 {
        padding: 1em 0;
        text-align: center;
        color: ${lightText()};
        font-size: 2rem;
    }

    #testi-wrapper {
        width: 85vw;
        margin: auto;
        padding: 3em 0;
        min-height: 80%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(436px, 1fr));
        grid-gap: 50px;
        justify-content: center;
    }
`