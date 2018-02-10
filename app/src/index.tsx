import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { ApolloProvider } from 'react-apollo'
import GraphQlClient from 'remoting/Client'

ReactDOM.render(
  <ApolloProvider client={GraphQlClient}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root') as HTMLElement
)
