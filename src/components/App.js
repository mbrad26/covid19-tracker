import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/data.js';
import Map from './Map';
import './App.css';

import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

  console.log("DATA: ", data);

  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      try {
        setIsLoading(false);
        const result = await fetchData();
        setData(result.data);
      } catch {
        setIsError(true);
      }
    }
    data();
  }, []);

  return (
    <div className="App">
      <h2>Covid-19 Tracker</h2>
      <Map />
      {isLoading
        ? <h3>Loading ...</h3>
        : data.confirmed ? (
          <>
            <p>Confirmed:<span> {data.confirmed.value.toLocaleString()}</span></p>
            <p>Deaths:<span> {data.deaths.value.toLocaleString()}</span></p>
            <p>Recovered:<span> {data.recovered.value.toLocaleString()}</span></p>
          </>
        )
        : null
      }
      {isError && <h3>Something went wrong ...</h3>}
    </div>
  );
};

export default App;
