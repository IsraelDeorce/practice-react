/*
7. Simple Login form in React
React code for simple login form where the user login by entering their username and password. The form inputs are validated to check if correct information is entered and the error messages are the validation fails. The login form is hidden and the “Welcome, ${name}” message is shown when the user login is successful.

The following are the steps to create a simple login form using React JS:

1.Create name, email and password input form elements.
2.React States to store user input values.
3.Add form validation for compare name, email and password with correct values.
4.Display “Welcome, ${name}” if login is successful, else display the error message.
*/

import { useState } from 'react';
import './SimpleLoginForm.css';

const secret = {
  name: 'israel',
  email: 'israel@yopmail.com',
  password: '1234'
}

function SimpleLoginForm() {
  const [details, setDetails] = useState({ name: '', email: '', password: ''});

  const handleSubmit = (e: any) => {
    // Avoid page re-render
    e.preventDefault();
    if (details.name === secret.name && details.email === secret.email && details.password === secret.password) {
      alert('SUCCESS!');
    } else {
      alert('FAIL!');
    }    
  }
  return (
    <form className="SimpleLoginForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
        value={details.name}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
        value={details.email}  
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}
      />
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default SimpleLoginForm;