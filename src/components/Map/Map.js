import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

import './Map.css';
import MarkerComponent from '../../containers/MarkerComponent';

const Map = () => {
  const initialState = {
    width: window.innerWidth * 0.65,
    height: window.innerHeight * 0.70,
    latitude: 25,
    longitude: 7,
    zoom: 1.1,
  }
  const [viewPort, setViewPort] = useState(initialState);

  console.log('MAP');

  return (
    <div className='mt-3 shadow' id='map-component'>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mbrad26/cke2wx80h1c9h1an776mwm24r"
        onViewportChange={viewPort => setViewPort(viewPort)}
      >
        <MarkerComponent />

      </ReactMapGl>
    </div>
  );
};

export default Map;
