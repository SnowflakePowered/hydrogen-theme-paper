import { StyleRules } from 'material-ui/styles/withStyles'

export const styles: StyleRules = {
    container: {
      fontFamily: 'Roboto, sans-serif',
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '[main] 60% [control] 40%',
      gridGap: 10,
      height: 60
    },
    description: {
  
    },
    control: {
      justifySelf: 'end',
      width: '-webkit-fill-available',
      marginRight: 20,
      justifyContent: 'flex-end'
    },
    configTitle: {
  
    },
    configDescription: {
      color: 'grey',
      fontSize: '0.75em'
    }
  }
  