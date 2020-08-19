import React from 'react';
import { Container, Row, Col } from'react-bootstrap';

import Map from '../Map/Map';
import DataCards from '../../containers/DataCards';
import CountriesTable from '../../containers/CountriesTable';

import './App.css';

const App = () => {
  // console.log('App');

  return (
    <div className="App">
      <h2>Covid-19 Tracker</h2>
      <Map />
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={10} id='global'>
            <DataCards />
          </Col>
        </Row>
        <Row>
          <Col md={6} id='countries'>
            <CountriesTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
