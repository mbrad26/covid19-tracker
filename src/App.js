import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import './App.css';

import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

const Map = () => {
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '60vh',
    latitude: 48.856613,
    longitude: 2.352222,
    zoom: 1.85,
  });

  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mbrad26/ckdr7xcji0pq619oo5yj3ovuo"
      onViewportChange={newViewport => setViewPort(newViewport)}
    >
      <Marker
        latitude={48}
        longitude={2}
      >
        <button>Marker</button>
      </Marker>
    </ReactMapGl>
  );
};

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const result = await axios.get(url);
      // console.log(result.data.confirmed.value);
      setData(result.data);
      setIsLoading(false)
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  };

  console.log("DATA: ", data);

  useEffect(() => {
    fetchData();
  }, [url]);

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
