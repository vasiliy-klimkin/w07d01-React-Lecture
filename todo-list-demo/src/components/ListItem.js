import React from 'react';

export default function ListItem(props) {
  console.log('List item is',props)
  return (
    <li>
      {props.children}
    </li>
  );
}