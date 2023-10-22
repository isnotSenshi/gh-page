import { MouseEvent } from 'react'
import styled, { css, keyframes } from 'styled-components'

export interface MediaInterface {
	src: any
	hoverSrc?: string
	alt?: string
	name?: string
	width?: string
	height?: string
	hoverColor?: string
	padding?: string
	center?: boolean
	styleString?: string
	margin?: string
	bgColor?: string
	onClick?: (event: MouseEvent) => void
	pointer?: boolean
	id?: string
}

export const Media = styled('img') <MediaInterface>`
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	background-color: ${(props) => props.bgColor};
	${(props) =>
		props.center &&
		`display: block;
        margin-left: auto;
        margin-right: auto;`};
	${(props) => props.styleString};
	${(props) =>
		props.hoverColor &&
		` &:hover{
            fill:white; 
            background: ${props.hoverColor};
            cursor: pointer;
            transition: .2s;
        }`}
	user-select: none;

	${(props) => (props.pointer ? `cursor: pointer` : `pointer-events: none;`)};
`

const imgAnimation = keyframes`
  5%    {rotate: 0deg;}
  10%   {rotate: -10deg;}
  15%   {rotate: 0deg;}
  20%   {rotate: -10deg;}
  25%   {rotate: 0deg;}
  30%   {rotate: -10deg;}
  35%   {rotate: 0deg;}
  100%  {rotate: 0deg;}
`;

export const ShakingImg = styled("img")(
	({ width }) => css`
	  width: ${width ? width : '60px'};
	  display: block;
	  margin-left: auto;
	  margin-right: auto;
	  animation: ${imgAnimation} 2s infinite;
	`
);

export const ShakingText = styled("div")(
	({ style  }) => css`
		font-size: ${'3vh'};
		transform-origin: bottom right;
		transform: rotate(10deg);
		animation-name: ${imgAnimation};
		animation-duration: 3s;
		animation-iteration-count: infinite;  
		position: relative;
	`
);


