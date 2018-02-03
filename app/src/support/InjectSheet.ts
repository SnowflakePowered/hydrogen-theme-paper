import * as React from 'react'
import withStyles, { StyleRules } from 'material-ui/styles/withStyles'
import { Theme } from 'material-ui/styles/createMuiTheme'

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
 * Injects a plain JSS stylesheet object, or a theme reactor function, into a React Component.
 * Types are inferred correctly if your component is typed with types other than StyleProps, but
 * if your component is otherwise prop-less, you must type the returned function as <{}> or type your props as
 * NoProps & StyleProps.
 * @param styles The JSS stylesheet object or stylesheet function. This should be a plain Javascript object.
 */
const injectSheet = (styles: StyleRules) =>
/**
 * @param component The React component to inject styles into.
 */
 <T extends {}>(component: React.ComponentType<T & StyleProps>): React.ComponentClass<T> => {
   // tslint:disable-next-line:no-console
   return withStyles(styles)(component) as React.ComponentClass<T>
 }

export default injectSheet
