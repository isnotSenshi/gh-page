import { MouseEvent } from 'react'
import styled, { css, keyframes } from 'styled-components'

export interface MediaInterface {
	src: any
	hoverSrc?: string
	alt?: string
	hide?: boolean
	name?: string
	width?: string
	height?: string
	hoverColor?: string
	padding?: string
	center?: boolean
	$styleString?: string
	$margin?: string
	bgColor?: string
	onClick?: (event: MouseEvent) => void
	$pointer?: boolean
	id?: string
}

export const Media = styled('img') <MediaInterface>`
	${(props) => props.$styleString};
	${(props) => (props.$pointer ? `cursor: pointer;` : `pointer-events: none;`)};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.$margin};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	background-color: ${(props) => props.bgColor};
	${(props) =>
		props.center &&
		`display: block;
        margin-left: auto;
        margin-right: auto;`};
	${(props) =>
		props.hoverColor &&
		` &:hover{
            fill:white; 
            background: ${props.hoverColor};
            cursor: pointer;
        }`}
	user-select: none;
`

const imgAnimation = keyframes`
  0%    {margin-left: 1vh;}
  15%   {margin-left: -1vh;}
  20%   {margin-left: 1vh;}
  25%   {margin-left: -1vh;}
  30%   {margin-left: 1vh;}
  35%   {margin-left: -1vh;}
  40%   {margin-left: 1vh;}
  45%   {margin-left: -1vh;}
  50%   {margin-left: 1vh;}
  55%   {margin-left: -1vh;}
  60%   {margin-left: 0vh;}
  100%   {margin-left: 0vh;}
`

export const ShakingImg = styled("img")(
	({ width }) => css`
	  width: ${width || '60px'};
	  display: block;
	  animation: ${imgAnimation} 5s infinite;
	`
)

export const ShakingText = styled("div")(
	() => css`
		font-size: ${'3vh'};
		transform-origin: bottom right;
		transform: rotate(10deg);
		animation-name: ${imgAnimation};
		animation-duration: 3s;
		animation-iteration-count: infinite;  
		position: relative;
	`
)


