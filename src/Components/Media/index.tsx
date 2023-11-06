import { FunctionComponent, useState } from 'react'
import { MediaInterface, Media } from '../../Styles/media'

const RenderMedia: FunctionComponent<MediaInterface> = ({
	name,
	src,
	hoverSrc,
	width,
	height,
	hoverColor,
	$styleString,
	padding,
	$margin,
	center,
	bgColor,
	$pointer,
	id
}) => {
	const [handledSrc, setHandledSrc]: any = useState(src)
	return (
		<Media
			padding={padding}
			hoverColor={hoverColor}
			$margin={$margin}
			src={hoverSrc ? handledSrc : src}
			alt={name}
			width={width}
			height={height}
			center={center}
			bgColor={bgColor}
			$pointer={$pointer}
			id={id}
			$styleString={$styleString}
			onMouseOver={() => {
				if (hoverSrc)
					setHandledSrc(hoverSrc)
			}}
			onMouseOut={() => {
				if (hoverSrc)
					setHandledSrc(src)
			}}
		/>
	)
}

export default RenderMedia
