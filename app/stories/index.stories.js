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
import BooleanWidgetView from './storyviews/BooleanWidgetView'
import StringWidgetView from './storyviews/StringWidgetView'

import full from './utils/full'
import Sidebar from 'components/Sidebar/Sidebar';
import PlatformDisplay from 'components/PlatformDisplay/PlatformDisplay';
import PlatformList from 'components/PlatformList/PlatformList';
import { platform } from 'os';
import GameDisplay from 'components/GameDisplay/GameDisplay';
import ImageCard from 'components/ImageCard/ImageCard';
import SearchBar from 'components/SearchBar/SearchBar';
import BooleanWidget from 'components/ConfigurationWidgets/BooleanWidget/BooleanWidget';
import { ConfigurationOption, ConfigurationDescriptor, ConfigurationValue } from 'support/Snowflake'
import SelectWidget from 'components/ConfigurationWidgets/SelectWidget/SelectWidget';
import StringWidget from 'components/ConfigurationWidgets/StringWidget/StringWidget';
import IntegerWidget from 'components/ConfigurationWidgets/IntegerWidget/IntegerWidget';
import DecimalWidget from 'components/ConfigurationWidgets/DecimalWidget/DecimalWidget';

import { ConfigurationValueChangeEvent } from 'support/ComponentEvents/ConfigurationValueChangeEvent';
import SelectWidgetView from './storyviews/SelectWidgetView';
import IntegerWidgetView from './storyviews/IntegerWidgetView';
import DecimalWidgetView from './storyviews/DecimalWidgetView';

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


storiesOf('Search Bar', module)
  .add('search bar', () => <SearchBar onSearch={action('on-search')}/>)

/** 
 * @type {ConfigurationOption}
 */
const booleanOption = {
  Descriptor: {
    DisplayName: 'Test Boolean Option',
    Description: 'A Test Boolean Option'
  },
  Value: {
    Value: true,
    Guid: 'test-guid'
  }
}

/** 
 * @type {ConfigurationOption}
 */
const selectOption = {
  Descriptor: {
    DisplayName: 'Test Selection Option',
    Description: 'A Test Selection Option'
  },
  Value: {
    Value: 0,
    Guid: 'test-guid'
  },
  Selection: [
    {
      DisplayName: 'Option One',
      NumericValue: 0
    },
    {
      DisplayName: 'Option Two',
      NumericValue: 1
    },
    {
      DisplayName: 'Option Three',
      NumericValue: 3
    }
  ]
}

/** 
 * @type {ConfigurationOption}
 */
const stringOption = {
  Descriptor: {
    DisplayName: 'Test String Option',
    Description: 'A Test String Option'
  },
  Value: {
    Value: "Lorem Ipsum",
    Guid: 'test-guid'
  }
}

/** 
 * @type {ConfigurationOption}
 */
const integerOption = {
  Descriptor: {
    DisplayName: 'Test Integer Option',
    Description: 'A Test Integer Option',
    Min: -10,
    Max: 10,
    Increment: 2
  },
  Value: {
    Value: 0,
    Guid: 'test-guid'
  }
}


/** 
 * @type {ConfigurationOption}
 */
const decimalOption = {
  Descriptor: {
    DisplayName: 'Test Decimal Option',
    Description: 'A Test Decimal Option',
    Min: -10,
    Max: 10,
    Increment: 0.5
  },
  Value: {
    Value: 0,
    Guid: 'test-guid'
  }
}
storiesOf('Configuration Widgets', module)
  .add('boolean widget', () => 
    <BooleanWidget option={booleanOption} onValueChange={action('on-config-value-changed')}/>)
  .add('boolean widget handled', () => 
    <BooleanWidgetView/>)
  .add('selection widget', () =>
    <SelectWidget option={selectOption} onValueChange={action('on-config-value-changed')}/>)
  .add('selection widget handled', () =>
    <SelectWidgetView/>)
  .add('string widget', () =>
    <StringWidget option={stringOption} onValueChange={action('on-config-value-changed')}/>)
  .add('string widget handled', () =>
    <StringWidgetView/>)
  .add('integer slider widget', () =>
    <IntegerWidget option={integerOption} onValueChange={action('on-config-value-changed')}/>)
  .add('integer slide widget handled', () => 
  <IntegerWidgetView/>)
  .add('decimal slider widget', () =>
    <DecimalWidget option={decimalOption} onValueChange={action('on-config-value-changed')}/>)
  .add('decimal slide widget handled', () => 
    <DecimalWidgetView/>)