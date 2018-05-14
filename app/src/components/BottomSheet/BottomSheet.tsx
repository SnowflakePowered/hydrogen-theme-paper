import * as React from 'react'
import { Paper } from '@material-ui/core'

import injectSheet, { StyleProps } from 'support/InjectSheet'
import { StyleRules } from '@material-ui/core/styles'

const styles: StyleRules = {
  container: {
    height: '100%',
    padding: 10,
    boxSizing: 'border-box',
    paddingLeft: 24
  }
}

type BottomSheetProps = {
  children: React.ReactNode[] | React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const BottomSheet: React.StatelessComponent<BottomSheetProps & StyleProps> = ({children, classes, onClick}) => (
  <Paper style={{paddingBottom: 10, overflow: 'hidden'}} square={true} elevation={1}>
    <div className={classes.container} onClick={onClick}>
      {children}
    </div>
  </Paper>
)

export default injectSheet(styles)(BottomSheet)
