import * as React from 'react'
import { StyleProps } from 'support/InjectSheet'
import BottomSheet from 'components/BottomSheet/BottomSheet'
import { styles } from './PlatformSelector.style'
import PlatformDisplay from 'components/PlatformDisplay/PlatformDisplay'
import { Platform } from 'support/Snowflake'
import {
  Drawer,
  List,
  ListItem,
  Typography,
  withStyles
} from '@material-ui/core'
import { SelectedPlatformChangedEvent } from 'support/ComponentEvents/SelectedPlatformChangedEvent'

type PlatformSelectorProps = {
  platforms: { [platformId: string]: Platform }
  selectedPlatform: Platform
  gameCount: number
  onSelectedPlatformChanged?: (e: SelectedPlatformChangedEvent) => void
}

type PlatformSelectorState = {
  drawerOpen: boolean
}
class PlatformSelector extends React.Component<
  PlatformSelectorProps & StyleProps,
  PlatformSelectorState
> {
  constructor(props: PlatformSelectorProps & StyleProps) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  toggleDrawer = (drawerOpen: boolean) => () => {
    this.setState({ drawerOpen })
  }

  handlePlatformChanged = (
    previousPlatform: Platform,
    nextPlatform: Platform
  ) => () => {
    // tslint:disable-next-line:no-console
    if (this.props.onSelectedPlatformChanged) {
      this.props.onSelectedPlatformChanged({ previousPlatform, nextPlatform })
    }
  }

  render() {
    const { classes, gameCount, selectedPlatform, platforms } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.drawerContainer}>
          <Drawer
            classes={{
              paper: classes.drawer
            }}
            variant="persistent"
            anchor="bottom"
            open={this.state.drawerOpen}
            onClose={this.toggleDrawer(false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
            <div className={classes.drawerContentsContainer}>
                <div className={classes.listContainer}>
                  <List 
                    classes={{
                      root: classes.listRoot,
                    }}
                  >
                    {Object.entries(platforms).map(([k, p]) => (
                      // tslint:disable-next-line:no-console
                      <ListItem
                        key={p.PlatformID}
                        button={true}
                        onClick={this.handlePlatformChanged(selectedPlatform, p)}
                      >
                        <Typography>{p.FriendlyName}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
              <div className={classes.containerClear}/>
            </div>
          </Drawer>
        </div>
        <div className={classes.peek}>
          <BottomSheet onClick={this.toggleDrawer(true)}>
            <PlatformDisplay
              platformName={selectedPlatform.FriendlyName}
              gameCount={gameCount}
            />
          </BottomSheet>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PlatformSelector)
