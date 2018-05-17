import React from 'react'
import { ConfigurationOption } from 'support/Snowflake';
import BooleanWidget from 'components/ConfigurationWidgets/BooleanWidget/BooleanWidget';
import { action } from '@storybook/addon-actions';

/** @type { ConfigurationOption } */
const defaultBooleanOption = {
    Descriptor: {
      DisplayName: 'Test Boolean Option',
      Description: 'A Test Boolean Option'
    },
    Value: {
      Value: true,
      Guid: 'test-guid'
    }
  }

const actionHandler = action('on-config-value-change-handled')

class BooleanWidgetView extends React.Component {
   
    constructor() {
      super()
      this.state = {
        option: defaultBooleanOption
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
        return <BooleanWidget option={this.state.option} onValueChange={this.handleValueChange.bind(this)}/>
    }
}

export default BooleanWidgetView