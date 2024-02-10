import { useEffect, useContext, useState } from 'react'
import { MODAL_CONTACT } from '../../Constants/components'
import { CustomBox } from '../../Styles/customBox'
import {
	ModalContainer,
	ModalWrapper
} from '../../Styles/modal'
import RenderText from '../Text'
import { useOutsideRef } from '../../Hooks/useOutsideRef'
import { CONTEXT } from '../../App/context'
import { ADD_INITIAL_VALUE, SHOW_MODAL } from '../../Core/Types'
import { Input, TextArea } from '../../Styles/textInputs'
import { emailJS } from '../../Api/addAccount'

const ModalContact = ({ showModal }: any) => {

	const { state, dispatch }: any = useContext(CONTEXT)
	const { textValue, inputValue, inputNameValue }: any = state

	const [inputNameStyle, setNameStyle]: any = useState(MODAL_CONTACT.input1)
	const [inputNameText, setInputNameText]: any = useState('')

	const [inputStyle, setStyle]: any = useState(MODAL_CONTACT.input1)
	const [inputText, setInputText]: any = useState('')

	const [messageStyle, setMessageStyle]: any = useState(MODAL_CONTACT.message1)
	const [messageText, setmessageText]: any = useState('')

	const [showGreen, setGreen]: any = useState(true)
	const [showGreen2, setGreen2]: any = useState(true)
	const [showGreen3, setGreen3]: any = useState(true)


	const [submitOk, setSubmit]: any = useState(false)

	const { ref, isVisible, setIsVisible } = useOutsideRef(false)

	const aviableSumbit = (textValue !== '' && inputValue !== '' && inputNameValue !== '')

	const handleChange = (e: any, type: any) => {
		if (e.target.id === 'input') {
			if (type === 'input') {
				setInputText(e.target.value)
				dispatch({
					type: ADD_INITIAL_VALUE,
					value: { inputValue: e.target.value }
				})
			}

			if (type === 'inputName') {
				setInputNameText(e.target.value)
				dispatch({
					type: ADD_INITIAL_VALUE,
					value: { inputNameValue: e.target.value }
				})
			}
		} else {
			setmessageText(e.target.value)
			dispatch({
				type: ADD_INITIAL_VALUE,
				value: { textValue: e.target.value }
			})
		}

	}

	const rollBack = () => {
		setIsVisible(showModal)

		setSubmit(false)
		setInputNameText('')
		setInputText('')
		setmessageText('')

		setGreen(false)
		setGreen2(false)
		setGreen3(false)

		dispatch({
			type: SHOW_MODAL,
			value: false
		})

		dispatch({
			type: ADD_INITIAL_VALUE,
			value: {
				textValue: '',
				inputValue: '',
				inputNameValue: ''
			}
		})
	}

	const handleSubmitOk = () => {
		setSubmit(true)
		setTimeout(() => {
			rollBack()
		}, 2500)
	}

	const handleSubmit = () => {
		emailJS(inputNameValue, textValue, inputValue)
		handleSubmitOk()
	}

	useEffect(() => {
		setGreen3(!showGreen3)
	}, [inputNameStyle])

	useEffect(() => {
		setGreen(!showGreen)
	}, [inputStyle])

	useEffect(() => {
		setGreen2(!showGreen2)
	}, [messageStyle])

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

						<CustomBox {...MODAL_CONTACT.inputContainer}>
							<RenderText {...showGreen3 ? { ...MODAL_CONTACT.nameText } : !inputNameText ? { ...MODAL_CONTACT.nameText1 } : { $styleString: 'color: white;' }} />
							<Input
								{...inputNameStyle}
								maxLength={"255"}
								onChange={e => handleChange(e, 'inputName')}
								width={'30vh'}
								height={'1vh'}
								autoComplete='off'
								onFocusCapture={() => setNameStyle(MODAL_CONTACT.input2)}
								onBlur={() => setNameStyle(MODAL_CONTACT.input1)}
								id={'input'}
							/>
						</CustomBox>

						<CustomBox {...MODAL_CONTACT.inputContainer}>
							<RenderText {...showGreen ? { ...MODAL_CONTACT.inputText } : !inputText ? { ...MODAL_CONTACT.inputText1 } : { $styleString: 'color: white;' }} />
							<Input
								{...inputStyle}
								maxLength={"255"}
								onChange={e => handleChange(e, 'input')}
								width={'30vh'}
								height={'1vh'}
								autoComplete='off'
								onFocusCapture={() => setStyle(MODAL_CONTACT.input2)}
								onBlur={() => setStyle(MODAL_CONTACT.input1)}
								id={'input'}
							/>
						</CustomBox>

						<CustomBox {...MODAL_CONTACT.messageContainer}>
							<RenderText {...showGreen2 ? { ...MODAL_CONTACT.messageText } : !messageText ? { ...MODAL_CONTACT.messageText1 } : { $styleString: 'color: white;' }} />
							<TextArea
								{...messageStyle}
								maxLength={"255"}
								onChange={e => handleChange(e, 'text')}
								width={'30vh'}
								height={'10vh'}
								onFocusCapture={() => setMessageStyle(MODAL_CONTACT.message2)}
								onBlur={() => setMessageStyle(MODAL_CONTACT.message1)}
								id={'textarea'}
							/>
						</CustomBox>

						{!submitOk ?
							<CustomBox {...MODAL_CONTACT.contactModal(aviableSumbit)} onClick={aviableSumbit ? handleSubmit : () => null}>
								<RenderText text={aviableSumbit ? 'Submit' : '!'}
									{...MODAL_CONTACT.contactModalText} />
							</CustomBox>
							:

							<CustomBox {...MODAL_CONTACT.sumbitOk}>
								<RenderText text={'✔'} $styleString={'justify-content: center;'} />
							</CustomBox>
						}

					</CustomBox>
				</ModalWrapper>
			</ModalContainer>
		) : <></>
	)
}

export default ModalContact
