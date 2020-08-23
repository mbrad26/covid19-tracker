import React from 'react';
import { Image } from 'react-bootstrap';

const Country = ({
  country,
  dataSuccess,
  updateEndPoint,
  historicalCountryDataLoading,
  zoomOnCountry,
  }) => {

  console.log('COUNTRY');

  const handleClick = () => {
    dataSuccess(country);
    updateEndPoint(country.country);
    historicalCountryDataLoading();
    zoomOnCountry(country);
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
