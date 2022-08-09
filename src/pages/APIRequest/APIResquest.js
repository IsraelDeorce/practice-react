/*
8. Print data from REST API
React code to collect data from rest API using fetch() in JavaScript combined with useEffect() to load the content on page render.

The following are the steps to print data from REST API in React JS:

1.Create React state to store the API response.
2.Declare State to Component JSX code to display the API response.
3.JS function where API call is through axios.get() or fetch().
4.Add callback function to update the React state with API response.
5.Add HTML button with JS function with onChange attribute.
*/

// {
//   "categories": [],
//   "created_at": "2020-01-05 13:42:29.569033",
//   "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//   "id": "GBR0v5oRTRamdghZFUi50g",
//   "updated_at": "2020-01-05 13:42:29.569033",
//   "url": "https://api.chucknorris.io/jokes/GBR0v5oRTRamdghZFUi50g",
//   "value": "Chuck Norris killed the submitter of joke #1868 while the submitter was writing it because of what the joke said."
// }

import axios from 'axios';
import { useEffect, useState } from 'react';

// https://api.chucknorris.io/
function APIRequest() {
  const [response, setResponse] = useState({})
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    getJoke()
  }, [])

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await fetch('api/data')
  //     response = await response.json()
  //     dataSet(response)
  //   }

  //   fetchMyAPI()
  // }, [])

  const getJoke = async () => {
    setIsloading(true);
    try {
      const joke = await axios.get('https://api.chucknorris.io/jokes/random');
      console.log(joke.data);
      setResponse(joke.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  }

  

  return (
    <div>
      <h3>{response.value}</h3>
      <button type="button" onClick={getJoke} disabled={isLoading}>Get Chuck Norris Joke</button>
    </div>
  );
}

export default APIRequest;
