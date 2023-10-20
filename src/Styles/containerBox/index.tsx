import styled from 'styled-components'
import { FunctionComponent } from 'react'

interface ContainerInterface {
	styleString?: any
	bgColor?: string
	border?: string
	children: React.ReactNode
}

export const Container: FunctionComponent<ContainerInterface> = styled('div')<{
	styleString?: any
	bgColor?: string
	border?: string
}>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	position: relative;
	background-color: ${(props) => props.bgColor};
	border: ${(props) => props.border};
	border-radius: 5px;
	${(props) => props.styleString}
`
