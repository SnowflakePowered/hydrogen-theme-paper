import React from 'react'
import * as PropTypes from 'prop-types'

import { Paper } from '@material-ui/core'
import injectSheet, { StyleProps } from 'support/InjectSheet'
import { styles } from 'components/ImageCard/ImageCard.styles'
import { Photo as PhotoIcon } from '@material-ui/icons'

type ImageCardProps = {
  image?: string,
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
