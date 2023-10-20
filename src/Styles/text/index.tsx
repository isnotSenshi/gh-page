import { FC } from 'react'
import styled from 'styled-components'

export interface CustomTextInterface {
	id?: string
	text?: string | any
	color?: string
	size?: string
	align?: string
	margin?: string
	fontWeight?: string
	padding?: string
	bgColor?: string
	styleString?: string
	onMouseOver?: () => void
	onMouseOut?: () => void
	children?: React.ReactNode
}

export const CustomText: FC<CustomTextInterface> = styled('div') <{
	text?: string
	color?: string
	size?: string
	align?: string
	fontWeight?: string
	padding?: string
	margin?: string
	bgColor?: string
	styleString?: string
	onMouseOver?: () => void
	onMouseOut?: () => void
}>`
	box-sizing: border-box;
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size} !important;
	text-align: ${(props) => props.align};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	background-color: ${(props) => props.bgColor};
	${(props) => props.styleString};
`
