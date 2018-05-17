import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import GraphQlClient from 'remoting/Client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={GraphQlClient}>
            <App />
        </ApolloProvider>
    </BrowserRouter>, 
    document.getElementById('root') as HTMLElement)
// registerServiceWorker()
