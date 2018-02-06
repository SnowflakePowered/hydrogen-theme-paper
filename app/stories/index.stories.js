import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import GamePlayButton from '../src/components/GamePlayButton/GamePlayButton';
import GameCard from '../src/components/GameCard/GameCard';
import { LandscapeGameGridViewStory, 
  PortraitGameGridViewStory, 
  SquareGameGridViewStory } from './storyviews/GameCardGridView'

import full from './utils/full'
import Sidebar from 'components/Sidebar/Sidebar';
import PlatformDisplay from 'components/PlatformDisplay/PlatformDisplay';
import PlatformList from 'components/PlatformList/PlatformList';
import { platform } from 'os';
import GameDisplay from 'components/GameDisplay/GameDisplay';
import ImageCard from 'components/ImageCard/ImageCard';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Game Play Button', module)
  .add('inactive', () => <GamePlayButton/>)
  .add('loading', () => <GamePlayButton loading={true}/>);

storiesOf('Image Card', module)
  .add('without image', () => <ImageCard/>)
  .add('with image', () => <ImageCard image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"/>)
storiesOf('Game Card', module)
  .add('portrait', () => <GameCard title="Lorem Ipsum" subtitle="Dolor Sit Amen" onTransition={action('game-transition')}/>)
  .add('portrait with image', () => <GameCard 
   onTransition={action('game-transition')}
   image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
   title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('landscape', () => <GameCard landscape title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('landscape with image', () => <GameCard 
    onTransition={action('game-transition')}
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    landscape title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('square', () => <GameCard onTransition={action('game-transition')} square title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('square with image', () => <GameCard square
  onTransition={action('game-transition')}
  image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
  title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>);

storiesOf('Game Card Grid', module)
  .add('portrait grid', () => <PortraitGameGridViewStory />)
  .add('landscape grid', () => <LandscapeGameGridViewStory />)
  .add('square grid', () => <SquareGameGridViewStory />);

storiesOf('Sidebar', module)
  .addDecorator(full)
  .add('sidebar', () => <Sidebar onTransition={action('on-transition')}/>);

storiesOf('Platform Display', module)
  .add('platform display', () => <PlatformDisplay
    platformName='My Platform'
    platformAltName='MP'
    publisher='Snowflake Publisher'
    year={2018}
    gameCount={100}/>);

storiesOf('Game Display', module)
  .add('game display', () => <GameDisplay
    title={"Lorem Ipsum"}
    year={2018}
    publisher='Snowflake Publisher'
    region='Country'
  />);

const platforms = [
  {
    FriendlyName: "Lorem Ipsum",
    PlatformID: "PLATFORM_LI"
  }
]
storiesOf('Platform List', module)
  .addDecorator(full)
  .add('platform list', () => <PlatformList platforms={platforms} selectedPlatform={platforms[0]}/>)