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


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Game Play Button', module)
  .add('inactive', () => <GamePlayButton/>)
  .add('loading', () => <GamePlayButton loading={true}/>);

storiesOf('Game Card', module)
  .add('portrait', () => <GameCard title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('portrait with image', () => <GameCard 
   image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
   title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('landscape', () => <GameCard landscape title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('landscape with image', () => <GameCard 
    image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
    landscape title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('square', () => <GameCard square title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>)
  .add('square with image', () => <GameCard square
  image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443"
  title="Lorem Ipsum" subtitle="Dolor Sit Amen"/>);

storiesOf('Game Card Grid', module)
  .addDecorator(full)
  .add('portrait grid', () => <PortraitGameGridViewStory />)