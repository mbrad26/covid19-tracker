import React from 'react';
import { Image } from 'react-bootstrap';

const Country = ({
  country,
  setActive,
  setInactive,
  dataSuccess,
  zoomOnCountry,
  updateEndPoint,
  historicalCountryDataLoading,
  }) => {

  const handleClick = () => {
    dataSuccess(country);
    updateEndPoint(country.country);
    historicalCountryDataLoading();
    zoomOnCountry(country);
    setInactive();
    setTimeout(() => {
      setActive(country);
    }, 2000);
  };

  return (
    <>
      <tbody>
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
          <td>{country.cases.toLocaleString()}</td>
          <td>{country.deaths.toLocaleString()}</td>
          <td>{country.recovered.toLocaleString()}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Country;
