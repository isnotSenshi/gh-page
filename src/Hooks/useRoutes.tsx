import URLS from '../Constants/urls'
import RenderApp from '../Pages/RenderApp'

const useRoutes = () => {
	return [
		{
			name: 'HOME',
			path: URLS.home,
			element: <RenderApp />
		},
		{
			name: 'PORTFOLIO',
			path: URLS.portfolio,
			element: <RenderApp />
		}
	]
}

export default useRoutes
