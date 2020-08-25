import React from 'react';
import { Image } from 'react-bootstrap';

const Info = ({ activeCountry }) => {
  const styleDiv = {
    background: '#E9E8E6'
  }

  const styleParagraph = {
    fontSize: '.8rem',
    margin: '7px',
    fontWeight: 'bold'
  };

  return (
    <div style={styleDiv}>
      <h4>
        <Image
          src={activeCountry.countryInfo.flag}
          alt='flag'
        />
        <span> {activeCountry.country}</span>
      </h4>
      <hr />
      <p style={styleParagraph}>Cases: <span>{activeCountry.cases}</span></p>
      <p style={styleParagraph}>Critical: <span>{activeCountry.critical}</span></p>
      <p style={styleParagraph}>Deaths: <span>{activeCountry.deaths}</span></p>
      <p style={styleParagraph}>Deaths per 1 million: <span>{activeCountry.deathsPerOneMillion}</span></p>
      <p style={styleParagraph}>Recovered: <span>{activeCountry.recovered}</span></p>
      <p style={styleParagraph}>Nr of tests: <span>{activeCountry.tests}</span></p>
      <p style={styleParagraph}>Updated: <span>{new Date(activeCountry.updated).toDateString()}</span></p>
    </div>
  );
};

export default Info;
