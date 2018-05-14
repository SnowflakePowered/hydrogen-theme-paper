import { StyleRules } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

export const styles: StyleRules = {
  barContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '48px auto 10px',
    alignItems: 'center',
    opacity: 1,
    fontFamily: 'Roboto, sans-serif',
    '&:hover, &:focus': {
      opacity: 1
    }
  },
  searchIcon: {
    justifySelf: 'center'
  },
  textFieldUnderline: {
    '&:after': {
      backgroundColor: blue[100]
    }
  }
}
