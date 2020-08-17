import React from 'react';
import { Card } from 'react-bootstrap';

const ConfirmedCard = ({ cases, casesIncrease }) => (
  <Card className='shadow' id='cases'>
    <Card.Body>
      <Card.Title>Confirmed</Card.Title>
      <Card.Text className='text-warning font-weight-bold'>
        +{casesIncrease.toLocaleString()}
      </Card.Text>
      <Card.Text>
        {cases.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default ConfirmedCard;
