import React from 'react';
import { Image } from 'react-bootstrap';

const Country = ({ country }) => (
  <tr>
    <td><Image
          src={country.countryInfo.flag}
          alt={`${country.country} flag`}
          id='flag'
        />
    </td>
    <td>{country.country}</td>
    <td>{country.cases}</td>
    <td>{country.deaths}</td>
    <td>{country.recovered}</td>
  </tr>
);

export default Country;
