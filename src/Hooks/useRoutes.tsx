import URLS from '../Constants/urls'
import Homepage from '../Pages/Homepage'

const useRoutes = () => {
	return [
		{
			name: 'HOME',
			path: URLS.home,
			element: <Homepage />
		}
	]
}

export default useRoutes
