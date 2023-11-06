import packageJson from '../../package.json'
import { ApolloClient, InMemoryCache } from '@apollo/client'
console.info('Micro Front: ', packageJson.name)
console.info('Versión: ', packageJson.version)

console.log(process.env.SH1_GRAPHQL)

const client = new ApolloClient({
     uri: process.env.SH1_GRAPHQL,
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
