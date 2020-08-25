import React from 'react';
import { Container, Row, Col } from'react-bootstrap';

import './App.css';
import News from '../News/News';
import Map from '../../containers/Map';
import DataCards from '../../containers/DataCards';
import CountriesTable from '../../containers/CountriesTable';


const App = () => {
  console.log('App');

  return (
    <div className='container'>
      <Row>
        <Col md={8} id='map-container'>
          <Map />
        </Col>
        <Col md={4} id='countries-table-container'>
          <CountriesTable />
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} id='data-cards-container'>
          <DataCards />
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} id='news'>
          <News />
        </Col>
      </Row>
    </div>
  );
};

export default App;
