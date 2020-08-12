import React, { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';

const Map = () => {
  const initialState = {
    width: '100vw',
    height: '60vh',
    latitude: 48.856613,
    longitude: 2.352222,
    zoom: 1.85,
  }
  const [viewPort, setViewPort] = useState(initialState);

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

export default Map;
