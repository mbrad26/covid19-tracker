import React from 'react';
import { Row, Col } from'react-bootstrap';

import './App.css';
import Nhs from '../Nhs/Nhs';
import Map from '../../containers/Map';
import News from '../../containers/News.js';
import DataCards from '../../containers/DataCards';

const App = () => {
  console.log('App');

  return (
    <div className='container'>
      <Row>
        <Col md={12} lg={12} id='map-container'>
          <Map />
        </Col>
      </Row>
      <Row>
        <Col lg={10} id='data-cards-container'>
          <DataCards />
          <Row>
            <Col lg={12} id='nhs-container'>
              <Nhs />
            </Col>
          </Row>
        </Col>
        <Col lg={2} id='news-container'>
          <News />
        </Col>
      </Row>
    </div>
  );
};

export default App;
