import {
	ADD_INITIAL_VALUE,
	CHANGE_SPHERE_BOX,
	CHANGE_PATH,
	NAVIGATE_TO,
	SET_SELECTED_CARD
} from '../Types'

export const Reducer = (state: any, action: any): any => {
	switch (action.type) {
		case ADD_INITIAL_VALUE:
			return {
				...state,
				...action.value
			}
		case SET_SELECTED_CARD:
			return {
				...state,
				setSelectedCard: action.value
			}
		case CHANGE_SPHERE_BOX:
			return {
				...state,
				greenBox: action.value
			}
		case NAVIGATE_TO:
			return {
				...state,
				navigateTo: action.value
			}
		case CHANGE_PATH:
			return {
				...state,
				pathName: action.value
			}
		default:
			return {
				...state
			}
	}
}
