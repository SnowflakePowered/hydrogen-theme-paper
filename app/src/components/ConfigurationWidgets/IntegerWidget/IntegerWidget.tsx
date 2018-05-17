import React from 'react'
import { ConfigurationOption, ConfigurationKey } from 'support/Snowflake'
import ConfigurationWidget, {
  WidgetChildrenProps
} from '../ConfigurationWidget/ConfigurationWidget'
import ControlledSlider from '../ControlledSlider/ControlledSlider'

type IntegerWidgetProps = {
  option: ConfigurationOption;
  configKey: ConfigurationKey;
  isLoading: boolean;
}

// <Switch checked={stringOption.Value.Value} onChange={valueChangeHandler}/>
// todo: Refactor this out to a container.
const IntegerWidget: React.SFC<IntegerWidgetProps & WidgetChildrenProps> = ({
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
          sliderValue={option.Value.Value as number}
          discrete={true}
          min={option.Descriptor.Min}
          max={option.Descriptor.Max}
          step={option.Descriptor.Increment}
          onChange={e =>
            onValueChange!({
              newValue: e,
              valueGuid: option.Value.Guid,
              previousValue: option.Value.Value,
              type: 'integer'
            })
          }
        />
      </div>
    </ConfigurationWidget>
  )
}

export default IntegerWidget
