import * as React from 'react'
import { ConfigurationOption, ConfigurationKey } from 'support/Snowflake'
import ConfigurationWidget, {
  WidgetChildrenProps
} from '../ConfigurationWidget/ConfigurationWidget'
import ControlledSlider from '../ControlledSlider/ControlledSlider'

type DecimalWidgetProps = {
  option: ConfigurationOption;
  configKey: ConfigurationKey;
  isLoading: boolean;
}

// <Switch checked={stringOption.Value.Value} onChange={valueChangeHandler}/>
// todo: Refactor this out to a container.
const DecimalWidget: React.SFC<DecimalWidgetProps & WidgetChildrenProps> = ({
  option,
  isLoading,
  configKey,
  onValueChange
}) => {
  return (
    <ConfigurationWidget
      name={option.Descriptor.DisplayName}
      description={option.Descriptor.Description}
      isLoading={isLoading}
    >
      <div>
        <ControlledSlider
          value={option.Value.Value as number}
          min={option.Descriptor.Min}
          max={option.Descriptor.Max}
          step={option.Descriptor.Increment}
          onChange={e =>
            onValueChange!({
              newValue: parseFloat(e.target.value),
              valueGuid: option.Value.Guid,
              previousValue: option.Value.Value,
              type: 'decimal'
            })
          }
        />
      </div>
    </ConfigurationWidget>
  )
}

export default DecimalWidget
