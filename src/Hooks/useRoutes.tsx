import URLS from '../Constants/urls'
import Homepage from '../Pages/MainPage'

const useRoutes = () => {
	return [
		{
			name: 'HOME',
			path: URLS.home,
			element: <Homepage />
		},
		{
			name: 'HOME',
			path: URLS.portfolio,
			element: <Homepage />
		}
	]
}

export default useRoutes
