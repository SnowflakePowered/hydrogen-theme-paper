import { StyleRules } from '@material-ui/core/styles'

export const styles: StyleRules = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
    '-webkit-select': 'none'
  },
  card: {
    padding: 10,
    display: 'inline-block'
  },
  autoSizerContainer: {
    height: '-webkit-fill-available',
    width: '-webkit-fill-available',
  },
  cellWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    outline: 'none'
  }
}
