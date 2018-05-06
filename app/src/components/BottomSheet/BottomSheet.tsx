import * as React from 'react'
import Paper from 'material-ui/Paper'

import injectSheet, { StyleProps } from 'support/InjectSheet'
import { StyleRules } from 'material-ui/styles';

const styles: StyleRules = {
  container: {
    height: '100%',
    padding: 10,
    boxSizing: 'border-box'
  }
}

type BottomSheetProps = {
  children: React.ReactNode[] | React.ReactNode,
  className?: string
}

const BottomSheet: React.StatelessComponent<BottomSheetProps & StyleProps> = ({children, classes}) => (
  <Paper>
    <div className={classes.container}>
      {children}
    </div>
  </Paper>
)

export default injectSheet(styles)(BottomSheet)
