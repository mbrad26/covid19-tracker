import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import './App.css';

const Map = () => {
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '60vh',
    latitude: 48.856613,
    longitude: 2.352222,
    zoom: 1.45,
  });

  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mbrad26/ckdr7xcji0pq619oo5yj3ovuo"
      onViewportChange={newViewport => setViewPort(newViewport)}
    />
  );
};

const App = () => {
  return (
    <div className="App">
      <h2>Covid-19 Tracker</h2>
      <Map />
    </div>
  );
};

export default App;
