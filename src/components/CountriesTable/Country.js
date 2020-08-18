import React from 'react';
import { Image } from 'react-bootstrap';

// import './CountriesTable.css';

const Country = ({ country, handleClick }) => (
  <tr>
    <td><Image
          src={country.countryInfo.flag}
          alt={`${country.country} flag`}
          id='flag'
        />
    </td>
    <td>
      <button
        className='button'
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

export default Country;
