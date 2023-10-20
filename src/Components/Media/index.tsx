import { FunctionComponent } from 'react'
import { MediaInterface, Media } from '../../Styles/media'

const RenderMedia: FunctionComponent<MediaInterface> = ({
	name,
	src,
	width,
	height,
	hoverColor,
	styleString,
	padding,
	margin,
	center,
	bgColor,
	pointer,
	id
}) => {
	return (
		<Media
			padding={padding}
			hoverColor={hoverColor}
			margin={margin}
			src={src}
			alt={name}
			width={width}
			height={height}
			center={center}
			bgColor={bgColor}
			pointer={pointer}
			id={id}
			styleString={styleString}
		/>
	)
}

export default RenderMedia
