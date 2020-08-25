import React from 'react';
import { Popup } from 'react-map-gl';

import Info from './Info';

const PopupComponent = ({ activeCountry, onSetInactive }) => {
  const handleOnClose = () => onSetInactive();

  return (
    <div id='popup'>
      {activeCountry != null && activeCountry.active &&
        <Popup
          latitude={activeCountry.countryInfo.lat}
          longitude={activeCountry.countryInfo.long}
          onClose={handleOnClose}
          closeOnClick={true}
        >
          <Info activeCountry={activeCountry} />
        </Popup>
      }
    </div>
  )
};

export default PopupComponent;
