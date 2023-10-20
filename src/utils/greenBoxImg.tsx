import ICONS from '../Constants/icons'

export const greenBoxImg = (lang: string) => {
	switch (lang) {
		case 'React':
			return ICONS.REACT
		case 'JavaScript':
			return ICONS.JS
		case 'Python':
			return ICONS.PYTHON
		case 'NodeJS':
			return ICONS.NODEJS
		case 'Analytics':
			return ICONS.ANALYTICS
		case 'SQL':
			return ICONS.SQL
		case 'MongoDB':
			return ICONS.MONGODB
		case 'Dart':
			return ICONS.DART
		case 'GIT':
			return ICONS.GIT
	}
}