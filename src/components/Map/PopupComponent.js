import React from 'react';
import { Popup } from 'react-map-gl';
import { Image } from 'react-bootstrap';

const PopupComponent = ({ active, setActive }) => {
  return (
    <>
      {active &&
        <Popup
          latitude={active.countryInfo.lat}
          longitude={active.countryInfo.long}
          dynamicPosition={true}
          onClose={() => setActive(null)}
          closeOnClick={true}
        >
          <div>
            <h4>
              <Image
                src={active.countryInfo.flag}
                alt='flag'
              />
              <span> {active.country}</span>
            </h4>
            <hr />
            <p>Cases: <span>{active.cases}</span></p>
            <p>Critical: <span>{active.critical}</span></p>
            <p>Deaths: <span>{active.deaths}</span></p>
            <p>Detahs per 1 million: <span>{active.deathsPerOneMillion}</span></p>
            <p>Recovered: <span>{active.recovered}</span></p>
            <p>Nr of tests: <span>{active.tests}</span></p>
            <p>Updated: <span>{new Date(active.updated).toDateString()}</span></p>
          </div>
        </Popup>
      }
    </>
  );
};

export default PopupComponent;
