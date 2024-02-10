import { useContext, useEffect, FC } from 'react'
import { CONTEXT } from '../../App/context'
import { useNavigate } from 'react-router-dom'
import { NAVIGATE_TO, CHANGE_SPHERE_BOX } from '../../Core/Types'
import Starfield from 'react-starfield'

interface PageInterface {
	element?: any
}

const CustomRoute: FC<PageInterface> = ({ element }) => {
	const { state, dispatch }: any = useContext(CONTEXT)
	const navigate = useNavigate()
	const path = state?.navigateTo
	const pathname = window.location.pathname

	useEffect(() => {
		dispatch({
			type: CHANGE_SPHERE_BOX,
			value: null
		})
	}, [pathname])

	useEffect(() => {
		if (path) {
			navigate(path)
			dispatch({
				type: NAVIGATE_TO,
				value: null
			})
		}
	}, [path])

	return <div>
		<Starfield
			starCount={999}
			starColor={[255, 255, 255]}
			speedFactor={0.05}
			backgroundColor="black"
		/>{element}
	</div>
}
export default CustomRoute
