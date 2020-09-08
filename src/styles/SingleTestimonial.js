import styled from 'styled-components';

export const StyledTestimonial = styled.div`
    min-height: 30vh;
    height: auto;
    width: 100%;
    background-color: rgba(236,236,236,.9);
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-end;

    div {
        margin: 1em 1em 0.5em;
    }

    h4 {
        margin-left: 0.25em;
    }

    svg {
        margin: 0.4em 0.2em 0 0;
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 119.69%;
        letter-spacing: 0.015em;
        margin: 0.25em 1.25em 1em;
    }
`