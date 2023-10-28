import { useEffect, useContext, useState, ChangeEvent } from 'react'
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
import { Input } from '../../Styles/textInputs'
import { TextArea } from '../../Styles/textInputs'

const ModalContact = ({ showModal }: any) => {

	const { dispatch }: any = useContext(CONTEXT)
	const [inputStyle, setStyle]: any = useState(MODAL_CONTACT.input1)
	const [inputText, setInputText]: any = useState(null)
	const [messageStyle, setMessage]: any = useState(MODAL_CONTACT.message1)
	const [messageText, setmessageText]: any = useState(null)
	const [showGreen, setGreen]: any = useState(true)
	const [showGreen2, setGreen2]: any = useState(true)
	const { ref, isVisible, setIsVisible } = useOutsideRef(false)

	const rollBack = () => {
		setIsVisible(showModal)
		dispatch({
			type: SHOW_MODAL,
			value: false
		})
	}

	useEffect(() => {
		setGreen(!showGreen)
	}, [inputStyle])

	useEffect(() => {
		setGreen2(!showGreen2)
	}, [messageStyle])

	useEffect(() => {
		showModal && rollBack()
	}, [showModal])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target.id
		if (target === 'input')
			setInputText(e.target.value)
		else
			setmessageText(e.target.value)
	}

	return (
		isVisible ? (
			<ModalContainer>
				<ModalWrapper>
					<CustomBox {...MODAL_CONTACT.mainConainer} ref={ref}>
						<RenderText {...MODAL_CONTACT.titleModal} />
						<CustomBox {...MODAL_CONTACT.greenBar} />

						<CustomBox {...MODAL_CONTACT.inputContainer}>
							<RenderText {...showGreen ? { ...MODAL_CONTACT.inputText } : !inputText ? { ...MODAL_CONTACT.inputText1 } : { styleString: 'color: white;' }} />
							<Input
								{...inputStyle}
								maxlength="255"
								onChange={handleChange}
								width={'30vh'}
								height={'1vh'}
								autoComplete='off'
								onFocusCapture={() => setStyle(MODAL_CONTACT.input2)}
								onBlur={() => setStyle(MODAL_CONTACT.input1)}
								id={'input'}
							/>
						</CustomBox>

						<CustomBox {...MODAL_CONTACT.messageContainer}>
							<RenderText {...showGreen2 ? { ...MODAL_CONTACT.messageText } : !messageText ? { ...MODAL_CONTACT.messageText1 } : { styleString: 'color: white;' }} />
							<TextArea
								{...messageStyle}
								maxlength="255"
								onChange={handleChange}
								width={'30vh'}
								height={'10vh'}
								onFocusCapture={() => setMessage(MODAL_CONTACT.message2)}
								onBlur={() => setMessage(MODAL_CONTACT.message1)}
								id={'textarea'}
							/>
						</CustomBox>

					</CustomBox>
				</ModalWrapper>
			</ModalContainer>
		) : <></>
	)
}

export default ModalContact
