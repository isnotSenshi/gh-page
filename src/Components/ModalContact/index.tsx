import { FunctionComponent, useRef, useState } from 'react'
import {
	Content,
	ModalContainer,
	ModalWrapper
} from '../../Styles/modal'

const ModalContact = ({ showModal, action }: any) => {

	return (
		showModal ? (
			<ModalContainer onClick={action}>
				<ModalWrapper>
					<Content>{<> asdad </>}</Content>
				</ModalWrapper>
			</ModalContainer>
		) : <></>
	)
}

export default ModalContact
