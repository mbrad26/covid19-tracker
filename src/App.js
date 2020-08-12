import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import './App.css';

const Map = () => {
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 50.909698,
    longitude: -1.404351,
    zoom: 2,
  });

  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={newViewport => setViewPort(newViewport)}
    />
  );
};

const App = () => {
  return (
    <div className="App">
      Covid-19 Tracker
      <Map />
    </div>
  );
};

export default App;
