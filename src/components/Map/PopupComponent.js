import React from 'react';
import { Popup } from 'react-map-gl';

import Info from './Info';

const PopupComponent = ({ activeCountry, onSetInactive }) => (
  <>
    {activeCountry != null && activeCountry.active &&
      <Popup
      latitude={activeCountry.countryInfo.lat}
      longitude={activeCountry.countryInfo.long}
      onClose={() => onSetInactive()}
      closeOnClick={true}
      >
        <Info activeCountry={activeCountry} />
      </Popup>
    }
  </>
);

export default PopupComponent;
