import React from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-bootstrap';

import { doSetActive, doSetInactive } from '../../actions/countryData';

const Country = ({
  country,
  dataSuccess,
  zoomOnCountry,
  updateEndPoint,
  historicalCountryDataLoading,
  }) => {
  const dispatch = useDispatch();

  console.log('COUNTRY');

  const handleClick = () => {
    dataSuccess(country);
    updateEndPoint(country.country);
    historicalCountryDataLoading();
    zoomOnCountry(country);
    dispatch(doSetInactive());
    setTimeout(() => {
      dispatch(doSetActive(country));
    }, 2000);
  };

  return (
    <tr>
      <td><Image
            src={country.countryInfo.flag}
            loading='lazy'
            alt={`${country.country} flag`}
            id='flag'
          />
      </td>
      <td>
        <button
          onClick={handleClick}
        >
          {country.country}
        </button>
      </td>
      <td>{country.cases}</td>
      <td>{country.deaths}</td>
      <td>{country.recovered}</td>
    </tr>
  );
};

export default Country;
