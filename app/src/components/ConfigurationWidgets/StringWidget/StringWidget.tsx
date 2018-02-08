import * as React from 'react'
import TextField from 'material-ui/TextField'
import { ConfigurationOption, ConfigurationKey } from 'support/Snowflake'
import ConfigurationWidget, { WidgetChildrenProps } from '../ConfigurationWidget/ConfigurationWidget'

type StringWidgetProps = {
  option: ConfigurationOption,
  configKey: ConfigurationKey,
  isLoading: boolean,
}
// <Switch checked={stringOption.Value.Value} onChange={valueChangeHandler}/>
// todo: Refactor this out to a container.
const StringWidget: React.SFC<StringWidgetProps & WidgetChildrenProps> =
 ({option, isLoading, configKey, onValueChange}) => {
  return (
    <ConfigurationWidget
      name={option.Descriptor.DisplayName}
      description={option.Descriptor.Description}
      isLoading={isLoading}
    >
     <TextField
      value={option.Value.Value as string}
      onChange={(e) => onValueChange!({
          newValue: e.target.value,
          valueGuid: option.Value.Guid,
          previousValue: option.Value.Value,
          type: 'string'
        })}
     />
    </ConfigurationWidget>
  )
}

export default StringWidget
