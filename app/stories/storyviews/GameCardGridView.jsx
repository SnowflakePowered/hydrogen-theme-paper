import React from 'react'
import injectSheet from '../../src/support/InjectSheet'

import GameCardGrid from '../../src/components/GameCardGrid/GameCardGrid'
import GameCard from '../../src/components/GameCard/GameCard'

import grey from 'material-ui/colors/grey'

const styles = {
  container: {
    width: '-webkit-fill-available',
    height: '-webkit-fill-available'
  }
}


const _LandscapeGameGridViewStory = ({ classes }) => {
  const card = int => (<GameCard 
        key={int}
        title={int} landscape/>)
  const gameList = [...Array(2500)].map((x, i) => card(i + 1))

  return (
    <div className={classes.container}>
      <GameCardGrid landscape>
        
      </GameCardGrid>
    </div>)
}


const _PortraitGameGridViewStory = ({ classes }) => {
  const card = int => (<GameCard
    key={int}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    title={int} publisher="Nintendo" portrait/>)
  const gameList = [...Array(1000)].map((x, i) => card(i + 1))
  return (
    <div className={classes.container}>
      <GameCardGrid>
        {
          gameList
        }
      </GameCardGrid>
    </div>)
}


const _SquareGameGridViewStory = ({ classes }) => {
  const card = int => (<GameCard
    key={int}
    image="https://upload.wikimedia.org/wikipedia/en/d/db/NewSuperMarioBrothers.jpg"
    title={int} publisher="Nintendo" square/>)
  const gameList = [...Array(100)].map((x, i) => card(i + 1))
  return (
    <div className={classes.container}>
      <GameCardGrid square>
        {
          gameList
        }
      </GameCardGrid>
    </div>)
}


export const LandscapeGameGridViewStory = injectSheet(styles)(_LandscapeGameGridViewStory) 
export const PortraitGameGridViewStory = injectSheet(styles)(_PortraitGameGridViewStory) 
export const SquareGameGridViewStory = injectSheet(styles)(_SquareGameGridViewStory) 