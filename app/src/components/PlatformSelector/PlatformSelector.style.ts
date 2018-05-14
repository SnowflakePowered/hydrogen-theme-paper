import { StyleRules } from '@material-ui/core/styles'

export const styles: StyleRules = {
  container: {
    display: 'grid',
    gridTemplateRows: 'auto 64px',
    gridTemplateColumns: '100%',
    gridTemplateAreas: '"show" "peek"',
    height: '100% ',
    width: '100%'
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
   // paddingBottom: 62
  },
  listContainer: {
    maxHeight: '60vh',
  },
  containerClear: {
    paddingBottom: 16
  }
}
