import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client'
import { generateToken } from '../utils/generateToken'

const httpLink = new HttpLink({ uri: process.env.REACT_APP_SH1_GRAPHQL })


// SE CREA EL TOKEN EN BASE A LA FECHA, SE FORMATEA EN AAMMDDHHMM
// SE CONVIERTE A BASE64 Y LUEGO SE ENCRIPTA CON AES (FECHAFORMATTED + PASSWORD)
// LUEGO SE INJECTA EN EL HEADER COMO TOKEN, ESTE TOKEN SOLO SIRVE POR 1 MINUTO Y SE MANDA 1 POR PETICION
// SIN LA PASSWORD NO SE PUEDE DESENCRIPTAR EL MENSAJE

const REFRESH_TOKEN = () => {
     const date = new Date()
     const formattedDate = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}${date.getMinutes()}`
     console.log("token:", generateToken(formattedDate, process.env.REACT_APP_TOKEN_XCODE))
     console.log("date:", date)
     return generateToken(formattedDate, process.env.REACT_APP_TOKEN_XCODE)
}

const authMiddleware = new ApolloLink((operation, forward) => {
     operation.setContext(({ headers = { 'Content-Type': 'application/json' } }) => ({
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
          watchQuery: {
               fetchPolicy: 'cache-and-network',
               errorPolicy: 'ignore',
          },
          query: {
               fetchPolicy: 'network-only',

          },
          mutate: {
               fetchPolicy: 'network-only'
          }
     }
})

export default client
