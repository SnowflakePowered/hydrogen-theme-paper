import React from 'react'
import { action } from '@storybook/addon-actions'
import PlatformSelector from 'components/PlatformSelector/PlatformSelector'


const actionHandler = action('on-platform-change-handled')

const platforms = [
    {
      FriendlyName: "Lorem Ipsum",
      PlatformID: "PLATFORM_LI"
    },
    {
      FriendlyName: "Lorem Ipsum 2",
      PlatformID: "PLATFORM_LI2"
    },
    {
      FriendlyName: "Lorem Ipsum 3",
      PlatformID: "PLATFORM_LI3"
    },

  ]

class PlatformSelectorView extends React.Component {
    constructor() {
      super()
      this.state = {
        selectedPlatform: platforms[0]
      }
    }
    
    handleValueChange(e) {
      actionHandler(e)
      this.setState({selectedPlatform: e.nextPlatform})
    }

    render () {
        return <PlatformSelector
            platforms={platforms} 
            selectedPlatform={this.state.selectedPlatform}
            onSelectedPlatformChanged={this.handleValueChange.bind(this)}
        />
    }
}

export default PlatformSelectorView