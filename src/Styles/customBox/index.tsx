import styled, { css, keyframes } from 'styled-components'


export interface BoxInterface {
     background?: any
     $styleString?: string
     $fadeAnimation?: boolean
     barAnimation?: boolean
}

const fadeAnimation = keyframes`
    0% {
        opacity: 0;
        top: -100vh;
    }
    100% {
        opacity: 1;
        top: 15vh;
     }
`;

const barAnimation = keyframes`
     0% {
          width: 0vh;
     }
     100% {
          width: 100;
     }
`;


export const CustomBox = styled('div') <BoxInterface>`
     ${(props) => props.$styleString};
     position: relative;
     background: ${(props) => props.background && props.background};
     animation: ${(props) => props.barAnimation ? barAnimation : props.$fadeAnimation && fadeAnimation} 2s 1;
`