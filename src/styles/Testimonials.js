import styled from 'styled-components';
import { lightText, secondary } from './Variables';

export const StyledTestimonials = styled.section`
    width: 100vw;
    min-height: 85vh;
    height: fit-content;
    position: relative;
    z-index: 2;
    overflow: hidden;
    background-color: ${secondary(0.7)};

    #testi-bg { 
        background: no-repeat;
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

    .testi-revealed#testi-bg { 
        background: url(./assets/testi_bg.png) no-repeat;
        background-size: cover;
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
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        grid-gap: 65px;
        justify-content: center;
    }

    @media (min-width: 576px){
        #testi-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        }
    }

    @media (min-width: 768px){
        #testi-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }
    }

    @media (min-width: 992px){
        #testi-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(436px, 1fr));
            grid-gap: 40px;
            margin: auto;
        }
    }

    /* Ipad Pro */
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 55vh;

        #testi-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
    }
`