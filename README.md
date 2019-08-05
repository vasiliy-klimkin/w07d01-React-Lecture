
## Component-Based UI w/ React

#### [REPO LINK](https://github.com/vasiliy-klimkin/w07d01-React-Lecture)

Today we will be talking about `React` and Integrating React Components.

### Review


#### Imperative vs Declarative

`Declarative programming` -  programming paradigm … that expresses the logic of a computation without describing its control flow.

`Imperative programming` - programming paradigm that uses statements that change a program’s state.
A good video explains this can be found [here](https://www.youtube.com/watch?v=MUaBK42wjhY).

#### JSX ( JavaScript and XML )

With React, it's an extension for XML-like code for elements and components.
JSX is alittle more stricter than HTML. We will have to these rules to write JSX correctly.

 - Rule 1 - All Tags MUST be closed.

   ```jsx
   <div>
     {/* ... Components or other HTML in here ...  which are also closed correctly! */}
   </div>
   ```

   Or

   ```jsx
    <ListItem/>
   ```

 - Rule 2 - Child tags `MUST` close before the parent.

   ```jsx
    <ul>
      <li>Child1</li>
      <li>Child2</li>
      <li>Child3</li>
      <li>Child4</li>
    </ul>
   ```

 - Rule 3 - All JSX expressions `MUST` have a parent (or root) element.

   ```jsx
   return (
      <div>
        <span>Name: Chuck Norris </span>
        <p>
          Chuck Norris threw a grenade and killed 50 people, then it exploded.
        </p>
      </div>
    )
   ```

#### Webpack and Babel

`Babel` - babel converts our react written components into ES2015+. Babel lets us use new features of JS that may not be supported by the browser. You can write your code in the new features, where then Babel will convert that said code into something that the browser understands.

`Webpack` - s a popular module bundling system built on top of Node.js. It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.

#### Live Coding

### NOTE: the rest of the notes are for reference if you get lost today in react!

We Will be making a ToDo list.

First thing is first, we need to dermined what components we will need.

`App`       - will be our main component that consists of the entire app.
`List`      - a list where all the ToDo items live.
`ListItem`  - an item of a list.
`ItemForm`  - A form to be able to add an item.


Code examples from the live lecture:

#### Passing Props

To pass props into a component:

```jsx

<List className="List" items={items} />

```

in this instance, the props are: `className` and `items`. When we get into the The `List` Component, we can see the props from:

```jsx

export default function List(props) {
  console.log(props) // we will see an object with keys className and items, which will be the props
}
```

#### Looping Pattern

```jsx
const items = props.items.map( (item, index) => <ListItem key={index}>{item}</ListItem>)
//...
return (
  <div>
    {items}
  </div>
)
```

#### Passing children with JSX

We can pass some child element(s) from one component to the other.

```jsx
import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <ul>
      <ListItem>I AM THE CHILD</ListItem>
    </ul>
  );
};

```


```jsx
export default function ListItem(props) {
  return (
    <li className="list-item">
      {props.children}
    </li>
  );
};
```

The code above will print out a single list item with "I AM THE CHILD" as the content:

 - I AM THE CHILD


#### Handing Events

Example of an event handler.

```jsx
const handleClick = () => {
  console.log("CLICKED!!!")
}

return (
  <div>
    <button onClick={handleClick}>Click Me</button>
  </div>
)

```

#### Managing State

We will use something called `React Hooks` to manage our state.
first thing, we need import `useState`.
Then we define a hook, we must remember it needes a deconstructer array, where it sets the value of the item to the first element of the array, followed by the function to use it to update the state
Then we can assign an event function to update the state and react will re-render the DOM for it.

```jsx
improt React, { useState } from "react";

export default function example (props) {
  const [number, numberEvent] = useState(0);
  return (
    <div>
      {number}
      <button onClick={e => numberEvent(number + 1)}>Add +1 </button>
    </div>
  )
}
```

#### Controlled Inputs


```jsx
import React, { useState } from "react";

export default function List(props) {


  const [input, handleInput] = useState("");

  const handleForm = (evt) => {
    evt.preventDefault();
    props.addItem(input);
    handleInput("");
  }

  return (
    <form className="ItemForm" onSubmit={handleForm} >
      <input value={input} onChange={evt => handleInput(evt.target.value)} className="itemAdd" type="text"/>
      <button className="add-btn">Add</button>
    </form>
  )
}
```

#### Fragments
```jsx
return (
  <Fragment>
    <p><Hello world/p>
  </Fragment>
);
```

Fragments are basically root tags for components. You should ONLY use them IF you do not need to style the component. (Fragments do not have className)

### Conditional Renderdering

```jsx
const arr = ['item1', 'item2']

return (
  <div>
    {arr.length > 0 ? <List/> : <p>No items</p>}
  </div>
);
```

We can use turniary expressions to perform conditional rendering.

If I need to not render a component at all or render it depending on an expression:

```jsx
const arr = ['item1', 'item2']

return (
  <div>
    {arr.length > 0 && <List/> }
  </div>
);
```

This basically evaluates to this kind of pseudocode:

```jsx
  if (arr.length > 0) {
    return <List/>
  }
```

#### Storybook

We also talked about storybook and whats it uses are.

Installation -> [StoryBookJS](https://storybook.js.org/docs/guides/guide-react/)

It is essentoally a documentation tool for ui components.
We looked into briefly how to build stories ( the file inside `.storybook` of the repo you will be working on today)
You will be making a story for EACH of your components you make. With this you can test your components before you
add them toghether to form an app. You will be spending alot of time using this tool and writting many stories throughout the days to come.

