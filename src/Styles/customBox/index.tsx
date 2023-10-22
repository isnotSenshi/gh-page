import styled, { css, keyframes } from 'styled-components'


export interface BoxInterface {
     background?: any
     styleString?: string
     fadeAnimation?: boolean
}

const fadeAnimation = keyframes`
    0% {
        opacity: 0;
        top: 30vh;
    }
    100% {
        opacity: 1;
     }
`;

export const CustomBox = styled('div') <BoxInterface>`
     ${(props) => props.styleString};
     position: relative;
     background: ${(props) => props.background && props.background};
     animation: ${(props) => props.fadeAnimation && fadeAnimation} 2s 1;
`