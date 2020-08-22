import React from 'react';
import { Marker } from 'react-map-gl';
import { useSelector } from 'react-redux';

import { stats, style } from './utils';

const MarkerComponent = () => {
  const { data } = useSelector(state => state.countriesDataState);

  return (
    <>
      {data.map(country => {
        const cases = stats(country.cases)

        return (
            <Marker
              key={country.country}
              latitude={country.countryInfo.lat}
              longitude={country.countryInfo.long}
            >
              <button
                id='marker'
                style={style[cases]}
              >
              </button>
            </Marker>
          )
        })
      }
    </>
  );
};

export default MarkerComponent;
