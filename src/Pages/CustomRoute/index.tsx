import { useContext, useEffect, FC } from 'react'
import { CONTEXT } from '../../App/context'
import { useNavigate } from 'react-router-dom'
import { NAVIGATE_TO, CHANGE_SPHERE_BOX } from '../../Core/Types'

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

	return element
}
export default CustomRoute
