import React, { useState } from 'react';

export default function ListForm(props) {
  const [inputField, handleInputField] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputField);
    props.handleAddItem(inputField);
    handleInputField("");
  }


  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(evt) => handleInputField(evt.target.value)} value={inputField} type="text"/>
      <button onClick={ handleSubmit }>Add new item</button>
    </form>
  );
}