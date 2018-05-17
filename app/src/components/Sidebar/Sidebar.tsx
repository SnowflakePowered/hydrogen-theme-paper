import React from 'react'
import injectSheet, { StyleProps } from 'support/InjectSheet'

import { List, ListItem } from '@material-ui/core'
import { Menu as MenuIcon, VideogameAsset as GamepadIcon } from '@material-ui/icons'

// import Link from 'components/Link/Link'
import { styles } from './Sidebar.style'
import { NoProps } from 'support/NoProps'
import { ViewTransitionEvent, ViewStates } from 'support/ComponentEvents/ViewTransitionEvent'

type SidebarProps = {
  onTransition?: (event: ViewTransitionEvent<NoProps>) => void
}

const Sidebar: React.SFC<SidebarProps & StyleProps> =  ({classes, onTransition}) => {
  const handleTransition = (nextView: ViewStates) => {
    if (typeof onTransition === 'function') { 
      onTransition!({ nextView: nextView })
    }
  }

  return (
    <div className={classes.container}>
      <List>
          <ListItem button={true} onClick={() => handleTransition(ViewStates.GameView)}>
            <MenuIcon className={classes.icon} />
          </ListItem>
          <ListItem button={true} onClick={() => handleTransition(ViewStates.PlatformView)}>
            <GamepadIcon className={classes.icon} />
          </ListItem>
      </List>
    </div>
  )
}

export default injectSheet(styles)(Sidebar)
