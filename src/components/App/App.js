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

      <Container fluid>
        <Row>
          <Col>
            <Map />
          </Col>
          <Col md={4} id='countries'>
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
