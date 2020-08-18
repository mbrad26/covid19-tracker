import React from 'react';
import { Card } from 'react-bootstrap';

import ChartComponent from '../Chart/ChartComponent.js';

const ConfirmedCard = ({ cases, casesIncrease }) => (
  <Card className='shadow' id='cases'>
    <Card.Body>
      <Card.Title>Confirmed: <span className='text-warning font-weight-bold'>
          +{casesIncrease.toLocaleString()}
        </span>
      </Card.Title>
      <ChartComponent label={'Cases'} color={'orange'} />
      <Card.Text>
        {cases.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default ConfirmedCard;
