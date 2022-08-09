/*
6. Create a Checklist in React
React code to display a checklist with multiple options that can select and the selected options are dynamically displayed on the screen. React State is used to keep track of checked options and onChange() Event handler is triggered to alter the state whenever an option is checked or unchecked.

The following are the steps to create a Checklist in React JS:

1.Create React state to track checkbox value.
2.Function to update checkbox value based on event.target.checked
3.Add checkbox input element to JSX code with onChange function.
*/

import { useState } from "react";

function Checklist() {
  const [isCitizen, setCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  return (
    <div>
      <p>
        <strong>Are you a citizen?</strong> {isCitizen ? 'True' : 'False'}
      </p>
      <p>
        <strong>Are you over 21?</strong> {isOver21 ? 'True' : 'False'}
      </p>
      <div>
        <label>Citizen: </label>
        <input
          id="citizen"
          name="citizen"
          type="checkbox"
          onChange={() => setCitizen(!isCitizen)}
        />
      </div>
      <div>
        <label>Over 21: </label>
        <input
          id="over21"
          name="over21"
          type="checkbox"
          onChange={() => setIsOver21(!isOver21)}
        />
      </div>
    </div>
  )
}

export default Checklist;