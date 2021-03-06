/* istanbul ignore file */
import React from 'react';
import { Marker} from 'react-map-gl';

import { stats, style } from './utils';
import PopupComponent from '../../containers/PopupComponent.js';

const MarkerComponent = ({ countries, onSetActive }) => (
  <>
    {countries.map(country => {
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
                onSetActive(country);
              }}
              onMouseOver={() => {onSetActive(country)}}

            >
            </button>
          </Marker>
        )
      })}
    <PopupComponent />
  </>
);

export default MarkerComponent;
