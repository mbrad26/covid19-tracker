import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import ChartComponent from '../../containers/ChartComponent';

const ConfirmedCard = ({ cases, casesIncrease }) => (
  <Card className='shadow' id='cases'>
    <Card.Body>
      <Card.Title>Confirmed: <span className='text-warning font-weight-bold'>
          +{casesIncrease.toLocaleString()}
        </span>
      </Card.Title>
      <ChartComponent />
      <Card.Text>
        {cases.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default ConfirmedCard;
