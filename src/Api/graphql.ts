import packageJson from '../../package.json'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client'
import { generateToken } from '../utils/generateToken'

console.info('Version: ', packageJson.version)

const httpLink = new HttpLink({ uri: process.env.REACT_APP_SH1_GRAPHQL });

const REFRESH_TOKEN = () => {
     const date = new Date()
     const formattedDate = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}${date.getHours()}${date.getMinutes()}`
     return generateToken(formattedDate, process.env.REACT_APP_TOKEN_XCODE)
}

const authMiddleware = new ApolloLink((operation, forward) => {
     operation.setContext(({ headers = {} }) => ({
          headers: {
               ...headers,
               token: REFRESH_TOKEN(),
          }
     }))
     return forward(operation)
})

const client = new ApolloClient({
     link: concat(authMiddleware, httpLink),
     cache: new InMemoryCache(),
     defaultOptions: {
          query: {
               fetchPolicy: 'network-only'
          },
          mutate: {
               fetchPolicy: 'network-only'
          }
     }
})

export default client
