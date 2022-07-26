import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;

// ringkasan useState
// the useState hook lets you add state to functional components
// in classes, the state is always an object
// with the useState hook, the state doesnt have to be an object
// the useState hook returns an array with 2 elements
// the first element is the current value of the state, and the second element is a state setter function
// new state value depends on the previous state value? you can pass a function to the setter function
// when dealing with objects or arrays, always make sure to spread your state variable and then call the setter function