import packageJson from '../../package.json'
import { ApolloClient, InMemoryCache } from '@apollo/client'

console.info('Version: ', packageJson.version)

const client = new ApolloClient({
     uri: process.env.REACT_APP_SH1_GRAPHQL,
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
