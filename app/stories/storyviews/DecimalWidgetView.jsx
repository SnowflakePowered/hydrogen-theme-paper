import * as React from 'react'
import { ConfigurationOption } from 'support/Snowflake';
import { action } from '@storybook/addon-actions';
import DecimalWidget from 'components/ConfigurationWidgets/DecimalWidget/DecimalWidget';

 /** 
 * @type {ConfigurationOption}
 */
const decimalOption = {
  Descriptor: {
    DisplayName: 'Test Decimal Option',
    Description: 'A Test Decimal Option',
    Min: -10,
    Max: 10,
    Increment: 0.25
  },
  Value: {
    Value: 0,
    Guid: 'test-guid'
  }
}
const actionHandler = action('on-config-value-change-handled')

class DecimalWidgetView extends React.Component {
   
    constructor() {
      super()
      this.state = {
        option: decimalOption
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
        return <DecimalWidget option={this.state.option} onValueChange={this.handleValueChange.bind(this)}/>
    }
}

export default DecimalWidgetView