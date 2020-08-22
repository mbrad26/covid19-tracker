import React from 'react';
import { Image } from 'react-bootstrap';

import { doDataSuccess } from '../../actions/globalData';
import { doUpdateEndPoint, doHistoricalCountryDataLoading } from '../../actions/historicalData';

const Country = ({
  country,
  dataSuccess,
  updateEndPoint,
  historicalCountryDataLoading,
  }) => {

  const handleClick = () => {
    dataSuccess(country);
    updateEndPoint(country.country);
    historicalCountryDataLoading();
  };

  return (
    <tr>
      <td><Image
            src={country.countryInfo.flag}
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
