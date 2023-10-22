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
	width: 100vh;
	height: 100vh;
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'rgba(0, 0, 0, 0.5)')};
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
	background: #fff;
	border-radius: 5px;
	position: relative;
`
export const ModalIcon = styled.img`
	margin-right: 10px;
`

export const ModalClose = styled.img`
	position: absolute;
	top: 10vh;
	right: 2vh;
	cursor: pointer;
`

export const Content = styled('div')<ModalContentInterface>`
	padding: 2rem;
	${(props) => props.styleString}
`
export interface ModalInterface {
	showModal: boolean
	toggleModal: any
	title?: string
	content: React.ReactNode
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
