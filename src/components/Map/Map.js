import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactMapGl, { Source, Layer, Marker } from 'react-map-gl';

import './Map.css';

const Map = () => {
  const initialState = {
    width: window.innerWidth * 0.80,
    height: window.innerHeight * 0.6,
    latitude: 45,
    longitude: 5,
    zoom: 0.65,
  }
  const [viewPort, setViewPort] = useState(initialState);
  const data = useSelector(state => state.countriesDataState.data);

  console.log('DATA: ', data);

  let height, width;
  // let background = 'background-color';

  const stats = cases =>
    cases < 100
      ? 1
      : cases < 1000
      ? 2
      : cases < 5000
      ? 3
      : cases < 10000
      ? 4
      : cases < 50000
      ? 5
      : cases < 100000
      ? 6
      : cases < 500000
      ? 7
      : cases < 1000000
      ? 8
      : cases < 5000000
      ? 9
      : 10

const style = {
  1: {height: 10 + 'px', width: 10 + 'px', 'background-color': '#fecefe'},
  2: {height: 10 + 'px', width: 10 + 'px', 'background-color': '#fecefe'},
  3: {height: 12 + 'px', width: 12 + 'px', 'background-color': '#fecefe'},
  4: {height: 14 + 'px', width: 14 + 'px', 'background-color': '#fecefe'},
  5: {height: 16 + 'px', width: 16 + 'px', 'background-color': '#fecefe'},
  6: {height: 18 + 'px', width: 18 + 'px', 'background-color': '#fecefe'},
  7: {height: 20 + 'px', width: 20 + 'px', 'background-color': '#fecefe'},
  8: {height: 22 + 'px', width: 22 + 'px', 'background-color': '#fecefe'},
  9: {height: 35 + 'px', width: 35 + 'px', 'background-color': '#fecefe'},
  10: {height: 45 + 'px', width: 45 + 'px', 'background-color': '#fecefe'},
}

  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mbrad26/cke2wx80h1c9h1an776mwm24r"
      onViewportChange={newViewport => setViewPort(newViewport)}
    >
    {data.map(country => {
      const cases = stats(country.cases)

      return (
          <Marker
            key={country.country}
            latitude={country.countryInfo.lat}
            longitude={country.countryInfo.long}
          >
            <div
              id='marker'
              style={style[cases]}
            >
            </div>
          </Marker>
        )
      })
    }

    </ReactMapGl>
  );
};

export default Map;
