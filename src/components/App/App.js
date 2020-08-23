import React from 'react';
import { Container, Row, Col } from'react-bootstrap';

import Map from '../../containers/Map';
import DataCards from '../../containers/DataCards';
import CountriesTable from '../../containers/CountriesTable';

import './App.css';

const App = () => {
  console.log('App');

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={12} md={8} lg={8} id='map'>
            <Map />
          </Col>
          <Col sm={12} md={4} lg={4} id="countries-table">
            <CountriesTable />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} id='global'>
            <DataCards />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default App;
