import React from 'react';
import { Image } from 'react-bootstrap';

import { styleDiv, styleParagraph } from './utils';

const Info = ({ activeCountry }) => (
  <div style={styleDiv}>
    <h4>
      <Image
        src={activeCountry.countryInfo.flag}
        alt='flag'
      />
      <span> {activeCountry.country}</span>
    </h4>
    <hr />
    <p style={styleParagraph}>Cases:          <span>{activeCountry.cases.toLocaleString()}</span></p>
    <p style={styleParagraph}>Critical:       <span>{activeCountry.critical.toLocaleString()}</span></p>
    <p style={styleParagraph}>Deaths:         <span>{activeCountry.deaths.toLocaleString()}</span></p>
    <p style={styleParagraph}>Deaths/million: <span>{activeCountry.deathsPerOneMillion.toLocaleString()}</span></p>
    <p style={styleParagraph}>Recovered:      <span>{activeCountry.recovered.toLocaleString()}</span></p>
    <p style={styleParagraph}>Nr of tests:    <span>{activeCountry.tests.toLocaleString()}</span></p>
    <p style={styleParagraph}>Updated:        <span>{new Date(activeCountry.updated).toDateString()}</span></p>
  </div>
);

export default Info;
