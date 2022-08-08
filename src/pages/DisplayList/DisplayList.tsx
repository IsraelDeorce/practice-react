/*
3.Display a list in React
React code to print each item from the list on the page using Array.map() function to display each item on the page.

The list of items is displayed using React JS through the following steps:

1.Declare list of items as JS Array.
2.Access each item using Array.map()
3.Return JSX code in callback function for every item.
*/

import { useState } from 'react';

function DisplayList() {
  const [blogs] = useState([
    { title: 'My First Name', body: 'Lorem ipsum dolor sit amet...', author: 'Israel' },
    { title: 'My Middle Name', body: 'Lorem ipsum dolor sit amet...', author: 'Deorce' },
    { title: 'My Last Name', body: 'Lorem ipsum dolor sit amet...', author: 'Vieira' },
    { title: 'My Name Prefix', body: 'Lorem ipsum dolor sit amet...', author: 'Junior' },
  ]);
 
  return (
    <div className="DisplayList">
      {blogs.map((b, i) => (
        <div key={i} className="blog-preview">
          <h1>{b.title}</h1>
          <p>{b.body}</p>
          <i>{b.author}</i>
        </div>
      ))}
    </div>
  )
}

export default DisplayList;
