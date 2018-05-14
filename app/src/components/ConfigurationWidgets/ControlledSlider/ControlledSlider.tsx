import * as React from 'react'
import { Slider } from 'rmwc/Slider'
import injectSheet, { StyleProps } from 'support/InjectSheet'
import { styles } from './ControlledSlider.styles'
import { TextField } from '@material-ui/core'

// type ControlledSliderState = {
//   sliderValue: number
// }

type ControlledSliderProps = {
  sliderValue?: number
  onChange: (newValue: number) => void
  max?: number
  min?: number
  discrete?: boolean
  step?: number
}

class ControlledSlider extends React.Component<
  ControlledSliderProps & StyleProps
> {

  static defaultProps = {
    sliderValue: 0,
    discrete: false
  }

  constructor(props: ControlledSliderProps & StyleProps) {
    super(props)
    // this.state = {
    //   sliderValue: this.props.sliderValue || 0
    // }

    // // this.setState(this.state)
  }

  persistSliderValue(e: CustomEvent<Slider>) {
    // tslint:disable-next-line:no-console
    console.log(e)
    // tslint:disable-next-line:no-console
    console.log(e.detail.value)

    // tslint:disable-next-line:no-console
    const newValue = parseInt(e.detail.value, 10)
    if (newValue === this.props.sliderValue) {
      return
    }

    // tslint:disable-next-line:no-console
    console.log(newValue)
    this.props!.onChange(newValue)
    this.forceUpdate()
  }

  render() {
    return (
      <div className={this.props.classes.container}>
        <Slider
            value={this.props.sliderValue}
            discrete={this.props.discrete}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            displayMarkers={true}
            onChange={e => this.persistSliderValue(e)}
            onInput={e => this.persistSliderValue(e)}
        />
        <TextField
          id="number"
          disabled={true}
          className={this.props.classes.indicator}
          value={this.props.sliderValue}
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