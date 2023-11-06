import { FunctionComponent } from 'react'
import { CustomTextInterface, CustomText } from '../../Styles/text'

const RenderText: FunctionComponent<CustomTextInterface> = ({
	text,
	color,
	size,
	align,
	fontWeight,
	padding,
	$margin,
	onClick,
	$styleString,
	bgColor,
	id
}) => {

	return (
		<CustomText
			id={id}
			color={color}
			size={size}
			align={align}
			$margin={$margin}
			onClick={onClick}
			fontWeight={fontWeight}
			padding={padding}
			$styleString={$styleString}
			bgColor={bgColor}
		>
			{text}
		</CustomText>
	)
}

export default RenderText
