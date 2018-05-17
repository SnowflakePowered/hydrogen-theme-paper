import React from 'react'
import injectSheet, { StyleProps } from 'support/InjectSheet'

import { Typography, Card, CardContent, CardMedia } from '@material-ui/core'

import GamePlayButton from 'components/GamePlayButton/GamePlayButton'

import { Photo as PhotoIcon } from '@material-ui/icons'

import classNames from 'classnames'
import { styles } from './GameCard.style'
import { QuickPlayEvent } from 'support/ComponentEvents/QuickPlayEvent'
import { ViewTransitionEvent, ViewStates } from 'support/ComponentEvents/ViewTransitionEvent'

type GameDetailsTransitionProps = {
  platformID: string,
  guid: string
}
// todo: z-depth on hover
// todo: button on hover
type GameCardProps = {
  // tslint:disable-next-line:no-any
  image?: string,
  title: string,
  subtitle?: string,
  portrait?: boolean,
  landscape?: boolean,
  square?: boolean,
  guid: string,
  platformID: string,
  onQuickPlay?: (event: QuickPlayEvent) => void
  onTransition?: (event: ViewTransitionEvent<GameDetailsTransitionProps>) => void
}

const GameCard: React.SFC<GameCardProps & StyleProps> =
 ({ classes, image, title, subtitle, portrait, landscape, square, guid, platformID,
    onQuickPlay, onTransition }) => (
  <div 
    className={classNames({
      [classes.cardContainer]: true,
      [classes.cardContainerSquare]: square,
      [classes.cardContainerLandscape]: landscape,
      [classes.cardContainerPortrait]: portrait,
      [classes.cardContainerPortrait]: !(portrait && landscape && square)
    })}
  >
    <Card>
      <CardMedia className={classes.cardMedia} image={image || 'someimage'}>
        <div className={classes.playButton}>
          <GamePlayButton onClick={() => onQuickPlay!({gameGuid: guid})}/>
        </div>
        <div 
          className={classNames({
            [classes.sizer]: true,
            [classes.sizerSquare]: square,
            [classes.sizerLandscape]: landscape,
            [classes.sizerPortrait]: portrait,
            [classes.sizerPortrait]: !(portrait && landscape && square)
          })}
        >
          <div
            className={classes.cardImageContainer} 
            onClick={
            () => onTransition!({
              nextView: ViewStates.GameDetailsView, props: {platformID: platformID, guid: guid}
            })}
          >
            {image ? <img className={classes.cardImage} src={image ? image : ''} /> : <PhotoIcon/>}
          </div>
        </div>
      </CardMedia>
      <div 
        className={classes.cardText}
        onClick={
          () => onTransition!({
            nextView: ViewStates.GameDetailsView, props: {platformID: platformID, guid: guid}
          })}
      >
        <CardContent>
          <Typography variant="headline" component="h2" className={classes.cardTitle}>{title}</Typography>
          <Typography component="h3" className={classes.cardSubtitle}>{subtitle}</Typography>
        </CardContent>
      </div>
    </Card>
  </div>)

export default injectSheet(styles)(GameCard)
