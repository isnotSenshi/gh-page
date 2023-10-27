import { useEffect, useContext } from 'react'
import { MODAL_CONTACT } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import {
	ModalContainer,
	ModalWrapper
} from '../../Styles/modal'
import RenderText from '../Text'
import { useOutsideRef } from '../../Hooks/useOutsideRef'
import { CONTEXT } from '../../App/context'
import { SHOW_MODAL } from '../../Core/Types'

const ModalContact = ({ showModal }: any) => {

	const { dispatch }: any = useContext(CONTEXT)
	const { ref, isVisible, setIsVisible } = useOutsideRef(false)

	const rollBack = () => {
		setIsVisible(showModal)
		dispatch({
			type: SHOW_MODAL,
			value: false
		})
	}
	useEffect(() => {
		showModal && rollBack()
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
