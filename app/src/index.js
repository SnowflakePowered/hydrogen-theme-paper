import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import GraphQlClient from 'remoting/Client'

ReactDOM.render(
    <ApolloProvider client={GraphQlClient}>
        <App />
    </ApolloProvider>, 
document.getElementById('root'))
registerServiceWorker()
