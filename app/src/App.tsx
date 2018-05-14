import * as React from 'react'
import './App.css'
import GraphQlClient from 'remoting/Client'
import { ApolloProvider } from 'react-apollo'
import QueryPlatforms, {
  PlatformProps
} from 'remoting/decorators/withPlatforms'
import withPlatforms from 'remoting/decorators/withPlatforms'

const PlatformViewer = withPlatforms(({ platforms }) => (
  <div>
    Hello
    {platforms.map(({PlatformID, FriendlyName}) => {
       return (<div key={PlatformID}>{FriendlyName}</div>)
    })}
  </div>
))

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={GraphQlClient}>
        <div className="App">
          Hey
          <PlatformViewer/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
