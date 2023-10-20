import styled from 'styled-components'
import { COLORS } from '../../Constants/colors'

interface HorizontalDivisor {
	marginTop?: string
	marginBottom?: string
}

export const HorizontalDivisor = styled('div') <HorizontalDivisor>`
	border-bottom: 1px solid ${COLORS.GREY_LIGHT};
	margin-top: ${(props) => props.marginTop};
	margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '1rem')};
`
export const Divisor = styled('div') <{
	styleString?: string
}>`
	border-bottom: 1px solid ${COLORS.GREY};
	padding: 1rem;
	display: flex;
	align-items: center;
	${(props) => props.styleString}
`
