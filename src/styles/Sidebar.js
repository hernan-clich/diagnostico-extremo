import styled from 'styled-components';

import { primary, secondary, lightText } from './Variables';

export const StyledSidebar = styled.div`
    display: flex;
    z-index: -1;
    opacity: 1;
    width: 100vw;
    
    .sidebar-overlay#side-open, .sidebar#side-open {
        transform: translateX(0vw);

        li {
            color: ${primary(1)};
            margin: 1em 0;
            opacity: 1;

            @media (hover: hover) {
                &:hover {
                    color: ${lightText()};
                }
            }
        }
    }

    .sidebar-overlay#side-close, .sidebar#side-close {
        transform: translateX(100vw);

        li {
            color: ${primary(0)};
            margin: 5em 0;
        }
    }

    .sidebar-overlay {
        position: fixed;
        height: 100vh;
        width: 3vw;
        top: 0;
        left: 0;
        background-color: ${primary()};
        transform: translateX(100vw);
        transition: transform 300ms cubic-bezier(.5,.15,.5,.85);
    }

    .sidebar {
        position: fixed;
        height: 100vh;
        width: 97vw;
        top: 0;
        right: 0;
        background-color: ${secondary(0.95)};
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(100vw);
        transition: transform 300ms cubic-bezier(.5,.15,.5,.85);

        div {
            height: 60vh;
            width: 60vw;
            background-color: ${secondary(0)};
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                list-style-type: none;
                margin: 5em 0;
                font-size: 2rem;
                font-weight: 800;
                text-align: center;
                text-transform: uppercase;
                color: ${primary(0)};
                opacity: 0;
                cursor: pointer;
                transition: color 150ms ease, margin 500ms ease-in, opacity 500ms ease 200ms;

                
            }
        }
    }

    @media (min-width: 992px){
        display: none;
    }

    /* For landscape phones */
    @media screen and (orientation:landscape) 
    and (max-device-height: 412px) {
        .sidebar div {
            margin-top: 30vh;
            li {
                font-size: 1.3rem;
            }
        }
    }
`