import * as React from 'react'
import GraphQlClient from 'remoting/Client'
import { ApolloProvider, Mutation } from 'react-apollo'
import QueryPlatforms, {
  PlatformProps
} from 'remoting/decorators/withPlatforms'
import withPlatforms from 'remoting/decorators/withPlatforms'
import PlatformSelector from 'components/PlatformSelector/PlatformSelector'
import { Platform } from 'support/Snowflake'
import { SelectedPlatformChangedEvent } from 'support/ComponentEvents/SelectedPlatformChangedEvent'
import { withStyles, StyleRules } from '@material-ui/core/styles'
import { StyleProps } from 'support/InjectSheet'
import { SET_SELECTED_PLATFORM } from 'remoting/resolvers'
import { Switch, Route } from 'react-router'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import Sidebar from 'components/Sidebar/Sidebar'
const PlatformViewer = withPlatforms(({ platforms }) => (
  <div>
    Hello
    {Object.values(platforms!).map(({ PlatformID, FriendlyName }) => {
      return <div key={PlatformID}>{FriendlyName}</div>
    })}
  </div>
))

type PlatformSelectorState = {
  selectedPlatform: Platform
}

type PlatformSelectorProps = {} & PlatformProps & StyleProps

const StatefulPlatformSelectorStyles = {}

const StatefulPlatformSelector = withStyles(StatefulPlatformSelectorStyles)(
  withPlatforms(
    // tslint:disable-next-line:no-shadowed-variable
    class StatefulPlatformSelector extends React.Component<
      PlatformSelectorProps,
      PlatformSelectorState
    > {
      constructor(props: PlatformSelectorProps) {
        super(props)
        this.state = {
          selectedPlatform: Object.values(this.props.platforms)[0]
        }
        this.handleSelectedPlatformChanged = this.handleSelectedPlatformChanged.bind(
          this
        )
      }

      handleSelectedPlatformChanged({
        nextPlatform
      }: SelectedPlatformChangedEvent) {
        // tslint:disable-next-line:no-console
        console.log(nextPlatform)
        // tslint:disable-next-line:no-console
        console.log('changecalled')
        this.setState({ selectedPlatform: nextPlatform })
      }

      render() {
        return (
          <Mutation mutation={SET_SELECTED_PLATFORM}>
            {setSelectedPlatform => (
              <PlatformSelector
                platforms={this.props.platforms}
                selectedPlatform={this.props.selectedPlatform}
                onSelectedPlatformChanged={({ nextPlatform }) => {
                  setSelectedPlatform({
                    variables: { platformID: nextPlatform.PlatformID }
                  })
                  //  this.setState({ selectedPlatform: nextPlatform })
                }}
                gameCount={0}
              />
            )}
          </Mutation>
        )
      }
    }
  )
)

const StatedPlatformSelector = withPlatforms(PlatformSelector)

const appStyles: StyleRules = {
  app: {
    display: 'grid',
    height: '100%',
    gridTemplateRows: '64px auto 64px',
    gridTemplateColumns: '64px auto',
    gridTemplateAreas: `
                        "appbar appbar"
                        "sidebar content"
                        "bottombar bottombar"
                        `
    // gridTemplate: `"[sidebar] 64px span 2 [appbar] 64px"
    //                "[content] auto"
    //               `
  },
  appbar: {
    gridArea: 'appbar'
  },
  platformSelectorContainer: {
    gridArea: 'bottombar',
    bottom: 0
  },
  content: {
    gridArea: 'content'
  },
  appbarColor: {
    background: 'white'
  },
  appbarInner: {
    boxShadow: 'none',
    borderBottom: '1px solid #eee'
  }
  
}

const StatefulPlatformSelectorView = ({ classes }) => {
  return (
    <React.Fragment>
      <div className={classes.gameGrid}>
        <div className={classes.content}>
          <div>Hello World</div>
        </div>
      </div>
    </React.Fragment>
  )
}
class App extends React.Component<StyleProps> {
  render() {
    return (
      <div className={this.props.classes.app}>
        <div className={this.props.classes.sidebar}>
          <Sidebar/>
        </div>
        <div className={this.props.classes.appbar}>
        <AppBar
          position="static"
          color="default"
          classes={{
            colorDefault: this.props.classes.appbarColor,
            positionSticky: this.props.classes.appbarSticky,
            root: this.props.classes.appbarInner
          }}
        >
          <Toolbar>
            <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Snowflake
            </Typography>
          </Toolbar>
        </AppBar>
        </div>
        <div className={this.props.classes.content}>
          <Switch>
            <Route
              path="/"
              render={props => <div>Hello World</div>}
            />
          </Switch>
        </div>
        <Switch>
          <Route
            path="/"
            render={props => <div className={this.props.classes.platformSelectorContainer}>
                              <StatefulPlatformSelector />
                    </div>}
          />
        </Switch>
       
      </div>
    )
  }
}

export default withStyles(appStyles)(App)
