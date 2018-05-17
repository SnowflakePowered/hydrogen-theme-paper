import React from 'react'
import { ConfigurationOption } from 'support/Snowflake';
import { action } from '@storybook/addon-actions';
import SelectWidget from 'components/ConfigurationWidgets/SelectWidget/SelectWidget';

/** 
 * @type {ConfigurationOption}
 */
const selectOption = {
  Descriptor: {
    DisplayName: 'Test Selection Option',
    Description: 'A Test Selection Option'
  },
  Value: {
    Value: 0,
    Guid: 'test-guid'
  },
  Selection: [
    {
      DisplayName: 'Option One',
      NumericValue: 0
    },
    {
      DisplayName: 'Option Two',
      NumericValue: 1
    },
    {
      DisplayName: 'Option Three',
      NumericValue: 3
    }
  ]
}

const actionHandler = action('on-config-value-change-handled')

class SelectWidgetView extends React.Component {
   
    constructor() {
      super()
      this.state = {
        option: selectOption
      }
    }
    
    handleValueChange(e) {
      actionHandler(e)
      this.setState({
        option: {
          ...this.state.option,
          Value: {
            Value: e.newValue,
            Guid: 'test-guid'
          }
        }
      })
    }

    render () {
        return <SelectWidget option={this.state.option} onValueChange={this.handleValueChange.bind(this)}/>
    }
}

export default SelectWidgetView