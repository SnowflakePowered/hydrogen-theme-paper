import { withStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export type ClassList = { [className: string]: string }

/**
 * Exposes the classes props for CSS-in-JS.
 */
export type StyleShape = {
  classes: StyleSheet,
  theme?: Theme
}

export type StyleProps = {
  classes: { [className: string]: string }
}

type StyleSheetBlock = {
   [ruleName: string]: string | number | string[] | number[] | (string | number)[] | StyleSheetBlock 
  } 

export type StyleSheet = { [className: string]: StyleSheetBlock }

// tslint:disable-next-line:no-any
export type ThemedStyleSheet = (theme: any) => StyleSheet

/**
 * @deprecated Use material-ui/core/styles/withStyles
 */
const injectSheet = withStyles

export default injectSheet
