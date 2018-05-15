import * as React from 'react'
import GraphQlClient from 'remoting/Client'
import { ApolloProvider } from 'react-apollo'
import QueryPlatforms, {
  PlatformProps
} from 'remoting/decorators/withPlatforms'
import withPlatforms from 'remoting/decorators/withPlatforms'
import PlatformSelector from 'components/PlatformSelector/PlatformSelector'
import { Platform } from 'support/Snowflake'
import { SelectedPlatformChangedEvent } from 'support/ComponentEvents/SelectedPlatformChangedEvent'
import { withStyles, StyleRules } from '@material-ui/core/styles'
import { StyleProps } from 'support/InjectSheet'

const PlatformViewer = withPlatforms(({ platforms }) => (
  <div>
    Hello
    {Object.values(platforms!).map(({PlatformID, FriendlyName}) => {
       return (<div key={PlatformID}>{FriendlyName}</div>)
    })}
  </div>
))

type PlatformSelectorState = {
  selectedPlatform: Platform
}

type PlatformSelectorProps = {} & PlatformProps & StyleProps

const StatefulPlatformSelectorStyles = {

}

const StatefulPlatformSelector = withStyles(StatefulPlatformSelectorStyles)(withPlatforms(
  // tslint:disable-next-line:no-shadowed-variable
  class StatefulPlatformSelector extends React.Component<PlatformSelectorProps, PlatformSelectorState>  {
  constructor(props: PlatformSelectorProps) {
    super(props)
    this.state = {
      selectedPlatform: Object.values(this.props.platforms)[0]
    }
    this.handleSelectedPlatformChanged = this.handleSelectedPlatformChanged.bind(this)
  }

  handleSelectedPlatformChanged({nextPlatform}: SelectedPlatformChangedEvent) {
    // tslint:disable-next-line:no-console
    console.log(nextPlatform)
    // tslint:disable-next-line:no-console
    console.log('changecalled')
    this.setState({selectedPlatform: nextPlatform})
  }

  render() {
    // tslint:disable-next-line:no-console
    console.log(this.props)
    return (
    <PlatformSelector 
      platforms={this.props.platforms}
      selectedPlatform={this.state.selectedPlatform}
      // tslint:disable-next-line:no-console
      onSelectedPlatformChanged={this.handleSelectedPlatformChanged} 
      gameCount={0}
    />)
  }
}))

const StatedPlatformSelector = withPlatforms(PlatformSelector)

const appStyles: StyleRules = {
  app: {
    display: 'grid',
    height: '100%',
    gridTemplateRows: 'auto 64px'
  },
  platformSelectorContainer: {
    gridArea: 2,
    bottom: 0
  },
  content: {
    gridArea: 1,
  }
}

class App extends React.Component<StyleProps> {
  render() {
    return (
      <ApolloProvider client={GraphQlClient}>
        <div className={this.props.classes.app}>
          <div className={this.props.classes.content}>
            <div>Hello World</div>
          </div>
          <div className={this.props.classes.platformSelectorContainer}>
            <StatefulPlatformSelector/>
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default withStyles(appStyles)(App)
