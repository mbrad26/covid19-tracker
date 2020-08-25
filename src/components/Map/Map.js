import React from 'react';
import ReactMapGl, {
  NavigationControl,
  FlyToInterpolator,
} from 'react-map-gl';

import './Map.css';
import MarkerComponent from '../../containers/MarkerComponent';

const Map = ({ viewPort, onViewChange }) => {
  console.log('MAP');

  return (
    <div className='shadow' id='map-component'>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/mbrad26/cke2wx80h1c9h1an776mwm24r'
        onViewportChange={viewPort => onViewChange(viewPort)}
        transitionDuration={2500}
        transitionInterpolator={new FlyToInterpolator()}
      >
        <div id='controller'>
          <NavigationControl />
        </div>
        <MarkerComponent />
      </ReactMapGl>
    </div>
  );
};

export default Map;
