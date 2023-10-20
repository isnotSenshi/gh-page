import { FunctionComponent, useRef } from 'react'
import { Divisor } from '../../Styles/divisors'
import {
	Content,
	ModalClose,
	ModalContainer,
	ModalIcon,
	ModalInterface,
	ModalWrapper
} from '../../Styles/modal'
import { CustomText } from '../../Styles/text'
import ICONS from '../../Constants/icons'

const Modal: FunctionComponent<ModalInterface> = ({
	showModal,
	toggleModal,
	title,
	content,
	titleIcon,
	closeIcon,
	disableBackdropClose,
	headerStyles
}) => {
	const modalRef = useRef<HTMLDivElement>(null)
	const closeModal = (e: any) => {
		if (disableBackdropClose) return
		if (modalRef.current === e.target) {
			toggleModal({ content: null })
		}
	}

	return (
		<>
			{showModal && (
				<ModalContainer ref={modalRef} onClick={closeModal} data-testid='modalContainerId'>
					<ModalWrapper>
						{title && (
							<Divisor styleString={headerStyles?.container}>
								{titleIcon && <ModalIcon src={titleIcon} />}
								<CustomText styleString={headerStyles?.title}>{title}</CustomText>
								{!closeIcon ? (
									<></>
								) : (
									<ModalClose
										alt={ICONS.DRILL_ARROW}
										src={ICONS.DRILL_ARROW}
										onClick={() => toggleModal({ content: null })}
									/>
								)}
							</Divisor>
						)}
						<Content>{content}</Content>
					</ModalWrapper>
				</ModalContainer>
			)}
		</>
	)
}

export default Modal
