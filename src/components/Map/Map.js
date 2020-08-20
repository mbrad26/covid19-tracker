import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactMapGl, { Marker } from 'react-map-gl';

const Map = () => {
  const initialState = {
    width: '100vw',
    height: '60vh',
    latitude: 40.856613,
    longitude: 5.352222,
    zoom: 0.75,
  }
  const data = useSelector(state => state.countriesDataState.data);
  const [viewPort, setViewPort] = useState(initialState);
  console.log('MAP_DATA: ', data);

  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mbrad26/ckdr7xcji0pq619oo5yj3ovuo"
      onViewportChange={newViewport => setViewPort(newViewport)}
    >
    {data.map(country =>
      <Marker
        key={country.country}
        latitude={country.countryInfo.lat}
        longitude={country.countryInfo.long}
      >
        <button>Marker</button>
      </Marker>
    )}

    </ReactMapGl>
  );
};

export default Map;
