import * as React from 'react'
import { ConfigurationOption } from 'support/Snowflake';
import { action } from '@storybook/addon-actions';
import StringWidget from 'components/ConfigurationWidgets/StringWidget/StringWidget';
 
/**
 * @type {ConfigurationOption}
 */
const stringOption = {
  Descriptor: {
    DisplayName: 'Test String Option',
    Description: 'A Test String Option'
  },
  Value: {
    Value: "Lorem Ipsum",
    Guid: 'test-guid'
  }
}

const actionHandler = action('on-config-value-change-handled')

class StringWidgetView extends React.Component {
   
    constructor() {
      super()
      this.state = {
        option: stringOption
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
        return <StringWidget option={this.state.option} onValueChange={this.handleValueChange.bind(this)}/>
    }
}

export default StringWidgetView