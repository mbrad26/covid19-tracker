import React from 'react';
import { Row, Col } from'react-bootstrap';

import './App.css';
import News from '../News/News';
import Map from '../../containers/Map';
import DataCards from '../../containers/DataCards';
import CountriesTable from '../../containers/CountriesTable';


const App = () => {
  console.log('App');

  return (
    <div>
      <Row>
        <Col md={3} id='data-cards-container'>
          <DataCards />
        </Col>
        <Col md={6} id='map-container'>
          <Map />
        </Col>
        <Col md={3} id='countries-table-container'>
          <CountriesTable />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} id='news'>
          <News />
        </Col>
      </Row>
    </div>
  );
};

export default App;
