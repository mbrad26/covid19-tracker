import React from 'react';
import { Image } from 'react-bootstrap';

const Info = ({ activeCountry }) => (
  <div>
    <h4>
      <Image
        src={activeCountry.countryInfo.flag}
        alt='flag'
      />
      <span> {activeCountry.country}</span>
    </h4>
    <hr />
    <p>Cases: <span>{activeCountry.cases}</span></p>
    <p>Critical: <span>{activeCountry.critical}</span></p>
    <p>Deaths: <span>{activeCountry.deaths}</span></p>
    <p>Deaths per 1 million: <span>{activeCountry.deathsPerOneMillion}</span></p>
    <p>Recovered: <span>{activeCountry.recovered}</span></p>
    <p>Nr of tests: <span>{activeCountry.tests}</span></p>
    <p>Updated: <span>{new Date(activeCountry.updated).toDateString()}</span></p>
  </div>
)

export default Info;
