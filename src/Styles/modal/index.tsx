import styled from 'styled-components'

interface ModalContainer {
	bgColor?: string
	styleString?: string
}

interface ModalWrapperInterface {
	minWidth?: string
}

interface ModalContentInterface {
	styleString?: string
}

export const ModalContainer = styled('div')<ModalContainer>`
	width: 100%;
	height: 100%;
	background-color: #00000099;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	${(props) => props.styleString};
`

export const ModalWrapper = styled('div')<ModalWrapperInterface>`
	min-width: ${(props) => (props.minWidth ? props.minWidth : '40vh')};
	box-sizing: border-box;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	position: relative;
`
export interface ModalInterface {
	showModal?: boolean
	toggleModal?: any
	title?: string
	content?: React.ReactNode
	minWidth?: string
	closeIcon?: boolean
	disableBackdropClose?: boolean
	titleIcon?: string
	contentStyle?: string
	headerStyles?: {
		container?: string
		title?: string
	}
}
