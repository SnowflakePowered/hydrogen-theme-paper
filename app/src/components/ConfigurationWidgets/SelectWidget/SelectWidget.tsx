import * as React from 'react'

import ConfigurationWidget, { WidgetChildrenProps }
 from 'components/ConfigurationWidgets/ConfigurationWidget/ConfigurationWidget'
import { ConfigurationOption, ConfigurationKey } from 'support/Snowflake'
import { Select, MenuItem } from '@material-ui/core'

type SelectWidgetProps = {
  option: ConfigurationOption,
  configKey: ConfigurationKey,
  isLoading: boolean
}
// todo: Refactor this out to a container.
const SelectWidget: React.SFC<SelectWidgetProps & WidgetChildrenProps> =
     ({option, isLoading, configKey, onValueChange}) => {
  return (
    <ConfigurationWidget
        name={option.Descriptor.DisplayName}
        description={option.Descriptor.Description}
        isLoading={isLoading}
    >
      <Select
        value={option.Value.Value as number}
        onChange={(e) => onValueChange!(
          {
            previousValue: option.Value.Value as number,
            newValue: parseInt(e.target.value, 10),
            type: 'selection',
            valueGuid: option.Value.Guid
          }
        )}
      >
        {option.Selection!.map(s => (
        <MenuItem
            key={s.NumericValue}
            value={s.NumericValue}
        >
            {s.DisplayName}
        </MenuItem>))}
      </Select>
    </ConfigurationWidget>
  )
}

export default SelectWidget
