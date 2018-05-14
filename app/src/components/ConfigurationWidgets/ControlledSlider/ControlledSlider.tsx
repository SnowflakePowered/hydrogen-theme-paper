import * as React from 'react'
import { Slider } from 'rmwc/Slider'
import injectSheet, { StyleProps } from 'support/InjectSheet'
import { styles } from './ControlledSlider.styles'
import { TextField } from '@material-ui/core'

type ControlledSliderState = {
  value: number
}

type ControlledSliderProps = {
  value?: number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  max?: number
  min?: number
  discrete?: boolean
  step?: number
}

class ControlledSlider extends React.Component<
  ControlledSliderProps & StyleProps,
  ControlledSliderState
> {
  static defaultProps = {
    value: 0,
    discrete: false
  }

  constructor(props: ControlledSliderProps & StyleProps) {
    super(props)
    this.state = {
      value: this.props.value || 0
    }

    this.setState(this.state)
  }

  persistSliderValue(e: React.ChangeEvent<HTMLInputElement>) {
    // tslint:disable-next-line:no-console
    console.log(this.props)
    const newValue = parseInt(e.target.value, 10)
    if (newValue === this.props.value) {
      return
    }

    // tslint:disable-next-line:no-console
    console.log(newValue)
    this.props!.onChange(e)
    this.forceUpdate()
  }

  render() {
    return (
      <div className={this.props.classes.container}>
        <Slider
            value={this.props.value}
            discrete={this.props.discrete}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            displayMarkers={true}
            onChange={e => this.persistSliderValue(e)}
        />
        <TextField
          id="number"
          disabled={true}
          className={this.props.classes.indicator}
          value={this.props.value}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      </div>
    )
  }
}

export default injectSheet(styles)(ControlledSlider)