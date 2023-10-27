import { useRef, useEffect } from 'react'
import { MODAL_CONTACT } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import {
	ModalContainer,
	ModalWrapper
} from '../../Styles/modal'
import RenderMedia from '../Media'
import RenderText from '../Text'
import { useOutsideRef } from '../../Hooks/useOutsideRef'

const ModalContact = ({ showModal }: any) => {

	const { ref, isVisible, setIsVisible } = useOutsideRef(false)
	useEffect(() => {
		setIsVisible(true)
	}, [showModal])

	return (
		isVisible ? (
			<ModalContainer>
				<ModalWrapper>
					<CustomBox {...MODAL_CONTACT.mainConainer} ref={ref}>
						<RenderText {...MODAL_CONTACT.titleModal} />
						<CustomBox {...MODAL_CONTACT.greenBar} />
					</CustomBox>
				</ModalWrapper>
			</ModalContainer>
		) : <></>
	)
}

export default ModalContact
