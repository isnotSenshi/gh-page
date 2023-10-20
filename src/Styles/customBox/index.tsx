import styled from 'styled-components'

export interface BoxInterface {
     background?: any
     styleString?: string
}

export const CustomBox = styled('div') <BoxInterface>`
     ${(props) => props.styleString};
     background: ${(props) => props.background && props.background};
`