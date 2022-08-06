/*
1. Build Search filter in React
React code to build a simple search filter functionality to display a
filtered list based on the search query entered by the user.

The following are the steps to create a Search filter using React JS:

1.Declare React states for search input values.
2.Create HTML input text for entering search term and update state in onChange function.
3.Add Array.filter() on list of items with search term value.
*/
import { useState } from "react";

import './SearchFilter.css';

const defaultItems = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 'Watermelon', 'Pineapple'];

function SearchFilter() {
  const [items, setItems] = useState(defaultItems);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredItems = defaultItems.filter((item) => 
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setItems(filteredItems);
  }

  return (
    <div className="SearchFilter">
      <div>
        <span>Search: </span>
        <input className="filter" onChange={handleChange} placeholder="Type here" />
      </div>
      {items &&
        items.map((item, i) => <div key={i}>{item}</div>
      )}
    </div>
  )
}

export default SearchFilter;
