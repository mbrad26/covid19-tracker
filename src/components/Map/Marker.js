import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Marker} from 'react-map-gl';

import { stats, style } from './utils';
import PopupComponent from './PopupComponent';

const MarkerComponent = () => {
  const [active, setActive] = useState(null);
  const { data } = useSelector(state => state.countriesDataState);

  console.log('COUNTRY: ', active);

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
                onClick={e => {
                  e.preventDefault();
                  setActive(country);
                }}
              >
              </button>
            </Marker>
          )
        })
      }
      <PopupComponent active={active} setActive={setActive} />
    </>
  );
};

export default MarkerComponent;
