import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ListContainer from '../src/components/ListContainer';

storiesOf('List Container', module)
  .add('List empty', () => <ListContainer items={[]} />)
  .add('List with 3 Items', () => <ListContainer items={['Buy Milk', 'Learn React', 'Eat Food']}/>)