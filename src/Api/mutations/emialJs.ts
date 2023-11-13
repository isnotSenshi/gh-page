import { gql } from '@apollo/client'

export const EmailJsMutation = (
	from_name: string,
	message: string,
	reply_to: string,
) => ({
	mutation: gql`
		mutation EmailJs {
			emailJs(
				from_name: "${from_name}"
				message: "${message}"
				reply_to: "${reply_to}"
			) {
				data
				error
			}
		}
	`
})
