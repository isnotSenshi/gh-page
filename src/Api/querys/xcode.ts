import { gql } from '@apollo/client'

export const XcodeQuery = (
     code: string,
     message: string,
     password: string,
) => ({
     query: gql`
		query Xcode {
			xcode(
				code: "${code}"
				message: "${message}"
				password: "${password}"
			) {
				data
				error
			}
		}
	`
})
