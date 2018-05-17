import React from 'react'
import { ConfigurationOption } from 'support/Snowflake';
import { action } from '@storybook/addon-actions';
import IntegerWidget from 'components/ConfigurationWidgets/IntegerWidget/IntegerWidget';

 /** 
 * @type {ConfigurationOption}
 */
const integerOption = {
  Descriptor: {
    DisplayName: 'Test Integer Option',
    Description: 'A Test Integer Option',
    Min: -10,
    Max: 10,
    Increment: 2
  },
  Value: {
    Value: 0,
    Guid: 'test-guid'
  }
}
const actionHandler = action('on-config-value-change-handled')

class IntegerWidgetView extends React.Component {
   
    constructor() {
      super()
      this.state = {
        option: integerOption
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
        return <IntegerWidget option={this.state.option} onValueChange={this.handleValueChange.bind(this)}/>
    }
}

export default IntegerWidgetView