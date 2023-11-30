import { FC } from 'react'
import styled from 'styled-components'

export interface TitleInterface {
	title?: string | any
	color?: string | any
	size?: string
	align?: string
	margin?: string
	fontWeight?: string
	padding?: string
	bgColor?: string
	$styleString?: string
	onMouseOver?: () => void
	onMouseOut?: () => void
	children?: React.ReactNode
	id?: string
	tooltipText?: string
	hover?: boolean
}

export const Title: FC<TitleInterface> = styled('div') <{
	title?: string
	color?: string
	size?: string
	align?: string
	fontWeight?: string
	padding?: string
	margin?: string
	bgColor?: string
	$styleString?: string
	onMouseOver?: () => void
	onMouseOut?: () => void
	hover?: boolean
}>`
	box-sizing: border-box;
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	text-align: ${(props) => props.align};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	background-color: ${(props) => props.bgColor};
	${(props) => props.$styleString};
	${(props) =>
		props.hover &&
		` &:hover{
            color:white; 
        }`};
`
