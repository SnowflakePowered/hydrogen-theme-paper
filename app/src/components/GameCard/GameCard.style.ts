import grey from 'material-ui/colors/grey'
import { StyleRules } from 'material-ui/styles'

export const dimensions = {
  portrait: {
    width: 170,
    height: 200
  },
  landscape: {
    width: 185,
    height: 135
  },
  square: {
    width: 175,
    height: 165
  },
  contentHeight: 84
}

export const styles: StyleRules  = {
  cardContainer: {
    display: 'inline-block',
    transition: 'box-shadow 0.2s ease-in-out', // todo: optimize this css
    '&:hover': {
      boxShadow: ['0px 5px 5px -3px rgba(0, 0, 0, 0.2)',
                 '0px 8px 10px 1px rgba(0, 0, 0, 0.14)',
                 '0px 3px 14px 2px rgba(0, 0, 0, 0.12)']
    }
  },

  cardContainerPortrait: {
    width: dimensions.portrait.width
  },
  cardContainerLandscape: {
    width: dimensions.landscape.width
  },
  cardContainerSquare: {
    width: dimensions.square.width
  },
  cardMedia: {
    position: 'relative'
  },

  cardImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    userDrag: 'none',
    maxHeight: 'inherit',
    height: '100%',
    width: '100%',
    borderRadius: '2px 2px 0 0'
  },

  cardImageContainer: {
    overflow: 'hidden',
    margin: 0,
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: grey[100]
  },

  sizerPortrait: {
    height: dimensions.portrait.height
  },
  sizerLandscape: {
    height: dimensions.landscape.height
  },
  sizerSquare: {
    height: dimensions.square.height
  },
  sizer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: grey[300]
  },
  cardSubtitle: {
    fontSize: '0.75em',
    color: grey[400],
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  cardTitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '0.9em'
  },
  playButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10,
    opacity: 0,
    userSelect: 'none',
    transition: 'opacity 0.2s ease',
    zIndex: 100,
    '$cardContainer:hover &': {
      opacity: 1,
      userSelect: 'auto'
    }
  },
  cardText: {
    height: dimensions.contentHeight
  }
}
