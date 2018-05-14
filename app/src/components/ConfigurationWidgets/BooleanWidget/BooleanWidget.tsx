import * as React from 'react'
import { Switch } from '@material-ui/core'

import ConfigurationWidget, { WidgetChildrenProps }
 from 'components/ConfigurationWidgets/ConfigurationWidget/ConfigurationWidget'
import { ConfigurationOption, ConfigurationKey } from 'support/Snowflake'

type BooleanWidgetProps = {
  option: ConfigurationOption,
  configKey: ConfigurationKey,
  isLoading: boolean
}
// todo: Refactor this out to a container.
const BooleanWidget: React.SFC<BooleanWidgetProps & WidgetChildrenProps> =
     ({option, isLoading, configKey, onValueChange}) => {
  return (
    <ConfigurationWidget
        name={option.Descriptor.DisplayName}
        description={option.Descriptor.Description}
        isLoading={isLoading}
    >
    <Switch
        checked={option.Value.Value as boolean}
        onChange={(e) => onValueChange!({
                previousValue: option.Value.Value,
                newValue: e.target.checked,
                type: 'boolean',
                valueGuid: option.Value.Guid
        })}
    />
    </ConfigurationWidget>
  )
}

export default BooleanWidget
