import { StyleRules } from '@material-ui/core/styles'

export const styles: StyleRules = {
  '@font-face': {
    fontFamily: 'Roboto'
  },
  container: {
    fontFamily: 'Roboto, Noto Sans, sans-serif',
    display: 'grid',
    gridTemplateRows: '50% 50%'
  },
  title: {
    fontSize: '1.5em',
    wordBreak: 'break-word'
  },
  subTitle: {
    fontSize: '1em'
  },
  tagline: {
    fontSize: '0.9em'
  },
  metadata: {
    fontSize: '0.9em',
    fontWeight: 200,
    fontStyle: 'oblique'
  },
  top: {
    gridRow: 1,
    alignSelf: 'flex-start'
  },
  bottom: {
    gridRow: 2,
    alignSelf: 'flex-end'
  }
}
