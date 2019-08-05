import React , { useState } from 'react';
import './App.css';
import ListContainer from './components/ListContainer';
import ListForm from './components/ListForm';

function App() {

  const [listItems, AddItem ] = useState(['Buy Milk', 'Learn React', 'Eat Food']);
  const handleAddItem = (item) => {
    console.log("this is being fired from App.js ");
    console.log('item is ', item);
    // const tempArr = [...listItems];
    // tempArr.push(item);
    AddItem([...listItems, item]);
  }

  const arr = [1,2,3,4];

  return (
    <div className="App">
      <h1>{arr}</h1>
      <button onClick={() => {arr.push(5); }}>Add</button>
      <ListContainer items={listItems}/>
      <ListForm  handleAddItem={handleAddItem}/>
    </div>
  );
}

export default App;
