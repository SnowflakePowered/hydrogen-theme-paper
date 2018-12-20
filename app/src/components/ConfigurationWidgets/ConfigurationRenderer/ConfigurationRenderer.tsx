
import React from 'react'
import injectSheet, { StyleProps } from 'support/InjectSheet'

type ConfigurationRendererProps = {
  name: string,
  // configurations: n
}

// export type WidgetChildrenProps = {
//   onValueChange?: (e: ConfigurationValueChangeEvent) => void
// }

const ConfigurationRenderer: React.SFC<ConfigurationRendererProps & StyleProps>
 = ({classes}) => (
  <div className={classes.container}>
   {

   }
  </div>
)

export default ConfigurationRenderer
