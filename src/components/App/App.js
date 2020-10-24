import React from 'react';
import { Row, Col } from'react-bootstrap';

import './App.css';
import Nhs from '../../containers/Nhs';
import Map from '../../containers/Map';
import DataCards from '../../containers/DataCards';

const App = () => (
  <div className='container'>
    <Row>
      <Col md={12} lg={12} id='map-container'>
        <Map />
      </Col>
    </Row>
    <Row id='data-nhs-news'>
      <Col md={7} lg={12} xl={12} id='data-cards-container'>
        <DataCards />
        <Row>
          <Col lg={12} id='nhs-container'>
            <Nhs />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default App;
