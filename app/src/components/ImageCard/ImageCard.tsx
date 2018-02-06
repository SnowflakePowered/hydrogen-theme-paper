import * as React from 'react'
import * as PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import injectSheet, { StyleProps } from 'support/InjectSheet'
import { styles } from 'components/ImageCard/ImageCard.styles'
import PhotoIcon from 'material-ui-icons/Photo'

type ImageCardProps = {
  image: string,
  elevation?: number
}

const ImageCard: React.SFC<ImageCardProps & StyleProps> = ({ classes, image, elevation }) => (
  <div className={classes.padding}>
    <div className={classes.root}>
      <div className={classes.paperContainer}>
        <Paper elevation={elevation || 1} className={classes.paper}>
          <div className={classes.imageContainer}>
          {image ? <img className={classes.image} src={image} /> : <PhotoIcon/>}
          </div>
        </Paper>
      </div>
    </div>
  </div>
)

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  elevation: PropTypes.number
}

export default injectSheet(styles)(ImageCard)
