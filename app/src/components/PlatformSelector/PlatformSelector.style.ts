import { StyleRules } from '@material-ui/core/styles'

export const styles: StyleRules = {
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 1000,
  },
  listRoot: {
    maxHeight: '60vh',
    minHeight: '60vh',
    position: 'relative',
    overflow: 'auto',
  },
  peek: {
    gridArea: 'peek',
    zIndex: 10,
  },
  drawerContainer: {
    height: '100%',
    zIndex: 1,
  },
  drawerContentsContainer: {
    display: 'grid',
    gridTemplateRows: 'auto 62px'
  },
  drawer: {
   zIndex: -1,
  },
  listContainer: {
    maxHeight: '60vh',
  },
  containerClear: {
    paddingBottom: 16
  }
}
