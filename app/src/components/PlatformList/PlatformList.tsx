import * as React from 'react'
import injectSheet, { StyleProps } from 'support/InjectSheet'
import { List, ListItem, Typography, Button } from '@material-ui/core'
import BottomSheet from 'components/BottomSheet/BottomSheet'
import { styles } from './PlatformList.style'
import PlatformDisplay from 'components/PlatformDisplay/PlatformDisplay'
import { Platform } from 'support/Snowflake'

type PlatformListProps = {
  platforms: { [platformId: string]: Platform },
  selectedPlatform: Platform,
  gameCount: number
}

const PlatformList: React.SFC<PlatformListProps & StyleProps> = 
  ({ classes, platforms, selectedPlatform, gameCount }) => {
  return (
    <div className={classes.container}>
      <div className={classes.platformSelector}>
        <List>
          {Object.entries(platforms).map(([k, p]) =>
              <ListItem key={p.PlatformID} button={true}>
                <Typography>{p.FriendlyName}</Typography>
              </ListItem>
            )}
        </List>
      </div>
      <div className={classes.platformDisplay}>
        <div className={classes.platformImage}>
          <Typography>Placeholder</Typography>
        </div>
        <BottomSheet className={classes.platformInformation}>
          <div className={classes.platformInformationInner}>
            <div className={classes.platformInfoDisplay}>
              <PlatformDisplay 
                platformName={selectedPlatform.FriendlyName}
                gameCount={gameCount}
              />
            </div>
            <div className={classes.menu}>
              {/* todo: refactor out this ugliness */}
              <Button>Games</Button>
              <Button>Controllers</Button>
            </div>
          </div>
        </BottomSheet>
      </div>
    </div>
  )
}

export default injectSheet(styles)(PlatformList)
