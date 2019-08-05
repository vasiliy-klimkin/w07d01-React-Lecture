import React from 'react';

export default function ListItem(props) {
  console.log('List item is',props)
  const listStyle = {backgroundColor: props.highlight ? 'red' : 'white'}
  return (
    <li style={listStyle}>
      {props.children}
    </li>
  );
}