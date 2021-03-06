import React from 'react';
import ReactMapGl, {
  NavigationControl,
  FlyToInterpolator,
} from 'react-map-gl';

import './Map.css';
import CountriesTable from '../../containers/CountriesTable';
import MarkerComponent from '../../containers/MarkerComponent';

const Map = ({ viewPort, onViewChange }) => (
  <div className='' id='map-component'>
    <CountriesTable />
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/mbrad26/ckebcxm2b0or11aqbra84w885'
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

export default Map;
