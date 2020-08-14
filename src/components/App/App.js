import React from 'react';
import { Container, Row, Col } from'react-bootstrap';

import Map from '../Map/Map';
import DataCards from '../../containers/dataCards';
import CountriesTable from '../CountriesTable/CountriesTable';
import './App.module.css';

const App = () => {
  console.log('App');

  return (
    <div className="App">
      <h2>Covid-19 Tracker</h2>
      <Map />
      <Container fluid>
        <Row>
          <Col md={8}>
            <DataCards />
          </Col>
          <Col md={4}>
            <CountriesTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
