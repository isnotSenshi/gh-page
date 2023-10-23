export const GreenBoxText = (number: any) => {
	switch (number) {
		case (10):
			return 'Master'
		case (9):
			return 'Senior Level'
		case (8):
			return 'SSR Level'
		case (7):
			return 'Upper Intermediate'
		case (6):
			return 'Intermediate'
		case (5):
			return 'Mid Level'
		case (4):
			return 'Junior Level'
		case (3):
			return 'Just the basic'
		case (2):
			return 'Still learning'
		case (1):
			return "I'd love to learn it"
	}
}