import React from 'react'
import injectSheet from '../../src/support/InjectSheet'

import GameCardGrid from '../../src/components/GameCardGrid/GameCardGrid'
import GameCard from '../../src/components/GameCard/GameCard'

import { grey } from '@material-ui/core/colors';

const styles = {
  container: {
    width: '-webkit-fill-available',
    height: '-webkit-fill-available'
  }
}
const landscapeCard = int => (<GameCard 
  key={int}
  title={int} landscape/>)
const landscapeGameList = [...Array(1000)].map((x, i) => landscapeCard(i + 1))


const _LandscapeGameGridViewStory = ({ classes }) => {
 
  return (
    <div className={classes.container}>
      <GameCardGrid landscape>
       {
          landscapeGameList
        }
      </GameCardGrid>
    </div>)
}

const portraitCard = int => (<GameCard
  key={int}
  title={int} publisher="Nintendo" portrait/>)
const portraitGameList = [...Array(1000)].map((x, i) => portraitCard(i + 1))

const _PortraitGameGridViewStory = ({ classes }) => {

  return (
    <div className={classes.container}>
      <GameCardGrid>
        {
          portraitGameList
        }
      </GameCardGrid>
    </div>)
}

const squareCard = int => (<GameCard
  key={int}
  title={int} publisher="Nintendo" square/>)
const squareGameList = [...Array(1000)].map((x, i) => squareCard(i + 1))

const _SquareGameGridViewStory = ({ classes }) => {

  return (
    <div className={classes.container}>
      <GameCardGrid square>
        {
          squareGameList
        }
      </GameCardGrid>
    </div>)
}

const _PortraitGameGridViewStoryHeader = ({ classes }) => {

  return (
    <div className={classes.container}>
      <GameCardGrid header={
        <div>
          Hello World!
        </div>

      }>
        {
          portraitGameList
        }
      </GameCardGrid>
    </div>)
}

export const LandscapeGameGridViewStory = injectSheet(styles)(_LandscapeGameGridViewStory) 
export const PortraitGameGridViewStory = injectSheet(styles)(_PortraitGameGridViewStory) 
export const SquareGameGridViewStory = injectSheet(styles)(_SquareGameGridViewStory) 
export const PortraitGameGridViewStoryHeader = injectSheet(styles)(_PortraitGameGridViewStoryHeader)