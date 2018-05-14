import { StyleRules } from '@material-ui/core/styles'

export const styles: StyleRules = {
  container: {
    display: 'flex',
    height: '-webkit-fill-available',
    width: '-webkit-fill-available',
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
    justifyContent: 'center'
  }
}
