import ApolloClient, { InMemoryCache, ApolloLink } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import resolvers from './resolvers'

const GraphQlClient = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  clientState: {
    resolvers,
    defaults: {
      selectedPlatformID: 'NINTENDO_NES'
    }
  },
  uri: 'http://localhost:9797',  
})

export default GraphQlClient
