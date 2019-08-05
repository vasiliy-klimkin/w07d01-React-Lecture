import React from 'react';
import ListItem from './ListItem'

export default function ListContainer(props) {
  return (
    <ul>
      {props.items.map( (item, index ) => <ListItem key={index}>{item}</ListItem>)}
    </ul>
  );
}