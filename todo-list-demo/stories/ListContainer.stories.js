import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ListItem from '../src/components/ListItem';

storiesOf('List Item', module)
  .add('Simple', () => <ListItem>Simple List Item</ListItem>)
  .add('With Emoji', () => (
    <ListItem>👍</ListItem>
  ))
  .add('hightligted', () => <ListItem highlight>hightligted</ListItem>)