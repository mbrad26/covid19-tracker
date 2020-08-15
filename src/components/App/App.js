import React from 'react';
import { Container, Row, Col } from'react-bootstrap';

import Map from '../Map/Map';
import GlobalDataCards from '../../containers/GlobalDataCards';
import CountriesTable from '../../containers/CountriesTable';
import './App.module.css';

const App = () => {
  // console.log('App');

  return (
    <div className="App">
      <h2>Covid-19 Tracker</h2>
      <Map />
      <Container fluid>
        <Row>
          <Col md={8} id='global'>
            <GlobalDataCards />
          </Col>
          <Col md={4} id='countries'>
            <CountriesTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
