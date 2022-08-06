/*
2. Simple counter exercise
Creating a simple counter using React which increments or decrements count
dynamically on-screen as the user clicks on the button. This exercise requires
knowledge of fundamental React concepts such as State, Component, etc.

We can complete the simple counter exercise with the following steps:

1. Create React state to store the count value.
2. Declare JS functions to incement or decrement the value through setState().
3. Add HTML buttons with onClick to JSX code.
*/
import { useState } from "react";

import './SimpleCounter.css';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="SimpleCounter">
      <span>{`Counter: ${count}`}</span>
      <button type="button" className="primary" onClick={handleIncrement}>Increment</button>
      <button type="button" className="negative" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default SimpleCounter;
